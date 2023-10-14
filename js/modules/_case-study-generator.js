import {preFillOptions, testimonials, caseStudyTiles} from './_data.js';

class CaseStudyGenerator {
  constructor() {
    this.preFillOptions = preFillOptions;
    this.testimonials = testimonials;
    this.caseStudyTiles = caseStudyTiles;
    this.metaTitleInput = document.querySelector('[data-id="meta-title"]');
    this.metaDescInput = document.querySelector('[data-id="meta-description"]');
    this.imageInput = document.querySelector('[data-id="image"]');
    this.imageExtensionInput = document.querySelector('[data-id="image-extension"]');
    this.title1Input = document.querySelector('[data-id="title-first"]');
    this.title2Input = document.querySelector('[data-id="title-last"]');
    this.detailsInput = document.querySelector('[data-id="details"]');
    this.skillsInput = document.querySelector('[data-id="skills"]');
    this.toolsInput = document.querySelector('[data-id="tools"]');
    this.introInput = document.querySelector('[data-id="intro"]');
    this.solutionInput = document.querySelector('[data-id="solution"]');
    this.outcomeInput = document.querySelector('[data-id="outcome"]');
    this.testimonialsInput = document.querySelector('[data-id="testimonials"]');
    this.caseStudiesInput = document.querySelector('[data-id="case-studies"]');
    this.output = document.getElementById('output');
  }

  init() {
    document.getElementById('js--case-study-generate').addEventListener('submit', (e) => {
      e.preventDefault();
      this.generate();
    });

    const preFillSelect = document.querySelector('[data-id="pre-fill"]');
    preFillSelect.addEventListener('change', () => {
      this.preSelect(preFillSelect);
    });

    const blocks = document.getElementsByClassName('codeblock');
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].querySelector('.copy-btn').addEventListener('click', (btn) => {
        navigator.clipboard.writeText(btn.target.parentNode.querySelector('input').value);
        btn.target.classList.add('copy-btn-copied');
        btn.target.classList.add('disabled');
        btn.target.innerHTML = `
          Copied
          <svg style="margin-left:8px;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
        `;
        btn.target.classList.remove('animate');
        btn.target.classList.add('animate');
        setTimeout(function(){
          btn.target.classList.remove('animate');
        },700);

        btn.target.setAttribute('disabled', 'disabled');

        setTimeout(() => {
          btn.target.classList.remove('copy-btn-copied');
          btn.target.classList.remove('disabled');
          btn.target.innerHTML = 'Copy';
          btn.target.removeAttribute('disabled');
        }, 2000);
      });
      this.highlight(blocks[i], '#55b6c1', new RegExp('echo', 'g'));
      this.highlight(blocks[i], '#be4f46', new RegExp('&lt;\\?php', 'g'));
      this.highlight(blocks[i], '#be4f46', new RegExp('\\?&gt;', 'g'));
      this.highlight(blocks[i], '#e06b75', /\$[A-Za-z0-9_]+/);
      this.highlight(blocks[i], '#e5bf7b', new RegExp('log', 'g'));
      this.highlight(blocks[i], '#e5bf7b', /\@[A-Za-z0-9_]+/);
      this.highlight(blocks[i], '#be4f46', /&lt;[A-Za-z0-9_]+/);
      this.highlight(blocks[i], '#be4f46', /&lt;\/[A-Za-z0-9_]+&gt;/);
    }
  }

  preSelect(select) {
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
    const val = this.preFillOptions[select.value];
    this.metaTitleInput.value = val['meta_title'];
    this.metaDescInput.value = val['meta_description'];
    this.imageInput.value = val['image'];
    this.imageExtensionInput.value = val['image_extension'];
    this.title1Input.value = val['title_1'];
    this.title2Input.value = val['title_2'];
    this.detailsInput.value = val['details'];
    this.introInput.value = val['intro'];
    this.solutionInput.value = val['solution'];
    this.outcomeInput.value = val['outcome'];
    val['skills'].forEach(item => {
      this.skillsInput.elements[`skills-${item}`].checked = true;
    });
    val['tools'].forEach(item => {
      this.toolsInput.elements[`tools-${item}`].checked = true;
    });
    val['case-studies'].forEach(item => {
      this.caseStudiesInput.elements[item].checked = true;
    });
    this.testimonialsInput.elements[val['testimonial']].checked = true;
  }

  highlight(block, color, regex) {
    let code = block.querySelector('code');
    const match = code.innerHTML.match(regex);
    if (match) {
      const newCode = code.innerHTML.replace(regex, `<span style="color:${color}">${match[0]}</span>`);
      code.innerHTML = newCode;
    }
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  getSkills() {
    let html = [];
    let checkboxes = this.skillsInput.elements;
    Array.from(checkboxes).forEach(elem => {
      if (elem.checked) {
        html.push(`
          <div class="case-study--tag">
            ${elem.id.split('skills-')[1]}
          </div>
        `);
      }
    });
    const shuffledArray = html.sort((a, b) => 0.5 - Math.random());
    return shuffledArray.join('');
  }

  getTools() {
    let html = [];
    let checkboxes = this.toolsInput.elements;
    Array.from(checkboxes).forEach(elem => {
      if (elem.checked) {
        const tool = elem.id.split('tools-')[1].replace(/-/g, ' ');
        const toolImg = elem.id.split('tools-')[1];
        html.push(`
          <img alt="${tool} logo" class="tooltip" data-tooltip="${tool}" src="../images/logos/${toolImg.toLowerCase()}.svg" height="32" width="32">
        `);
      }
    });
    const shuffledArray = html.sort((a, b) => 0.5 - Math.random());
    return shuffledArray.join('');
  }
  
  buildTestimonial() {
    const testimonial = this.testimonials[document.querySelector('input[name="testimonial"]:checked').id];
    let html = `
    <div class="callout testimonial left-aligned">
      <div class="callout--inner">
        <p>
          "${testimonial.content}"
        </p>
        <div class="testimonial-quoter">
          <img alt="${testimonial.name}" src="${testimonial.image}" />
          <div>
            <div>
              <strong>${testimonial.name}</strong>
            </div>
            <div>
              ${testimonial.title}
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    return html;
  }
  
  buildFeaturedCaseStudies() {
    let html = [];
    let checkboxes = this.caseStudiesInput.elements;
    Array.from(checkboxes).forEach(elem => {
      if (elem.checked) {
        html.push(`
          ${this.caseStudyTiles[elem.id]}
        `);
      }
    });
  
    const shuffledArray = html.sort((a, b) => 0.5 - Math.random());
    return shuffledArray.join('');
  }
  
  generate() {
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.classList.remove('disabled');
    copyBtn.removeAttribute('disabled');
    let html = `<!doctype HTML>
    <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Connor Law - Case Study - ${this.metaTitleInput.value}</title>
          <meta name="author" content="Connor Law">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="${this.metaDescInput.value}">
          <link rel="apple-touch-icon" href="../images/logos/logo.svg" />
          <link rel="stylesheet" href="../style.css">
          <link rel="icon" href="../images/logos/logo.svg">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
      </head>
    
      <body>
        <nav class="nav">
          <div class="nav__inner">
            <a href="/"><img alt="Connor Law's logo" src="../images/logos/logo.svg" /></a>
            <div class="nav__links">
              <ul>
                <li>
                  <a class="nav__mob-item" href="/#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/#services">
                    Services
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/case-studies">
                    Case studies
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <div class="nav__links--btn"></div>
                </li>
              </ul>
            </div>
            <div class="nav__mob-btn">
              <span></span>
              <span></span>
            </div>
            <div class="nav__mob">
              <div class="nav__mob-close">
                <span></span>
                <span></span>
              </div>
              <ul>
                <li>
                  <a class="nav__mob-item" href="/#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/#services">
                    Services
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/case-studies">
                    Case studies
                  </a>
                </li>
                <li>
                  <a class="nav__mob-item" href="/#contact">
                    Contact
                  </a>
                </li>
                <li>
                    <div class="nav__links--btn"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        <section class="section">
          <div class="section__inner">
            <p class="section__inner--subtitle section--center">Case study</p>
            <h1 class="section__inner--title section--center">
              ${this.title1Input.value}<br class="desktop-only" />
              ${this.title2Input.value}
            </h1>
            <img alt="Case study mockups" class="case-study--hero" src="../images/case-studies/${this.imageInput.value}${this.imageExtensionInput.value}" />
            <div class="case-study">
              <div class="case-study--main">
                <h2>
                  Introduction
                </h2>
                <p>
                  ${this.introInput.value.replace(/\n/g, '<br>\n')}
                </p>
                <br/>
                <h2>
                  Solution
                </h2>
                <p>
                  ${this.solutionInput.value.replace(/\n/g, '<br>\n')}
                </p>
                <br/>
                <h2>
                  Outcome
                </h2>
                <p>
                  ${this.outcomeInput.value.replace(/\n/g, '<br>\n')}
                </p>
              </div>
              <div class="case-study--info case-study--info-cover" onclick="this.classList.remove('case-study--info-cover')">
                <span class="case-study-tile--title">
                  Details
                </span>
                <p>
                ${this.detailsInput.value}
                </p>
                <br />
                <span class="case-study-tile--title">
                  Skills
                </span>
                <div class="case-study--tags">
                  ${this.getSkills()}
                </div>
                <br />
                <span class="case-study-tile--title">
                  Tools
                </span>
                <div class="case-study--tools">
                  ${this.getTools()}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="section__inner section__inner--flex">
            ${this.buildTestimonial()}
          </div>
        </section>
        <section id="case-studies" class="section">
          <div class="section__inner">
            <p class="section__inner--subtitle">Case studies</p>
            <h1 class="section__inner--title">More of my latest work</h1>
            <div class="case-study-tiles">
              ${this.buildFeaturedCaseStudies()}
            </div>
            <br/>
            <a class="button" href="/case-studies">
              Show all
            </a>
            <div id="contact" class="callout left-aligned">
              <div class="callout--inner">
                <h1 class="section__inner--title">
                    Let's grow your business,<br/> together
                </h1>
                <div class="callout--inner-content">
                  <div>
                    Whether you're after a new design, fresh development or just have a
                    great business idea you want to get the ball rolling on, I'm here to help.
                    I'm just a click away. Let's get started, today.
                  </div>
                  <a
                    class="button"
                    href="mailto:connorlaw96@hotmail.com?subject=Website%20enquiry">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <section class="section">
            <div class="section__inner">
              <div class="socials">
                  <a target="_blank" href="https://www.upwork.com/freelancers/connorlaw" rel="noopener noreferrer">
                      <img height="32" width="32" alt="Upwork logo" class="social" src="../images/logos/logo_upwork.svg">
                  </a>
                  <a target="_blank" href="https://uk.linkedin.com/in/connor-law-77b176159" rel="noopener noreferrer">
                      <img height="32" width="32" alt="Linkedin logo" class="social" src="../images/logos/logo_linkedin.svg" alt="Linkedin logo">
                  </a>
              </div>
              <p>&copy; 2023 &middot; Connor Law</p>
            </div>
          </section>
        </footer>
        <div id="cookie-banner" class="cookie-banner callout">
          <div class="callout--inner">
            <p class="h3">Hey! Are you cool with cookies?</p>
            <div>I'm using cookies to track how many people are visiting my site. That's all, I promise.</div>
            <div class="right-aligned">
              <a
                class="button button--secondary"
                data-cookie-consent="false"
                href="#"
                style="margin-right: 4px;">
                I'd rather you didn't
              </a>
              <a
                class="button"
                data-cookie-consent="true"
                href="#">
                Go for it!
              </a>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="../script.js"></script>
      </body>
    </html>`;
    this.output.innerText = html;
    this.output.style.display = 'block';
    document.getElementById('output-val').value = html;
    window.scrollTo({top: document.getElementById('output').offsetTop,left: 0,behavior: 'smooth'});
  }
}

export default CaseStudyGenerator;