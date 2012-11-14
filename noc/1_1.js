
var stage, circle; 
var x = 100; 
var y = 100; 
var xspeed = 1; 
var yspeed = 3.3; 
var dir = Vec2.create(0, 0);

    function init() { 
        stage = new createjs.Stage("demoCanvas"); 
        circle = new createjs.Shape(); 
        circle.graphics.beginFill("red").drawCircle(50,50,50); 
        stage.addChild(circle); 
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addListener(this); 

    }

    function tick() { 
            stage.update();
 
             x = x + xspeed; 
             y = y + yspeed; 
             circle.x = x; 
            console.log(x); 
            if((circle.x > stage.canvas.width) || 
                (circle.x < 0)){ 
                 xspeed = xspeed *-1;
                 console.log(xspeed);  
             }
     }

    Vec2.create = function(a, b) {
        return new Float32Array([a, b]);
    } 

    Vec2.add = function(a, b, out) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
    }

    Vec2.subtract = function(a, b, out) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
    }

    Vec2.scale = function(a, v, out) {
        out[0] = a[0] * v;
        out[1] = a[1] * v;
    }

    Vec2.normalize = function(a, out) {
        var iLen = 1 / Vec2.length(a);
        out[0] = a[0] * iLen;
        out[1] = a[1] * iLen;
    }


    var dir = Vec2.create(0, 0);




    ParticleSystem.prototype.update = function() {
        for(i = 0; i < this.particles.length; ++i) {
            p = this.particles[i];

            Vec2.subtract(this.attractor, p.pos, dir);
            dist = Math.max(1, Vec2.length(dir));

            Vec2.normalize(dir, dir);
            Vec2.scale(dir, dist/512, dir);
            Vec2.add(p.vel, dir, p.vel);

            if(Vec2.length(p.vel) > maxVel) {
                Vec2.normalize(p.vel, p.vel);
                Vec2.scale(p.vel, maxVel, p.vel);
            }

            Vec2.add(p.pos, p.vel, p.pos);

            // Bounds check is the same as previous sample
            if(p.pos[0] < -this.extX) { p.pos[0] = -this.extX; p.vel[0] *= -1; }
            if(p.pos[0] >  this.extX) { p.pos[0] =  this.extX; p.vel[0] *= -1; }
            if(p.pos[1] < -this.extY) { p.pos[1] = -this.extY; p.vel[1] *= -1; }
            if(p.pos[1] >  this.extY) { p.pos[1] =  this.extY; p.vel[1] *= -1; }

        }
    }







    		