class LogoScroller {
  constructor() { }

  init() {
    const logoScroller = document.getElementById('logo-scroller');
    const windowHeight = window.innerHeight;
    if (!logoScroller) throw('Missing logo scroller');
  
    let scrollPos = 0;
    window.addEventListener('scroll', (event) => {
      if (logoScroller.getBoundingClientRect().y < windowHeight) {
        scrollPos = logoScroller.getBoundingClientRect().y - windowHeight;
        logoScroller.style.transform = `translateX(${scrollPos}px)`
      }
    }, {passive: true});
  }
}

export default LogoScroller;