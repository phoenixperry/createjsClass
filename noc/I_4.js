
window.onload = function () {init();}
var r; 

function init() { 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
   
    var p = new Processing(canvas, sketch);
    function sketch(processing){ 
      var generator,xloc,sd,mean; 
      processing.setup = function(){
        processing.size(800,800); 
        processing.background(255); 
        generator = new processing.Random(); 
        processing.smooth(); 
        processing.noStroke(); 
        processing.fill(0,10); 
      }
      processing.draw = function() {
      xloc = generator.nextGaussian(); 
      sd = 60; 
      mean = processing.width/2; 
      xloc = (xloc*sd) +mean; 
      processing.ellipse(xloc, processing.height/3, 16,16); 
      }; 
       
    }
  }
function randomDist() { 
  while(true) { 
    var r1 =  Math.random(); 
    var probability = r1; 
    var r2 = Math.random(); 
      if(r2 < probability){ 
        return r1; 
      }
  }
}

   



//end of the createjs setup

