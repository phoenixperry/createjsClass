var stage, outfit, container;
var fred; 
var speed=0; 
var myCar; 
var circle; 
window.onload = function () {init();} 

function init() { 
	
	fred = new myCharacter("fred", 100,100);  
	fred.setValue("roy");
	console.log(fred.getValue()); 
	//note you can get the value name...
	console.log(fred.name); 
		stage = new createjs.Stage("demoCanvas"); 
		circle = new createjs.Shape(); 
		circle.graphics.beginFill("red").drawCircle(50,50,50); 
		stage.addChild(circle); 
		circle.x = 0 ; 
		circle.y = 0; 
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener(this); 
		addingAndDeletingProperties(); 
		getPropertiesList(); 

}

 function tick() { 
 		stage.update();
 		circle.x +=5; 
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
//	handling getters and setters 
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
function getPropertiesList() { 
	//this is how you get the list of properties of an object (even ones not set to ennumerable, which has a default of true. Ennumerable means you can increment them ) *check this - might mean co-routinable c# style 
	var list = Object.getOwnPropertyNames(fred); 
	for(var i = 0; i < list.length; i++){ 
		console.log(list[i] + " I am a property of Fred!"); 
	}
}
	//this is an object literal - it initalizes and creates the object simultaneously 

	var car = { model: 'Tesla' 
				, sunroof: 1 
		
	}
	car.run = function (){ 
		speed ++; 
	}
	console.log(car.model); 	
	car.run(); 
	console.log(speed+ " speed of car");
	