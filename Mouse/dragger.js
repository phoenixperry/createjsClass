window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage, output ; 
function init() { 
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");

	//this lets our drag continue to track the mouse even whenit leaves the canvas. play wiht commenting this out to see difference 
	stage.mouseMoveOutside = true; 

	var circle = new createjs.Shape(); 
	circle.graphics.beginFill("red").drawCircle(0,0,50); 

	var label = new createjs.Text("drag me", "bold 14px Arial", "#FFFFFF"); 
	label.textAlign = "center"; 
	label.y = -7; 

	var helloWorld = new createjs.Text("Hello world", "14px Arial"); 
	stage.addChild(helloWorld); 
	var dragger = new createjs.Container(); 
	dragger.x = dragger.y = 100; 
	//child 
	dragger.addChild(circle, label); 
	
	dragger.name = "drag";
	stage.addChild(dragger); 

	dragger.onPress = function(evt) { 
		//evt is going to contain the event that triggers it - here onPress 
		console.log(evt.type + evt.target +  "type and target");
		//this creates an undefined type offset object on the fly and assigns 
		//two properties to it - x and y 
		var offset = {x:evt.target.x-evt.stageX, 
			y:evt.target.y -evt.stageY};
		//add a handler to the event objec't onmousemove callback this weill be active until the user releases the mosue butoton 
		console.log(offset.type); 
		evt.onMouseMove = function(ev) {
			ev.target.x = ev.stageX+offset.x; 
			ev.target.y = ev.stageY + offset.y; 
		

		}
	}
	createjs.Ticker.addListener(window);
}

function tick() { 
		stage.update(); 
}
function handleClick(evt) { 
	alert("clicked on: " +evt.target.name + "stage.x " + evt.stageX + "stage.y "+ evt.stageY +"type "+ evt.type); 
}
