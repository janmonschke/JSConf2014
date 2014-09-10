nx.onload = function(){

  nx.sendsTo("local");

  var background = BufferHandler.load('audio/background.mp3').done(function(id){ background = id;});
  var ksch = BufferHandler.load('audio/kschhh.mp3').done(function(id){ ksch = id;});
  var gogo = BufferHandler.load('audio/gogogogo.mp3').done(function(id){ gogo = id;});
  var dommmdoo = BufferHandler.load('audio/dommmdoo.mp3').done(function(id){ dommmdoo = id;});




  $.when.apply($, [background, ksch, gogo, dommmdoo]).done(function(){
    matrix1.row = 2;
    matrix1.draw();
    matrix1.col = 4;
    matrix1.draw();
    button1.response = function(data){
      if(data.press)
        BufferHandler.play(dommmdoo);
      console.log(data)
    }
    //
    // BufferHandler.play(gogo);
    // BufferHandler.play(dommmdoo);


  });
}