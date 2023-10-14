class Callout {
  constructor() { }

  init() {
    const callouts = document.getElementsByClassName('callout');
    for (let i = 0; i < callouts.length; i++) {
      this.callout(callouts[i]);
    }
  }
  
  callout(callout) {
    const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');
    const THRESHOLD = 15;
    if (!motionMatchMedia.matches && !callout.classList.contains('testimonial') && !callout.classList.contains('cookie-banner')) {
      callout.addEventListener('mousemove', (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - currentTarget.getBoundingClientRect().top) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  
        callout.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1) translateY(150px)`;
      });
  
      callout.addEventListener('mouseleave', (e) => {
        callout.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg) translateY(150px)`;
      });
    }
  }
}

export default Callout;