
var stage; 
var walker; 
window.onload = function () {init();}

function init() { 
	//this is the same as setup
	stage = new createjs.Stage("canvas");
	createjs.Ticker.setFPS(60); 
	createjs.Ticker.addListener(this);

	var x = stage.canvas.width/2; 
	var y = stage.canvas.height/2;
	walker = new Walker(x,y); 
	walker.step(walker.x,walker.y); 
	walker.display(walker.x,walker.y); 
}
function tick() { 
	stage.update(); 
	walker.step(); 
	walker.display(walker.x,walker.y); 
}

//end of the createjs setup

function Walker(x,y) { 
	this.x = x; 
	this.y = y; 
	this.step = step; 
	this.display=display; 
	this.circle = new createjs.Shape();
}
function display(x,y){  
	this.circle.graphics.beginFill("black").drawCircle(x,y,2); 
	stage.addChild(this.circle); 
	var num = stage.getNumChildren(); 
	//console.log("only ", num, " child");
}
function step() { 
	//var choice = Math.round(Math.random()*4); 
	var min = -1;
	var max = 1; 
	var random = Math.floor(Math.random()* (max-min+1) +min);
	//console.log(random); 
	var stepx = Math.floor(Math.random() *(max-min+1) +min); 
	var stepy = Math.floor(Math.random() *(max-min+1) +min); 
	this.x+=stepx; 
	this.y+=stepy; 
	//console.log(choice); 
	// switch(choice){ 
	// 	case 0:
	// 	this.x++;  
	// 	break;
	// 	case 1:
	// 	this.x--;  
	// 	break;
	// 	case 2: 
	// 	this.y++; 
	// 	break;
	// 	case 3: 
	// 	this.y--; 
	// 	break; 
	// }
		
}