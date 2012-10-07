var canvas; 
var stage; 
var txt; 
var shape; 
var count = 0; 
window.onload= function () { 
	init(); 
} 
function init() { 
	//note that if you are going to pass an html
	//id into this tag you need to use it as a String
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");
	createjs.Ticker.addListener(window); 
	shape = new createjs.Shape(); 
	shape.graphics.beginFill("red").drawRect(10,10,300,80);
	stage.addChild(shape); 

	txt = new createjs.Text("this is animated text " , "18px Arial", "#000"); 
	
	txt.x = 100; 
	txt.y = shape.y; 
	console.log(shape.x);	
	stage.addChild(txt); 

	createjs.Ticker.setFPS(100);
	createjs.Ticker.addListener(window);

}
function tick() { 
	count++; 
	txt.text = "text on the canvas... " + count;
	shape.graphics.clear().beginFill("#F00").drawRect(-10,-10,txt.getMeasuredWidth()+20, 36+20);
	stage.update(); 
}