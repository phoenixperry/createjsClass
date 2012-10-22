var stage, circle, accel; 

window.onload = function () {init();} 

 window.addEventListener ('deviceorientation', 
 		function (event) {
 			console.log(event.gamma); 
 			accel = event.gamma; 
	 	}
	 );

 function init() { 
 		stage = new createjs.Stage("demoCanvas"); 
		circle = new createjs.Shape(); 
		circle.graphics.beginFill("red").drawCircle(50,50,50); 
		stage.addChild(circle); 
		circle.x = 0 ; 
		circle.y = 0; 
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener(this); 
	}
function tick() { 
	circle.x = accel; 
	stage.update(); 
}
