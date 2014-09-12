nx.onload = function(){

  nx.sendsTo("local");

  var background = 'audio/background.mp3';
  var ksch = 'audio/kschhh.mp3';
  var gogo = 'audio/gogogogo.mp3';
  var dommmdoo = 'audio/dommmdoo-2.mp3';
  var wowow = 'audio/dodomdodom.mp3';

  var guit1 = 'audio/guit1-1.mp3';
  var guit2 = 'audio/guit2-1.mp3';
  var guit3 = 'audio/guit3-1.mp3';

  var jzbg = 'audio/jzbg.mp3';


  $.when.apply($, [ BufferHandler.load(guit1),
                    BufferHandler.load(guit2),
                    BufferHandler.load(guit3),
                    BufferHandler.load(jzbg)]).done(function(){
    // matrix1.row = 2;
    // matrix1.draw();
    // matrix1.col = 4;
    // matrix1.draw();
    button1.response = function(data){
      if(data.press){
        BufferHandler.stop(guit1);
        BufferHandler.play(guit1);
      }
    }

    button2.response = function(data){
      if(data.press){
        BufferHandler.stop(guit2);
        BufferHandler.play(guit2);
      }
    }

    button3.response = function(data){
      if(data.press)
        BufferHandler.play(guit3);
    }

    var bg1Playing = false;

    button4.response = function(data){
      if(data.press){
        BufferHandler.stop(jzbg);
        BufferHandler.play(jzbg, {loop: true});
      }

        return
        if(bg1Playing){
          bg1Playing = false;
          BufferHandler.stop(jzbg);
        }else{
          bg1Playing = true;
          BufferHandler.play(jzbg, {loop: true});
        }
    }

    button5.response = function(data){
      if(data.press)
        BufferHandler.stop(jzbg);
    }

    //
    // BufferHandler.play(gogo);
    // BufferHandler.play(dommmdoo);


  });
}