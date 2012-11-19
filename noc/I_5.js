
window.onload = function () {init();}
var r; 
var xstep, ystep; 

function init() { 
    
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    createjs.Ticker.setFPS(30); 
    createjs.Ticker.addListener(this);
    //instantiate processing and give it the name of the function using it 
    var p = new Processing(canvas, sketch);

    //all of processing stuff lives here. :) 
    function sketch(processing){ 
      processing.draw = function() {
        r = processing.random(1); 
      }; 

      var rd = randomDist();
      console.log(rd);  
    }
  }

function Walker(x,y) { 
    this.x = x; 
    this.y = y; 
    this.step = step; 
    this.display=display;
    this.circle = new createjs.Shape(); 
    stage.addChild(this.circle); 
}
function step() { 
      if(r < 0.01){ 
        var min = -100;
        var max = 100; 
        xstep = Math.floor(Math.random()* (max-min+1) +min);
        ystep = Math.floor(Math.random()* (max-min+1) +min);
      }else { 
        var min = -1;
        var max = 1; 
        xstep = Math.floor(Math.random()* (max-min+1) +min);
        ystep = Math.floor(Math.random()* (max-min+1) +min);
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

function display(){     
    this.circle.graphics.setStrokeStyle(1) 
    .beginStroke("black")
    .moveTo(this.x, this.y) 
    .lineTo(xpos, ypos)
    .closePath(); 
    this.x = xpos; 
    this.y = ypos; 
 }    

function tick() { 
       stage.update(); 
}

//end of the createjs setup

