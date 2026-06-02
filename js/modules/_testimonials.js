class Testimonials {
  constructor() { }

  init() {
    const btns = document.getElementsByClassName('testimonial-btns')[0]?.querySelectorAll('button');
    const testimonialWrapper = document.getElementsByClassName('testimonial--wrapper')[0];
    const testimonials = document.getElementsByClassName('testimonial');
    
    if (!btns || !testimonialWrapper) return;

    let posX;
    let posY;
    let interval;

    const resetAutoplay = () => {
      clearInterval(interval);
      interval = setInterval(repeatSlide, 5000);
    };

    const repeatSlide = () => {
      const active = Array.from(btns).find(x => x.classList.contains('active'));
      let currentIndex = Array.from(btns).indexOf(active);
      currentIndex = currentIndex === btns.length - 1 ? 0 : currentIndex + 1;
      this.slide(btns[currentIndex], btns, testimonials);
    };

    Array.from(btns).forEach(btn => {
      btn.addEventListener('click', () => {
        this.slide(btn, btns, testimonials);
        resetAutoplay();
      });
    });

    if (testimonials.length > 1) {
      testimonialWrapper.addEventListener('touchstart', (event) => {
        posX = event.touches[0].pageX;
        posY = window.scrollY;
      });

      testimonialWrapper.addEventListener('touchend', (event) => {
        const active = Array.from(btns).find(x => x.classList.contains('active'));
        let currentIndex = Array.from(btns).indexOf(active);
        const deltaX = posX - event.changedTouches[0].pageX;
        const deltaY = Math.abs(posY - window.scrollY);

        if (deltaY < 80 && Math.abs(deltaX) > 80) {
          if (deltaX < 0) {
            currentIndex = currentIndex === 0 ? btns.length - 1 : currentIndex - 1;
          } else {
            currentIndex = currentIndex === btns.length - 1 ? 0 : currentIndex + 1;
          }
          
          this.slide(btns[currentIndex], btns, testimonials);
          resetAutoplay();
        }
      });
    }

    interval = setInterval(repeatSlide, 5000);
  }

  slide(clickedBtn, btns, testimonials) {
    Array.from(btns).forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    const firstTestimonial = testimonials[0];
    if (!firstTestimonial) return;

    const targetIndex = Array.from(btns).indexOf(clickedBtn);

    if (targetIndex === 0) {
      firstTestimonial.style.marginLeft = '0';
    } else {
      firstTestimonial.style.marginLeft = `calc(-${targetIndex * 100}% - ${targetIndex * 2}rem)`;
    }

		Array.from(testimonials).forEach(slide => {
			slide.classList.remove('active');
		});

		if (testimonials[targetIndex]) {
			testimonials[targetIndex].classList.add('active');
		}
  }
}

export default Testimonials;