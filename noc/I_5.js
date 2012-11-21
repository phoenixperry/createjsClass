
window.onload = function () {init();}
var r; 

function init() { 
    stage = new createjs.Stage("canvas");
    canvas = document.getElementById("canvas"); 
  
    var p = new Processing(canvas, sketch);
    
    function sketch(processing){ 
      processing.draw = function() {
      r = processing.random(1); 
      var rd = randomDist();
      console.log(rd);  
      }; 
      
    }
  }


function randomDist() { 
  while(true) { 
    var r1 =  Math.random(); 
    var probability = r1; 
    var r2 = Math.random(); 
    if(r2 < probability){ 
      return r1; 
    }
  }
}

   



//end of the createjs setup

