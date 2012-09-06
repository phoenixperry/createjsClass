var stage; 
var canvas; 
//remember this is lower case onload
window.onload=init;

function init() { 
	console.log("i ran");
	canvas = document.getElementById("canvas"); 
	stage = new createjs.Stage(canvas); 

	var circle = new createjs.Shape(); 
	circle.graphics.beginFill("blue");
	circle.graphics.drawCircle(20,20,20); 
	circle.graphics.endFill(); 	
	stage.addChild(circle);

	createjs.Ticker.setFPS(60);
	//note addListener vs addEventListener
	createjs.Ticker.addListener(window);
}	


function tick() { 
	stage.update(); 
	circle.x = mouseX; 
	circle.y = mouseY; 
}