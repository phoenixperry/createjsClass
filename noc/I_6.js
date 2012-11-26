
window.onload = function () {init();}
var circle;
var n;  
var t = 0; 
var x_=0; 

function init() { 
    //setup create js 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    createjs.Ticker.addListener(this); 
    createjs.Ticker.setFPS(60); //note it's a good idea to ensure draw and createjs have the same fps

    //this creates a processing object and passes in canvas and your processing sketch for drawing
	var p = new Processing(canvas, sketch);
	circle = new createjs.Shape(); 
	circle.graphics.beginFill("red").drawCircle(x_, 180,16);
	stage.addChild(circle); 
	console.log("inited");
}
function tick(){ 
	//put all the createjs things to animate here. 
	stage.update();
	circle.x = x_; 
}
function sketch(processing){ 
	//note that running processing will redefine your canvas width height... 
	processing.setup = function(){ 
		processing.size(1000,1000); 
		processing.background(255,255,255);
		console.log("processing running");
	};
	//ideally this should be replaced by using an external lib 
   // Override draw function, by default it will be called 60 times per secon
 	processing.draw = function(){
 		n = processing.noise(t); 
		x_ = processing.map(n,0,1,0,processing.width);
		console.log("the value of n ",n, " the value of x_ ", x_); 
		t+=0.01; 
 	}; 
}
  //all things for your processing sketch - functions - vars what not live in here. 


