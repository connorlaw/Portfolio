class Tooltips {
  constructor() { }

  init() {
    const tooltips = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltips.length; i++) {
      this.tooltip(tooltips[i]);
    }
  }

  tooltip(tooltip) {
    const tooltipText = tooltip.getAttribute('data-tooltip');
    if (!tooltipText) throw('Missing tooltip text');
    tooltip.addEventListener('mouseover', () => {
      const span = document.createElement('span');
      span.classList.add('tooltip-text');
      span.innerHTML = tooltipText;
      document.body.appendChild(span);
      window.addEventListener('mousemove', this.tellPos);
    });
    tooltip.addEventListener('mouseout', () => {
      document.getElementsByClassName('tooltip-text')[0].remove();
      window.removeEventListener('mousemove', this.tellPos);
    });
  }

  tellPos(p) {
    const tooltip = document.getElementsByClassName('tooltip-text')[0];
    const tooltipWidth = tooltip.offsetWidth / 2;
    tooltip.style.left = `${p.pageX - tooltipWidth}px`;
    tooltip.style.top = `${p.pageY - tooltip.offsetHeight - 12}px`;
  }
}

export default Tooltips;