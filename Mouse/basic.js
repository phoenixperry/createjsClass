window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage; 
function init() { 
	console.log("inited");
	var canvas = document.getElementById("demoCanvas"); 
	 stage = new createjs.Stage(canvas);
	var circle = new createjs.Shape(); 
	circle.graphics.beginFill("red").drawCircle(0,0,50); 
	circle.x = 100; 
	circle.y = 100; 
	circle.onClick = function() { 
		alert("I'm a click event"); 
	}
	stage.addChild(circle); 
	createjs.Ticker.addListener(window);
}
	function tick() { 
		stage.update(); 
	}
