
// establish stage and global objects
var stage;
var canvasWidth;
var canvasHeight;
var canvas; 

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
    
    var btn1 = stage.addChild(new Button("Hello!", "#F00"));
            btn1.x = 20;
            btn1.y = 20;
            
            var btn2 = stage.addChild(new Button("Goodbye.", "#0F0"));
            btn2.x = 20;
            btn2.y = btn1.y + 50;
            
            var btn3 = stage.addChild(new Button("Hello again!!", "#0FF"));
            btn3.y = btn2.y + 50;
            
            
            btn1.x = btn2.x = btn3.x = 20;
            
            createjs.Ticker.addListener(window);
            createjs.Ticker.setFPS(60);
            //starts ticker when window loads 
           

}

// needed if animating
function tick() {
    circle++;

    //run this call last in this fucntion. it advances the frame
    stage.update();
}