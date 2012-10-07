window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage, output ; 
function init() { 
	console.log("inited"); 
	stage = new createjs.Stage("demoCanvas");

		stage.enableMouseOver(); 
		var label1 = new createjs.Text("text without hitArea", "18px Arial", 
			"#F00"); 
		label1.x = label1.y = 10; 
		label1.alpha = 0.5; 

		var label2 = new createjs.Text("Text with hit area", "18px Arial", "00F"); 
		label2.x = 10; 
		label2.y = 80; 
		label2.alpha = 0.5; 

		var hit = new createjs.Shape(); 
		hit.graphics.beginFill("#000").drawRect(0,0,label2.getMeasuredWidth(), label2.getMeasuredHeight()); 
		label2.hitArea = hit; 

		label1.onMouseOver = label2.onMouseOver = function(evt)
		{evt.target.alpha = 1; }
		label1.onMouseOut = label2.onMouseOut = function(evt) { 
		evt.target.alpha = 0.5;}
		stage.addChild(label1,label2); 
		createjs.Ticker.addListener(window);
}

function tick() { 
		stage.update(); 
}
function handleClick(evt) { 
	alert("clicked on: " +evt.target.name + "stage.x " + evt.stageX + "stage.y "+ evt.stageY +"type "+ evt.type); 
}
