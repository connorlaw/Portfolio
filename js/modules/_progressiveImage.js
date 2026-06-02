export default class ProgressiveImage {
  constructor() {
    this.wrappers = document.querySelectorAll('.case-study--hero');
    this.observer = null;
  }

  init() {
    if (!this.wrappers.length) return;
    this.wrappers.forEach(wrapper => this.loadImage(wrapper));
  }

  loadImage(wrapper) {
    const img = wrapper.querySelector('.lazy-image');
    if (!img || !img.dataset.srcset) return;

    img.srcset = img.dataset.srcset;
    
    if (img.dataset.sizes) {
      img.sizes = img.dataset.sizes;
    }

    img.onload = () => {
      img.classList.add('loaded');
      
      setTimeout(() => {
        wrapper.style.backgroundImage = 'none';
        wrapper.classList.add('is-fully-loaded');
      }, 100); 
    };
  }
}