
var stage; 
var randomCounts; 

var rect; 
window.onload = function () {init();}

function init() { 
    randomCounts = new Array(20); 
    //this is the same as setup
    stage = new createjs.Stage("canvas");
    createjs.Ticker.setFPS(30); 
    createjs.Ticker.addListener(this);
    rect = new createjs.Shape(); 
    stage.addChild(rect); 
    //fill up the array
    for(var i=0; i< randomCounts.length; i++){ 
        randomCounts[i]=i; 
    }
    console.log("I inited");
}

function tick() { 
    stage.update(); 
    var index = Math.floor(Math.random() * randomCounts.length); 
    console.log(index, " index");
    randomCounts[index]++; 
    var w = stage.canvas.width/randomCounts.length; 

        for(var x = 0; x < randomCounts.length; x++){  
            console.log(stage.canvas.height);
            rect.graphics.beginFill("black").drawRect(x*w,stage.canvas.height-randomCounts[x],w-1,randomCounts[x]); 
            stage.addChild(rect);
        }
    
}

//end of the createjs setup

