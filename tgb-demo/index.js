window.onload = function(){
  var background = BufferHandler.load('audio/background.mp3').done(function(id){ background = id;});
  var ksch = BufferHandler.load('audio/kschhh.mp3').done(function(id){ ksch = id;});
  var gogo = BufferHandler.load('audio/gogogogo.mp3').done(function(id){ gogo = id;});
  var dommmdoo = BufferHandler.load('audio/dommmdoo.mp3').done(function(id){ dommmdoo = id;});


  $.when.apply($, [background, ksch, gogo, dommmdoo]).done(function(){
    console.log('done')
    BufferHandler.play(ksch);
    BufferHandler.play(gogo);
    BufferHandler.play(dommmdoo);


  });
}