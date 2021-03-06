var increment = 0.02; 
window.onload = function () {init();}
function init() { 
    //setup create js 
    //this creates a processing object and passes in canvas and your processing sketch for drawing
	var p = new Processing(canvas, sketch);
	console.log("inited");
}

function sketch(processing){ 
	//note that running processing will redefine your canvas width height... 
	processing.setup = function(){ 
		processing.size(1000,1000); 
		console.log("processing running"); 
		processing.noLoop(); 
	};
	//ideally this should be replaced by using an external lib 
   // Override draw function, by default it will be called 60 times per secon
 	
 	processing.draw = function(){
 		processing.background(255,255,255);
 		processing.loadPixels(); 
 		var xoff = 0.0;
 		for(var x= 0; x < processing.width; x++){ 
 				xoff += increment; 
 			var yoff = 0.0;
 			for(var y = 0; y < processing.height; y++){ 
 				yoff += increment; 
 				var bright = processing.noise(xoff,yoff)*255; 

 				processing.pixels[x+y*processing.width] = processing.color(bright);
 			}
 		}
 		processing.updatePixels(); 
 	}; 
}

  //all things for your processing sketch - functions - vars what not live in here. 


