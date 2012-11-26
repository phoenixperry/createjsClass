
window.onload = function () {init();}

var n;  
var t = 0; 
var x_=0; 
var x,y=0; 
var tx = 0; 
var ty = 10000; 
function init() { 
    //setup create js 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    createjs.Ticker.addListener(this); 
    createjs.Ticker.setFPS(60); //note it's a good idea to ensure draw and createjs have the same fps

    //this creates a processing object and passes in canvas and your processing sketch for drawing
	var p = new Processing(canvas, sketch);
	console.log("inited");
	walker = new Walker(); 
}
function tick(){ 
	//put all the createjs things to animate here. 
	stage.update();
 
	walker.step(); 
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
 		
		//walker add ons 
		x = processing.map(processing.noise(tx), 0,1,-1, 1)*processing.width; 
		y = processing.map(processing.noise(ty), 0,1,0,-1,1)*processing.height;
 	}; 
}
function Walker() { 
	this.step = step; 
	this.stepX=stepX; 
	this.stepY=stepY; 
}
function step(){ 
	this.stepX +=tx; 
	this.stepY += ty; 
	var circle_ = new createjs.Shape(); 
	circle_.graphics.beginStroke("black") 
			.setStrokeStyle(1)
			.beginFill("blue")
			.drawCircle(stepX,stepY,16);
	circle_.alpha = 0.5; 
	stage.addChild(circle_); 
	tx +=0.01; 
	ty += 0.01; 

}
  //all things for your processing sketch - functions - vars what not live in here. 


