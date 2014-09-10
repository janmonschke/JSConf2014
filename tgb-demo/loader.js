window.BufferHandler = {
  context: new AudioContext(),
  cache: {},
  playing: {},

  load: function(url){
    var deferred = $.Deferred();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
      this._processArrayBuffer(xhr.response, deferred, url);
    }.bind(this);
    xhr.send();

    return deferred;
  },

  _processArrayBuffer: function(arrayBuffer, deferred, url){
    this.context.decodeAudioData(arrayBuffer, function(buffer) {
      this.cache[url] = buffer;
      // the url will be used as the id
      deferred.resolve(url);
    }.bind(this), function(e) {
      deferred.reject('Error decoding file', e);
    });
  },

  play: function(id){
    var source = this.context.createBufferSource();
    source.buffer = this.cache[id];
    source.connect(this.context.destination);

    source.start(0);
    this.playing[id] = source;
  },

  stop: function(id){
    try{
      this.playing[id].stop();
    }catch(e){
      // boooom
    }
  }
}