import Testimonials from './modules/testimonials.js';
import Callout from './modules/callout.js';
import Tooltips from './modules/tooltips.js';
import Cookies from './modules/cookies.js';
import LogoScroller from './modules/logo-scroller.js';
import CaseStudies from './modules/case-studies.js';

let mobNavOpen = false;

window.addEventListener('DOMContentLoaded', (event) => {
  const cookies = new Cookies();
  cookies.init();

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
    const logoScroller = new LogoScroller();
    logoScroller.init();
  }

  if (document.getElementsByClassName('tooltip').length > 0) {
    const tooltips = new Tooltips();
    tooltips.init();
  }

  if (document.getElementsByClassName('callout').length > 0) {
    const callout = new Callout();
    callout.init();
  }

  if (document.getElementsByClassName('testimonial--wrapper').length > 0) {
    const testimonials = new Testimonials();
    testimonials.init();
  }

  if (document.getElementById('search')) {
    const caseStudies = new CaseStudies();
    caseStudies.init();
  }
});
