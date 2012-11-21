
var stage; 
var walker; 
var stepx, stepy, random; 
window.onload = function () {init();}
 
function init() { 
    //this is the same as setup
    stage = new createjs.Stage("canvas");
    createjs.Ticker.setFPS(60); 
    createjs.Ticker.addListener(this);
   
    var x = stage.canvas.width/2; 
    var y = stage.canvas.height/2;
    walker = new Walker(x,y); 
    walker.step(); 
    walker.display(); 

}

function tick() { 
    stage.update(); 
    walker.step(); 
    walker.display(); 
}

//end of the createjs setup

function Walker(x,y) { 
    this.x = x; 
    this.y = y; 
    this.step = step; 
    this.display=display; 
    this.circle = new createjs.Shape(); 
}

function display(){  
    this.circle.graphics.beginFill("black").drawCircle(this.x,this.y,1); 
    stage.addChild(this.circle); 
    var num = stage.getNumChildren();
}
function step() { 
    //var choice = Math.round(Math.random()*4); 
    
   
    //console.log(random); 
    //down
    //up 
    //left 
    //right
    random = Math.random(); 
    if(random < 0.4) {
        this.x++; 
    } 
    else if(random < 0.6){ 
        this.x--; 
    } 
    
    else if(random < 0.8) { 
        this.y++;  
    }

    else { 
        this.y--; 
    }



    //console.log(choice); 
    // switch(choice){ 
    //  case 0:
    //  this.x++;  
    //  break;
    //  case 1:
    //  this.x--;  
    //  break;
    //  case 2: 
    //  this.y++; 
    //  break;
    //  case 3: 
    //  this.y--; 
    //  break; 
    // }
        
}