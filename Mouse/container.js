window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage, output ; 
function init() { 
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");

		// this lets our drag continue to track the mouse even when it leaves the canvas:
		//stage.mouseMoveOutside = true; 

		var background = new createjs.Shape(); 
		background.name = "background"; 
		background.graphics.beginFill("red").drawRoundRect(0,0,200,60, 10); 
		var label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF"); 
		label.name = "label"; 
		label.textAlign = "center"; 
		label.textBaseline = "middle"; 
		label.x = 200/2; 
		label.y = 60/2; 

		var button = new createjs.Container(); 
		button.name= "button"; 
		button.x = 50; 
		button.y = 25; 
		button.addChild(background, label); 
		stage.addChild(button); 
		//note how this is totally optional because the listener is on the
		//the constainer and events bubble upward in the event chain... 
		//background.onClick = label.onClick = handleClick; 
		//note myContainer.mouseChildren = false; blocks mouse
		/*you can stop a mouse event on any object similarly 
		circle.onClick = function() { alert("Clicked!"); }
		circle.mouseEnabled = false; */ 
		
		button.onClick = handleClick; 
		stage.update(); 
//		createjs.Ticker.addListener(window);
}
function tick() { 
	//	stage.update(); 
}
function handleClick(evt) { 
	alert("clicked on: " +evt.target.name + " stage.x " + evt.stageX + " stage.y "+ evt.stageY +" type "+ evt.type); 
}
