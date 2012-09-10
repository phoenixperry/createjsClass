
// establish stage and global objects
var stage;
var canvasWidth;
var canvasHeight;
var canvas; 
var circle; 
var sampleShape; // sample shape

//you MUST check to make sure everything is loaded before you start. 
window.onload = function() {
  init();
  }

//once the window is fully loaded run initp  
function init() {
    // confirmation message
    console.log("project.js init method activated");
    
    // access stage object
	canvas = document.getElementById("canvas"); 

    	
    // create stage 
    stage = new createjs.Stage(canvas);
    
     circle = new createjs.Shape();
            //note you can gang these properties together
            //or seperate them like you are used to doing
            circle.graphics.beginFill("red").drawCircle(50,50,50); 
            circle.x = 100; 
            circle.y = 100; 
            stage.addChild(circle);

    
    createjs.Ticker.setFPS(60);
            //starts ticker when window loads 
            createjs.Ticker.addListener(window);

}

// needed if animating
function tick() {
    circle++;

    //run this call last in this fucntion. it advances the frame
    stage.update();
}