import {caseStudyTiles} from './_data.js';

class CaseStudyShuffle {
  constructor() {
    this.caseStudyTiles = caseStudyTiles;
    this.caseStudyDoc = document.querySelector('#case-study-shuffle');
  }

  init() {
    if (this.caseStudyDoc) {
      this.addRecommendedTiles();
    }
  }

  addRecommendedTiles() {
    const caseStudyTilesArray = Object.values(caseStudyTiles);
    const shuffledItems = caseStudyTilesArray.sort(() => Math.random() - 0.5).slice(0, 3);
    shuffledItems.forEach(tile => {
      document.querySelector('.case-study-tiles').innerHTML += tile;
    });
  }
}

export default CaseStudyShuffle;