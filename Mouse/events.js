window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage, output ; 
function init() { 
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");
 
	stage.enableMouseOver(); 
	//this enables onMouseOver and onMouseOut events 

	output = new createjs.Text("test press, click, double click, mouseover, and mosueout", "14px Arial"); 	
	//note text defaults black 
	output.x = output.y = 10; 
	 stage.addChild(output);

	 var circle = new createjs.Shape(); 
	 circle.graphics.beginFill("red").drawCircle(0,0,50); 
	 circle.x = circle.y = 100; 
	 circle.name = "circle"; 
	 stage.addChild(circle); 

	 var square = new createjs.Shape(); 
	 square.graphics.beginFill("green").drawRect(-50,-50, 100,100); 
	 square.x =250; 
	 square.y =100; 
	 square.name = "square"; 
	 stage.addChild(square); 

	 //add a handler for all the events we're into 
	 circle.onClick =circle.onPress = circle.onDoubleClick = circle.onMouseOver =circle.onMouseOut = handleMouseEvent; 

	square.onClick = square.onPress = square.onDoubleClick = square.onMouseOut = square.onMouseOut = handleMouseEvent; 

	createjs.Ticker.addListener(window);
}

function handleMouseEvent(evt){

	output.text ="evt.target: " + evt.target+ "evt.type: " + 
	evt.type; 
}
function tick() { 
		stage.update(); 
}
function handleClick(evt) { 
	alert("clicked on: " +evt.target.name + "stage.x " + evt.stageX + "stage.y "+ evt.stageY +"type "+ evt.type); 
}
