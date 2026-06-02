class CaseStudies {
  constructor() {
    this.searchInput = document.getElementById('search');
    this.tiles = document.getElementsByClassName('case-study-tile-wrap');
    this.countTiles = [...this.tiles];
    this.searchTerm;
    this.emptySearch = document.getElementById('no-results');
    this.resultsMessage = document.getElementById('results-message');
    this.searchClear = document.getElementsByClassName('search--clear')[0];
    this.viewToggle = document.querySelectorAll('[name="view"]');
  }

  init() {
    this.searchInput.addEventListener('keyup', () => {
      this.search();
    });

    this.searchClear.addEventListener('click', () => {
      this.searchInput.value = '';
      this.search();
    });

    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur()
      }
    });

    if (this.viewToggle.length > 0) {
      this.viewToggle.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          document.getElementById('results').classList.toggle('case-study-tiles-list', e.target.value === 'list');
        });
      });
    }
  }

  search() {
    this.searchTerm = this.searchInput.value.toUpperCase();

      for (let i = 0; i < this.tiles.length; i++) {
        const tile = this.tiles[i].getElementsByTagName('a')[0];
        const txtValue = tile.textContent || tile.innerText;
        if (txtValue.toUpperCase().indexOf(this.searchTerm) > -1) {
          this.tiles[i].style.display = '';
          if (this.countTiles.indexOf(this.tiles[i]) == -1) this.countTiles.push(this.tiles[i]);
        } else {
          this.tiles[i].style.display = 'none';
          if (this.countTiles.indexOf(this.tiles[i]) != -1) this.countTiles.splice(this.countTiles.indexOf(this.tiles[i]), 1);
        }
      }
      
      this.resultsMessage.style.display = this.searchInput.value && this.countTiles.length > 0 ? 'block' : 'none';
      this.resultsMessage.innerHTML = this.countTiles.length == 1 ? `${this.countTiles.length} result` : `${this.countTiles.length} results`;
      this.emptySearch.style.display = this.countTiles.length < 1 ? 'block' : 'none';

      this.searchClear.style.display = this.searchInput.value ? 'block' : 'none' ;
  }
}

export default CaseStudies;