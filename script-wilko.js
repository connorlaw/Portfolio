document.addEventListener("DOMContentLoaded", ready);
var w = window.innerWidth;
console.log(w);

function ready() {
    var targets = [].slice.call(document.querySelectorAll(".target"));

    if ("IntersectionObserver" in window) {
        let lazyAnimationObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && entry.target.localName == "img") {
                    let animate = entry.target;
                    animate.classList.add("fadeUpImg");
                    lazyAnimationObserver.unobserve(animate);
                } else if (entry.isIntersecting && entry.target.localName == "h4" && entry.target.className == "target world-famous" || entry.isIntersecting && entry.target.localName == "h4" && entry.target.className == "target world-famous center") {
                    let animate = entry.target;
                    animate.classList.add("fadeUpText");
                    lazyAnimationObserver.unobserve(animate);
                } else if (entry.isIntersecting && entry.target.localName == "h4") {
                    let end = entry.target.dataset.stat;
                    let animate = entry.target;
                    stats(animate, end);
                    lazyAnimationObserver.unobserve(animate);
                    console.log("stop watching!");
                } else if (entry.isIntersecting) {
                    let animate = entry.target;
                    animate.classList.add("fadeUpText");
                    lazyAnimationObserver.unobserve(animate);
                };
            });
        });

        targets.forEach(function (animate) {
            lazyAnimationObserver.observe(animate);
        });
    } else {
        var height = window.innerHeight || document.documentElement.clientHeight;
        var isInView = function (elem) {
            var bounding = elem.getBoundingClientRect();
            return (
                bounding.top <= height
            );
        };

        window.addEventListener('scroll', lazyAnimate);

        function lazyAnimate() {
            for (let i = 0; i < targets.length; i++) {
                if (i == targets.length) {
                    window.removeEventListener('scroll', lazyAnimate);
                } else if (isInView(targets[i]) && targets[i].nodeName.toLowerCase() === "img") {
                    targets[i].classList.add("fadeUpImg");
                    targets[i].classList.remove("target");
                } else if (isInView(targets[i]) && targets[i].nodeName.toLowerCase() === "h4" && targets[i].classList.contains('world-famous')) {
                    targets[i].classList.add("fadeUpText");
                    targets[i].classList.remove("target");
                } else if (isInView(targets[i]) && targets[i].nodeName.toLowerCase() === "h4") {
                    let end = targets[i].dataset.stat;
                    stats(targets[i], end);
                    targets[i].classList.remove("target");
                } else if (isInView(targets[i])) {
                    targets[i].classList.add("fadeUpText");
                    targets[i].classList.remove("target");
                };
            };
        };
    };

    function stats(entry, end) {
        var duration = (1000 / end)
        var current = 0;
        setTimeout(function () {
            var int = setInterval(function () {
                console.log("inside setInterval");
                if (end == entry.innerHTML) {
                    clearInterval(int);
                } else if (current < end && end > 1000) {
                    entry.innerHTML = current + 3;
                    current += 6;
                } else if (current < end) {
                    entry.innerHTML = current + 1;
                    current++;
                } else if (current == end) {
                    clearInterval(int);
                }
            }, duration);
        }, 1000);
        console.log("last");
    };

    var stickyImgs = document.getElementsByClassName('sticky-img');
    var historyDiv = document.getElementsByClassName('history-outer')[0];
    var historyDivScrollHeight = historyDiv.scrollHeight;
    if (w >= 1050) {
        hideAll();
        stickyImgs[0].style.opacity = ".8";
        window.addEventListener("scroll", function () {
            if (historyDiv.getBoundingClientRect().top < 0 && historyDiv.getBoundingClientRect().top < 1) {
                var height = historyDiv.getBoundingClientRect().top;
                var pos = showPos(height);
                console.log(pos.toFixed(2));
                if (pos > 0 && pos <= 0.33) {
                    hideAll();
                    stickyImgs[0].style.opacity = ".8";
                    scale(pos);
                } else if (pos > 0.33 && pos <= 0.5) {
                    hideAll();
                    stickyImgs[1].style.opacity = ".8";
                    scale(pos);
                } else if (pos > 0.5) {
                    console.log("Kill Scale");
                };
            };
        });
    };

    function scale(posi) {
        for (let i = 0; i < stickyImgs.length; i++) {
            stickyImgs[i].style.transform = `translate(-50%, -50%) scale(${1 - (posi)})`;
        };
    };

    function hideAll() {
        for (let i = 0; i < stickyImgs.length; i++) {
            stickyImgs[i].style.opacity = "0";
        };
    };

    function showPos(height) {
        var pos = (Math.abs(height) / historyDivScrollHeight);
        return pos;
    };
};
