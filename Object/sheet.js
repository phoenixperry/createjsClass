var stage, outfit, container;
window.onload = function () {init();} 

function init() { 
	
	var fred = new myCharacter("sam", 100,100);  
	
	 console.log(fred.name);

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
 		stage.update();
 }

function myCharacter(name, xpos, ypos)
{
	this.name = name; 
	this.xpos = xpos; 
	this.ypos = ypos; 
	this.getDressed = getDressed; 
}
function getDressed(bits) { 

	console.log("getting changed"); 
}
