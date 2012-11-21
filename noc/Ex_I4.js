
/*finish me*/ 
window.onload = function () {init();}
var r; 
var generator,xloc,yloc, sd,mean,w,h,walker; 
function init() { 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    createjs.Ticker.setFPS(30); 
    createjs.Ticker.addListener(this);

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
      sd = 100; 
      mean = processing.width/2; 
      xloc = (xloc*sd) +mean; 
  
      yloc = generator.nextGaussian();
      sd = 50; 
      mean = processing.height/2; 
      yloc = (yloc*sd) +mean; 
  

      //processing.ellipse(xloc, processing.height/3, 16,16); 
      };
       
    }
    walker = new Walker(0,0); 
  }
    function tick(){ 
      stage.update(); 
     // walker.step(); 
      walker.display(); 
    } 

function Walker(x,y) { 
    this.x = x; 
    this.y = y; 
    this.step = step; 
    this.display=display; 
    this.circle = new createjs.Shape(); 
}
function display(){  
    var cw;
    if (xloc>= mean+50){ 
      cw = 60; 
    }else { 
      cw = 20; 
    }
    this.circle.graphics.beginFill("black").drawCircle(xloc,yloc, cw,cw); 
    stage.addChild(this.circle); 
}
function step() { 
    random = Math.random(); 
    if(random < 0.4) {
        this.x++; 
    } 
    else if(random < 0.6){ 
        this.x--; 
    } 
    
    else if(random < 0.8) { 
        this.y++;  
    }

    else { 
        this.y--; 
    }   

}

//end of the createjs setup

