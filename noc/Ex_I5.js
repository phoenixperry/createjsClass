
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
      //processing.ellipse(xloc, processing.height/3, 16,16); 
      };
       
    }
    walker = new Walker(w/2, h/2); 
  }
    function tick(){ 
      stage.update(); 
      walker.step(); 
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
    this.circle.graphics.beginFill("black").drawCircle(this.x,this.y, 10,10); 
    stage.addChild(this.circle); 
}
function step() { 
    
    if(xloc < 0.4) {
        this.x++; 
    } 
    else if(xloc < 0.6){ 
        this.x--; 
    } 
    
    else if(xloc < 0.8) { 
        this.y++;  
    }

    else { 
        this.y--; 
    }   

}

//end of the createjs setup

