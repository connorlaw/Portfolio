let mobNavOpen = false;

window.addEventListener('DOMContentLoaded', (event) => {
  const themeBtns = document.querySelectorAll('.nav__links--btn');
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
  });

  const mobNavBtn = document.getElementsByClassName('nav__mob-btn')[0];
  const mobNav = document.getElementsByClassName('nav__mob')[0];
  mobNavBtn.addEventListener('click', () => {
      mobNavOpen = !mobNavOpen;
      mobNav.style.left = mobNavOpen ? '10%' : '100%';
      document.body.classList.toggle('nav__mob-open');
  });

  mobNav.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('nav__mob-item')
      || event.target.classList.contains('nav__mob-close')
      || event.target.parentNode.classList.contains('nav__mob-close')
    ) {
      mobNavOpen = false;
      mobNav.style.left = '100%';
      document.body.classList.remove('nav__mob-open');
    }
  });

  if (document.getElementById('logo-scroller')) {
    fancyScroll();
  }

  if (document.getElementsByClassName('tooltip').length > 0) {
    registerTooltips();
  }

  if (document.getElementsByClassName('callout').length > 0) {
    registerCallouts();
  }

  if (document.getElementsByClassName('testimonial--wrapper').length > 0) {
    registerTestimonial();
  }

  const cookieBtns = document.querySelectorAll('a[data-cookie-consent]');
  cookieBtns.forEach(btn => {
    btn.addEventListener('click', () => {
     let accepted = btn.getAttribute('data-cookie-consent');
     document.cookie = `cookie_notice_accepted=${accepted}`;
    });
  });

  if (getCookie('cookie_notice_accepted') === 'true') {
    let head = document.getElementsByTagName('head')[0];
    let js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = 'https://www.googletagmanager.com/gtag/js?id=G-YRWY66FH14';
    head.appendChild(js);
      
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-YRWY66FH14');
  } else if (getCookie('cookie_notice_accepted') !== 'false') {
    document.getElementById('cookie-banner').classList.add('show');
    // Add listener to banner dismissal, add cookie to storage if clicked
  }
});

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function fancyScroll(scroller) {
  const logoScroller = document.getElementById('logo-scroller');
  const windowHeight = window.innerHeight;
  if (!logoScroller) throw('Missing logo scroller');

  let scrollPos = 0;
  window.addEventListener('scroll', (event) => {
    if (logoScroller.getBoundingClientRect().y < windowHeight) {
      scrollPos = logoScroller.getBoundingClientRect().y - windowHeight;
      logoScroller.style.transform = `translateX(${scrollPos}px)`
    }
  });
}

function registerTooltips() {
  const tooltips = document.getElementsByClassName('tooltip');
  for (let i = 0; i < tooltips.length; i++) {
    tooltip(tooltips[i]);
  }
}

function tooltip(tooltip) {
  const tooltipText = tooltip.getAttribute('data-tooltip');
  if (!tooltipText) throw('Missing tooltip text');
  tooltip.addEventListener('mouseover', () => {
    const span = document.createElement('span');
    span.classList.add('tooltip-text');
    span.innerHTML = tooltipText;
    document.body.appendChild(span);
    window.addEventListener('mousemove', tellPos);
  });
  tooltip.addEventListener('mouseout', () => {
    document.getElementsByClassName('tooltip-text')[0].remove();
    window.removeEventListener('mousemove', tellPos);
  });
}

function tellPos(p) {
  const tooltip = document.getElementsByClassName('tooltip-text')[0];
  const tooltipWidth = tooltip.offsetWidth / 2;
  tooltip.style.left = `${p.pageX - tooltipWidth}px`;
  tooltip.style.top = `${p.pageY - tooltip.offsetHeight - 12}px`;
}

function registerCallouts() {
  const callouts = document.getElementsByClassName('callout');
  for (let i = 0; i < callouts.length; i++) {
    callout(callouts[i]);
  }
}

function callout(callout) {
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

function registerTestimonial() {
  const btns = document.getElementsByClassName('testimonial-btns')[0].querySelectorAll('button');
  let interval;
  Array.from(btns).forEach(btn => {
    btn.addEventListener('click', () => {
      slide(btn, btns);
      clearInterval(interval);
      interval = setInterval(repeatSlide, 5000, btns);
    });
  });

  interval = setInterval(repeatSlide, 5000, btns);
}

function repeatSlide(btns) {
  let active = Array.from(btns).find(x => x.classList.contains('active'));
  let currentIndex = Array.from(btns).indexOf(active);
  currentIndex == 2 ? currentIndex = 0 : currentIndex++;
  slide(btns[currentIndex], btns);
}

function slide(clickedBtn, btns) {
  Array.from(btns).forEach(btn => {
    btn.classList.remove('active');
  });

  const firstTestimonial = document.getElementsByClassName('testimonial')[0];

  clickedBtn.classList.add('active');
  switch(clickedBtn.classList[0]) {
    case 'first':
      firstTestimonial.style.marginLeft = '0';
      break;
    case 'second':
      firstTestimonial.style.marginLeft = '-100%';
      break;
    default:
      firstTestimonial.style.marginLeft = '-200%';
  }
}
