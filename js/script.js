import Testimonials from './modules/_testimonials.js';
import Callout from './modules/_callout.js';
import Tooltips from './modules/_tooltips.js';
import Cookies from './modules/_cookies.js';
import LogoScroller from './modules/_logo-scroller.js';
import CaseStudies from './modules/_case-studies.js';
import FadeIns from './modules/_fadeIns.js';
import Confetti from './modules/_confetti.js';
import ProgressiveImage from './modules/_progressiveImage.js';

let mobNavOpen = false;

window.addEventListener('DOMContentLoaded', (event) => {
  const cookies = new Cookies();
  cookies.init();

  const themeBtns = document.querySelectorAll('.nav__links--btn');
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  });

  if (
		localStorage.getItem('theme') == 'dark' ||
		(localStorage.getItem('theme') != 'light' && window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches)
	) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

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

	if (document.getElementsByClassName('case-study--hero').length > 0) {
    const progressiveImage = new ProgressiveImage();
    progressiveImage.init();
  }

	window.confetti = new Confetti();

	document.documentElement.classList.replace('no-js', 'js');
	const fadeIns = new FadeIns();
	fadeIns.init();

	console.log(String.raw`
+------------------------------------------+
|                                          |
|           _   _            _             |
|          | | | | ___ _   _| |            |
|          | |_| |/ _ \ | | | |            |
|          |  _  |  __/ |_| |_|            |
|          |_| |_|\___|\__, (_)            |
|                      |___/               |
|                                          |
|     Snooping around in the code, huh?    |
|  I get it - I do the same all the time.  |
|                                          |
|     Enjoy your snooping! If you find     |
|  something that needs fixing/improving   |
|              let me know!                |
|                                          |
+------------------------------------------+
`);
});
