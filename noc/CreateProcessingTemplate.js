
window.onload = function () {init();}
var circle; 
function init() { 
    //setup create js 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    createjs.Ticker.addListener(this); 
    createjs.Ticker.setFPS(60); //note it's a good idea to ensure draw and createjs have the same fps

    //this creates a processing object and passes in canvas and your processing sketch for drawing
	var p = new Processing(canvas, sketch);
}
function tick(){ 
	//put all the createjs things to animate here. 
	stage.update();
}
function sketch(processing){ 
	//note that running processing will redefine your canvas width height... 
	processing.setup = function(){ 
		processing.size(1000,1000); 
		processing.background(255,255,255);
	};

   // Override draw function, by default it will be called 60 times per secon
 	processing.draw = function(){} 
	}
  //all things for your processing sketch - functions - vars what not live in here. 
}; 


