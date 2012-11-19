
var stage; 
var walker; 
var random; 
var xpos, ypos; 
window.onload = function () {init();}
 
function init() { 
    //this is the same as setup
    stage = new createjs.Stage("canvas");
    createjs.Ticker.setFPS(60); 
    createjs.Ticker.addListener(this);
   
    var x = stage.canvas.width/2; 
    var y = stage.canvas.height/2;
    walker = new Walker(x,y); 
    walker.step(); 

}

function tick() { 
    stage.update(); 
    walker.step(); 
    xpos = stage.mouseX;
    ypos = stage.mouseY; 
}

function Walker(x,y) { 
    this.x = x; 
    this.y = y; 
    this.step = step; 
    this.display=display;
    this.circle = new createjs.Shape(); 
    stage.addChild(this.circle); 

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

function step() { 
    random = Math.random(); 
    if(random > 0.5){    
       walker.display();  
    console.log(random + "i moved in the direction of the mouse"); 
    }
}