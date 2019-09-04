// hero

var canvas = document.getElementById("star-canvas");
var width = document.documentElement.clientWidth || document.body.clientWidth;
var height = document.documentElement.clientHeight || document.body.clientHeight;
canvas.width = width;
canvas.height = height;
var c = canvas.getContext("2d");
console.log(`width: ${width}, /2: ${width/2}, /4: ${width/4}`);

function Star(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();
        c.fillStyle = "white";
        c.fill();
    };

    this.update = function () {
        if (this.x + this.radius > width) {
            this.x = 0;
        } else if (this.y + this.radius < 0) {
            this.y = height;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
};


function ShootingStar(sx, sy) {
    this.sx = sx;
    this.sy = sy;
    this.sdx = 10;
    this.sdy = -5;
    this.radius = 2;

    this.draw = function () {
        c.beginPath();
        c.moveTo(this.sx, this.sy);
        c.lineTo(this.sx + 50, this.sy + 10);
        c.strokeStyle = "rgba(255,255,255,0.5)";
        c.stroke();
    };

    this.update = function () {
        if (this.sx + this.radius > width) {

        } else if (this.sy + this.radius > height) {

        } else {
            this.sx += 50;
            this.sy += 10;

            this.draw();
        }
    };
};

var starsArray = [];
var shootingStarsArray = [];

for (let i = 0; i < width / 3; i++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    var dy = -Math.random() / 10;
    var dx = -dy * 2;
    var radius = Math.random() * 2;

    starsArray.push(new Star(x, y, dx, dy, radius));
};


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for (var i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
    };
    for (var i = 0; i < shootingStarsArray.length; i++) {
        shootingStarsArray[i].update();
    };
};

animate();

var int = setInterval(function () {
    shootingStarsArray = [];
    var sx = Math.random() * (width / 2);
    var sy = Math.floor(Math.random() * (height / 2));

    shootingStarsArray.push(new ShootingStar(sx, sy));
}, 5000);



// scroll magic


var controllerGlobe = new ScrollMagic.Controller();
var scene01 = new ScrollMagic.Scene({
    triggerElement: '#h2-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-1", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene02 = new ScrollMagic.Scene({
    triggerElement: '#h2-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-1", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene03 = new ScrollMagic.Scene({
    triggerElement: '#h2-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-2", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene04 = new ScrollMagic.Scene({
    triggerElement: '#h2-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-2", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene05 = new ScrollMagic.Scene({
    triggerElement: '#h2-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-3", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene06 = new ScrollMagic.Scene({
    triggerElement: '#h2-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-3", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene07 = new ScrollMagic.Scene({
    triggerElement: '#h2-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-4", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene08 = new ScrollMagic.Scene({
    triggerElement: '#h2-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-4", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);

//

var controller1 = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".01", 1, {
    y: 30,
    opacity: "0",
    delay: 0.3
})).addTo(controller1);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".02", 1, {
    y: 30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".03", 1, {
    y: 30,
    opacity: "0",
    delay: 0.7
})).addTo(controller1);


var scene11 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".11", 1, {
    y: 30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);


var scene12 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".12", 1, {
    y: 30,
    opacity: "0",
    delay: 0.7
})).addTo(controller1);


var scene13 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".13", 1, {
    y: 30,
    opacity: "0",
    delay: 0.9
})).addTo(controller1);




var scene21 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".21", 1, {
    y: 30,
    opacity: "0",
    delay: 0.9
})).addTo(controller1);

var scene22 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".22", 1, {
    y: 30,
    opacity: "0",
    delay: 1.1
})).addTo(controller1);

var scene23 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".23", 1, {
    y: 30,
    opacity: "0",
    delay: 1.3
})).addTo(controller1);


var scene21 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-4',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".31", 1, {
    y: 30,
    opacity: "0",
    delay: 1.3
})).addTo(controller1);

var scene22 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-4',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".32", 1, {
    y: 30,
    opacity: "0",
    delay: 1.5
})).addTo(controller1);

var scene23 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-4',
    triggerHook: 0.8,
    reverse: false
}).setTween(TweenMax.from(".33", 1, {
    y: 30,
    opacity: "0",
    delay: 1.7
})).addTo(controller1);
