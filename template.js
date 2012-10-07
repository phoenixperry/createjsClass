window.onload = function() {
  			init();
  			console.log("inited");
  }
var stage output ; 
function init() { 
	console.log("inited"); 
	 stage = new createjs.Stage("demoCanvas");
	

	
	createjs.Ticker.addListener(window);
}
	function tick() { 
		stage.update(); 
	}
