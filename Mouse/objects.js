window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage; 
var newPerson = new person

function init () { 
	stage = new createjs.Stage("demoCanvas"); 
	var a = 10; 
	newPerson = new person("phoenix", "perry", 37, "brown");
	console.log(typeof newPerson + " " + newPerson.firstname);
	newPerson.newLastName("smith"); 
	console.log(newPerson.newLastName+newPerson.address);
	newPerson.job("dancer"); 
	var sheree = new person("sheree", "chang", 20, "brown");
	console.log(sheree.firstname); 
	sheree.newLastName = "jackson";
	console.log(sheree.newLastName); 
	createjs.Ticker.addListener(window); 

}
function tick() { 
		stage.update(); 
}

function person(firstname, lastname, age, eyeColor) { 
	this.firstname = firstname; 
	this.lastname = lastname; 
	this.age = age; 
	this.eyeColor = eyeColor; 
	this.newLastName = newLastName; 
	//setting up the parameters for this object 
	this.address = "54 maujer st";  
	this.job = job; 

}

function newLastName(newLastName) { 
	this.newLastName = newLastName; 
}
function job(job) { 
	this.job = job;
	var circle = new createjs.Shape(); 
	circle.graphics.beginFill("red").drawCircle(0,0,50);
	stage.addChild(circle); 
	circle.x ++ ; 
	circle.y ++; 


}