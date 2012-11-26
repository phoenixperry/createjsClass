
window.onload = function () {init();}
function init() { 
    //setup create js 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
    //this creates a processing object and passes in canvas and your processing sketch for drawing
	var p = new Processing(canvas, sketch);
	console.log("inited");
}

function sketch(processing){ 
	//note that running processing will redefine your canvas width height... 
	processing.setup = function(){ 
		processing.size(1000,1000); 
		processing.background(255,255,255);
		console.log("processing running"); 
		var xoff = 0.0;
		loadPixels(); 
 		for(var x= 0; x < processing.width; x++){ 
 			var yoff = 0.0; 
 			for(var y = 0; y < processing.height; y++){ 
 				var bright = processing.map(processing.noise(xoff, yoff),0,1,0,255); 
 				processing.pixels[x+y*processing.width] = processing.color(bright); 
 				yoff +=0.01; 
 			}
 			xoff += 0.01; 
 		}
 		updatePixels(); 
	};
	//ideally this should be replaced by using an external lib 
   // Override draw function, by default it will be called 60 times per secon
 	
 	processing.draw = function(){
 		
 	}; 
}

  //all things for your processing sketch - functions - vars what not live in here. 


