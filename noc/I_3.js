
var stage; 
var stuff;  
var rect; 
var prob = 0.10; 
var r; 
window.onload = function () {init();}

function init() { 
    stuff = [1,1,2,2,3]; 
    //this is the same as setup
    stage = new createjs.Stage("canvas");
    createjs.Ticker.setFPS(30); 
    createjs.Ticker.addListener(this);
    console.log("I inited");
}

function tick() { 
       var index = Math.floor(Math.random() * stuff.length); 
       //console.log(index); 
       r = Math.random(); 
       if(r < prob ){ 
        console.log("try again!");
       }else { 
        console.log("you're in luck!"); 
       }
    
}

//end of the createjs setup

