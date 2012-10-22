(function(lib) { 
	var p; //shortcut to refernce prototypes 
	var rect;  //used to reference frame bounds 

	(lib.Csheet_g = function() { 

		this.initialize(); 

		this.instance_1 = new lib.Csheet_g(); 
		this.instance_1.setTranform(0,0); 
		this.addChild(this.instance_1); 

	}).prototype = p = new createjs.Container(); 
	p.nominalBounds = rect =createjs.Rectangle(0,0, 44,44); 
	p.frameBounds = [rect]; 

//symbols 
(lib.smallCircle = function () { 
	this.initializew(); 

	//small cirlce layer 
	this.shape1 = new cjs.Shape(); 
	this.shape1.graphics.beginFill("black").drawCircle(2,2,20);
	this.addChild(this.shape1);	
}).prototype = p = new createjs.Container(); 
p.nominalBounds  = rect = new createjs.Rectangle(0,0,22,22); 
p.frameBounds = [rect]; 

(lib.Csheet = function() { 
	this.initialize(); 
	this.instance_2 = new lib.Csheet_g(); 
}).prototype = p = new createjs.MovieClip(); 
p.nominalBounds = rect =createjs.Rectangle(0,0, 44,44); 
p.frameBounds = rect =createjs.Rectangle(0,0, 44,44); 
//l2 
})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

