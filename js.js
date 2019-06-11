window.addEventListener("load", showPage);

function showPage() {
    var loading = document.getElementById('loading');
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = "scroll";
    loading.style.display = "none";
}

window.addEventListener('scroll', () => {
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByClassName('para');
            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
                //console.log(children[i]);
            }
        }, false)

var width = $(window.parent.document).width();
console.log(width);


var controllerGlobe = new ScrollMagic.Controller();
var scene01 = new ScrollMagic.Scene({triggerElement: '#h2-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-1", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene02 = new ScrollMagic.Scene({triggerElement: '#h2-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-1", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene03 = new ScrollMagic.Scene({triggerElement: '#h2-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-2", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene04 = new ScrollMagic.Scene({triggerElement: '#h2-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-2", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene05 = new ScrollMagic.Scene({triggerElement: '#h2-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-3", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene06 = new ScrollMagic.Scene({triggerElement: '#h2-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-3", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);
var scene07 = new ScrollMagic.Scene({triggerElement: '#h2-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#h2-4", 1, {
    x: -100,
    opacity: "0"
})).addTo(controllerGlobe);
var scene08 = new ScrollMagic.Scene({triggerElement: '#h2-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from("#line-4", 1, {
    x: -100,
    opacity: "0",
    delay: 0.3
})).addTo(controllerGlobe);







if (width <= 500) {
    var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.i-b-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".01", 1, {
    x: -30,
    opacity: "0"
})).addTo(controller1);
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.i-b-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".02", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.i-b-1',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".03", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);


var scene11 = new ScrollMagic.Scene({
    triggerElement: '.i-b-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".11", 1, {
    x: -30,
    opacity: "0",
})).addTo(controller1);


var scene12 = new ScrollMagic.Scene({
    triggerElement: '.i-b-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".12", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);


var scene13 = new ScrollMagic.Scene({
    triggerElement: '.i-b-2',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".13", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);




var scene21 = new ScrollMagic.Scene({
    triggerElement: '.i-b-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".21", 1, {
    x: -30,
    opacity: "0"
})).addTo(controller1);
var scene22 = new ScrollMagic.Scene({
    triggerElement: '.i-b-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".22", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene23 = new ScrollMagic.Scene({
    triggerElement: '.i-b-3',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".23", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);


var scene31 = new ScrollMagic.Scene({
    triggerElement: '.i-b-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".31", 1, {
    x: -30,
    opacity: "0",
})).addTo(controller1);


var scene32 = new ScrollMagic.Scene({
    triggerElement: '.i-b-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".32", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);


var scene33 = new ScrollMagic.Scene({
    triggerElement: '.i-b-4',
    triggerHook: 0.7,
    reverse: false
}).setTween(TweenMax.from(".33", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);
    
    
    
    
    
    
    
    
    
    
    
    
    
} else {
    
    
    
 
    
    
    
    
    
    
    
    
    
    
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".01", 1, {
    x: -30,
    opacity: "0"
})).addTo(controller1);
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".02", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".03", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);


var scene11 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".11", 1, {
    x: -30,
    opacity: "0",
    delay: 0.9
})).addTo(controller1);


var scene12 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".12", 1, {
    x: -30,
    opacity: "0",
    delay: 1.4
})).addTo(controller1);


var scene13 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".13", 1, {
    x: -30,
    opacity: "0",
    delay: 1.7
})).addTo(controller1);




var scene21 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".21", 1, {
    x: -30,
    opacity: "0"
})).addTo(controller1);
var scene22 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".22", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene23 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".23", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);


var scene31 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".31", 1, {
    x: -30,
    opacity: "0",
    delay: 0.9
})).addTo(controller1);


var scene32 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".32", 1, {
    x: -30,
    opacity: "0",
    delay: 1.4
})).addTo(controller1);


var scene33 = new ScrollMagic.Scene({
    triggerElement: '.section-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".33", 1, {
    x: -30,
    opacity: "0",
    delay: 1.7
})).addTo(controller1);

};