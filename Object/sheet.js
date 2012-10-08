var stage, outfit, container;
var fred; 
window.onload = function () {init();} 

function init() { 
	
	fred = new myCharacter("sam", 100,100, "roy");  
	fred.setValue("roy");
	console.log(fred.getValue()); 
	//note you can get the value name...


		stage = new createjs.Stage("demoCanvas"); 
		circle = new createjs.Shape(); 
		circle.graphics.beginFill("red").drawCircle(50,50,50); 
		stage.addChild(circle); 
		circle.x = 0 ; 
		circle.y = 0; 
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener(this); 
		addingAndDeletingProperties(); 
}

 function tick() { 
 		stage.update();
 }
//here's an object being created 
function myCharacter(name, xpos, ypos)
{
	//not using this make a field public 
	var val;
	//make this local to the function to 
	//effectively make it private 
	this.name = name; 
	this.xpos = xpos; 
	this.ypos = ypos; 
	this.getDressed = getDressed; 
	this.age; //properties can be setup later 
	//handling getters and setters 
	this.getValue = function(){ 
		return val; 
	}; 

	this.setValue = function (_temp){ 
		val = _temp; 
	};	
}


function getDressed(bits) { 

	console.log("getting changed"); 
}
function addingAndDeletingProperties(){ 
		fred.age = 32; 
		console.log(fred.age); 
		//here's an object having a property removed 
		delete fred.age; 
		//now if I print his age. i'll get 
		//undefined. 
		console.log(fred.age); 
}
