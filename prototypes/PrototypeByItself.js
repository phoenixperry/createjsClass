/*Constructor. <em>this</em> is returned as new object and its internal [[prototype]] property will be set to the constructor's default prototype property*/

var Circle = function(radius) {
    this.radius = radius;
    //next line is implicit, added for illustration only
    //this.__proto__ = Circle.prototype;
}

//augment Circle's default prototype property thereby augmenting the prototype of each generated instance
Circle.prototype.area = function() {
   return Math.PI*this.radius*this.radius;
}

//create two instances of a circle and make each leverage the common prototype
var a = new Circle(3), b = new Circle(4);
a.area().toFixed(2); //28.27
b.area().toFixed(2); //50.27

//http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/