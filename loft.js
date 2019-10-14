/*

Sticky Nav

*/

let nav = document.getElementsByTagName("nav")[0];
let offset = nav.offsetTop;

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= offset) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

/*

Parallax Shapes

*/

let parent = document.getElementsByClassName('welcome')[0];
let paras = document.getElementsByClassName('para');

let heightPara = window.innerHeight || document.documentElement.clientHeight;
let isInView = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top <= heightPara
    );
};

window.addEventListener('scroll', function () {
    if (isInView(parent)) {
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.transform = 'translateY(-' + (window.pageYOffset * i / paras.length) + 'px)';
            
        };
    };
});

/*

Hero Canvas

*/

let canvas = document.getElementById("canvas");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let c = canvas.getContext("2d");

function Triangle(a, x, y, dy, shape, radius) {
    this.a = a;
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.shape = shape;
    this.radius = radius;

    this.draw = function () {
        if (this.shape === "triangle") {
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(this.x + this.a, this.y - (1.8 * this.a));
            c.lineTo(this.x + (2 * this.a), this.y);
            c.fillStyle = "#ff6363";
            c.fill();
        } else if (this.shape === "circle") {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.closePath();
            c.fillStyle = "#ff6363";
            c.fill();
        };
    };

    this.update = function () {
        if (this.y < -20) {
            this.y = height + this.a;
        };
        this.y -= this.dy;
        this.draw();
    };
};

let trianglesLeft = [];
let trianglesRight = [];
let shapes = ["circle", "triangle", "square"];

for (let i = 0; i < width / 50; i++) {
    let a = Math.floor(Math.random() * 20);
    let x = Math.floor(Math.random() * (0.2 * width));
    let y = Math.floor(Math.random() * height);
    let dy = Math.random();
    let shape = shapes[Math.floor(Math.random() * shapes.length)];
    let radius = Math.floor(Math.random() * 3);

    trianglesLeft.push(new Triangle(a, x, y, dy, shape, radius));
};

for (let i = 0; i < width / 50; i++) {
    let a = Math.floor(Math.random() * 20);
    let x = width - (Math.floor(Math.random() * (0.2 * width)));
    let y = Math.floor(Math.random() * height);
    let dy = Math.random();
    let shape = shapes[Math.floor(Math.random() * shapes.length)];
    let radius = Math.floor((Math.random() * 6) + 5);

    trianglesRight.push(new Triangle(a, x, y, dy, shape, radius));
};

function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for (let i = 0; i < trianglesLeft.length; i++) {
        trianglesLeft[i].update();
    };

    for (let i = 0; i < trianglesRight.length; i++) {
        trianglesRight[i].update();
    }
}

animate();

/*

Mobile Nav

*/

let mobNav = document.getElementsByClassName("mob-nav")[0];
let sections = document.getElementsByTagName("section");
let body = document.getElementsByTagName("body")[0];
let spans = document.getElementsByClassName("burger-span");

function openNav() {
    mobNav.classList.toggle("show");
    body.classList.toggle("no-scroll");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("fade");
    };
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("opened");
    };
};