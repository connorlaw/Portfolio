class Testimonials {
  constructor() { }

  init() {
    const btns = document.getElementsByClassName('testimonial-btns')[0].querySelectorAll('button');
    let interval;
    window.slide = this.slide;
    Array.from(btns).forEach(btn => {
      btn.addEventListener('click', () => {
        this.slide(btn, btns);
        clearInterval(interval);
        interval = setInterval(this.repeatSlide, 5000, btns);
      });
    });

    interval = setInterval(this.repeatSlide, 5000, btns);
  }

  repeatSlide(btns) {
    let active = Array.from(btns).find(x => x.classList.contains('active'));
    let currentIndex = Array.from(btns).indexOf(active);
    currentIndex == 2 ? currentIndex = 0 : currentIndex++;
    slide(btns[currentIndex], btns);
  }

  slide(clickedBtn, btns) {
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
}

export default Testimonials;