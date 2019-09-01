window.addEventListener("load", showPage);

function showPage() {
    var loading = document.getElementById('loading');
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = "scroll";
    loading.style.display = "none";
}

var anis = document.querySelectorAll(".laptop,.tablet,.mobile,.heart,.cog-1,.cog-2,.wrench,.html-left,.html-right");

for (let i = 0; i < anis.length; i++) {anis[i].style.opacity = "0"}

window.addEventListener('scroll', () => {
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByClassName('para');
            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
            }
        }, false)

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

    
    
    // have to add the class to each element at the same time (using the same trigger) 
    //
    // https://scrollmagic.io/docs/ScrollMagic.Scene.html#setClassToggle
    //
    //
    // var scene1 = new ScrollMagic.Scene({}).setClassToggle instead of setTween
    
    
var controller1 = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.6,
    reverse: false
}).setClassToggle(".svg-1", "ani-1").addTo(controller1);
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".02", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-1',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".03", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);


var scene11 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.6,
    reverse: false
}).setClassToggle(".svg-2", "ani-2").addTo(controller1);


var scene12 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".12", 1, {
    x: -30,
    opacity: "0",
    delay: 1.4
})).addTo(controller1);


var scene13 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-2',
    triggerHook: 0.6,
    reverse: false
}).setTween(TweenMax.from(".13", 1, {
    x: -30,
    opacity: "0",
    delay: 1.7
})).addTo(controller1);




var scene21 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.4,
    reverse: false
}).setClassToggle(".svg-3", "ani-3").addTo(controller1);
var scene22 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".22", 1, {
    x: -30,
    opacity: "0",
    delay: 0.5
})).addTo(controller1);
var scene23 = new ScrollMagic.Scene({
    triggerElement: '.wrapper-3',
    triggerHook: 0.4,
    reverse: false
}).setTween(TweenMax.from(".23", 1, {
    x: -30,
    opacity: "0",
    delay: 0.8
})).addTo(controller1);