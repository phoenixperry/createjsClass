
/*finish me*/ 
window.onload = function () {init();}
var r; 
var generator,xloc,yloc, sd,mean,w,h,walker; 
function init() { 
    canvas = document.getElementById("canvas"); 
    var p = new Processing(canvas, sketch);
    function sketch(processing){ 
      processing.setup = function(){
        processing.size(800,600); 
        w = processing.width; 
        h = processing.height; 
        processing.background(255); 
        generator = new processing.Random(); 
        processing.smooth(); 
        processing.noStroke(); 
        processing.fill(0,10); 
      }
      processing.draw = function() {
      xloc = generator.nextGaussian();  
      r = generator.nextGaussian(); 
      sd = 100; 
      mean = processing.width/2; 
      xloc = Math.round((xloc*sd) + mean); 
      yloc = generator.nextGaussian();
      sd = 50; 
      mean = processing.height/2; 
      yloc = (yloc*sd) +mean; 
      r = 100;
      rloc = generator.nextGaussian();  
      sd = 150; 
      mean = r/2; 
      r += r/(rloc*sd) +mean; 
      red = generator.nextGaussian(); 
      sd = 50; 
      mean= 255/2; 
      red = (red*sd) +mean; 
      processing.fill(red,25,25,red); 

      processing.ellipse(xloc, yloc,r,r); 

  

      //processing.ellipse(xloc, processing.height/3, 16,16); 
      };
       
    }
    walker = new Walker(0,0); 
  }

//end of the createjs setup

