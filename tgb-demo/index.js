nx.onload = function(){

  nx.sendsTo("local");

  var background = 'audio/background.mp3';
  var ksch = 'audio/kschhh.mp3';
  var gogo = 'audio/gogogogo.mp3';
  var dommmdoo = 'audio/dommmdoo-2.mp3';
  var wowow = 'audio/dodomdodom.mp3';

  var guit1 = 'audio/guit1-1.mp3';
  var guit2 = 'audio/guit2.mp3';
  var guit3 = 'audio/guit3.mp3';
  var guit4 = 'audio/guit4.mp3';

  var jzbg = 'audio/jzbg.mp3';
  var tiktak = 'audio/tiktak.mp3';
  var whenipretend = 'audio/whenipretend.mp3';
  var lying = 'audio/lying.mp3';
  var trying = 'audio/trying.mp3';

  var end = 'audio/end.mp3';

  $.when.apply($, [ BufferHandler.load(guit1),
                    BufferHandler.load(guit2),
                    BufferHandler.load(guit3),
                    BufferHandler.load(guit4),
                    BufferHandler.load(jzbg),
                    BufferHandler.load(tiktak),
                    BufferHandler.load(whenipretend),
                    BufferHandler.load(lying),
                    BufferHandler.load(trying),
                    BufferHandler.load(end)]).done(function(){
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
      if(data.press){
        BufferHandler.stop(guit3);
        BufferHandler.play(guit3);
      }
    }

    button4.response = function(data){
      if(data.press)
        BufferHandler.play(guit4);
    }

    // starts jay z bg
    button5.response = function(data){
      if(data.press){
        BufferHandler.stop(jzbg);
        BufferHandler.play(jzbg, {loop: true});
      }
    }

    // stops the jay z bg
    button6.response = function(data){
      if(data.press)
        BufferHandler.stop(jzbg);
    }

    button7.response = function(data){
      if(data.press){
        BufferHandler.stop(tiktak);
        BufferHandler.play(tiktak, {loop: true});
      }
    }

    button8.response = function(data){
      if(data.press)
        BufferHandler.stop(tiktak);
    }

    button9.response = function(data){
      if(data.press)
        BufferHandler.play(whenipretend);
    }

    button10.response = function(data){
      if(data.press){
        BufferHandler.stop(trying);
        BufferHandler.play(trying);
      }
    }

    button11.response = function(data){
      if(data.press){
        BufferHandler.stop(lying);
        BufferHandler.play(lying);
      }
    }

    button12.response = function(data){
      if(data.press){
        BufferHandler.stop(end);
        BufferHandler.play(end);
      }
    }
    //
    // BufferHandler.play(gogo);
    // BufferHandler.play(dommmdoo);


  });
}