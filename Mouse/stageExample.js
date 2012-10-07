window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage, label, shape, oldX, oldY, size, color;
function init() { 
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");
 
			label = new createjs.Text("finger paint", "24px Arial");
			label.x = label.y = 10;
			
			shape = new createjs.Shape();
			stage.addChild(shape, label);
			
			// set up our defaults:
			color = "#0FF";
			size = 2;
			
			// add handler for stage mouse events:
			stage.onMouseDown = function() {
				size = 10;
			}
			stage.onMouseUp = function() {
				color = createjs.Graphics.getHSL(Math.random()*360, 100, 50);
				size = 2;
			}
			stage.onMouseMove = function(evt) {
				if (oldX) {
					shape.graphics.beginStroke(color)
								  .setStrokeStyle(size, "round")
								  .moveTo(oldX, oldY)
								  .lineTo(evt.stageX, evt.stageY);
					stage.update();
				}
				oldX = evt.stageX;
				oldY = evt.stageY;
			}
	createjs.Ticker.addListener(window);
}

function handleMouseEvent(evt){

	output.text ="evt.target: " + evt.target+ "evt.type: " + evt.type; 
}
function tick() { 
		stage.update(); 
}
function handleClick(evt) { 
	alert("clicked on: " +evt.target.name + "stage.x " + evt.stageX + "stage.y "+ evt.stageY +"type "+ evt.type); 
}
