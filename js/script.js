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
});
