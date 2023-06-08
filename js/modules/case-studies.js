class CaseStudies {
  constructor() {
    this.searchInput = document.getElementById('search');
    this.tiles = document.getElementsByClassName('case-study-tile-wrap');
    this.countTiles = [...this.tiles];
    this.searchTerm;
    this.emptySearch = document.getElementById('no-results');
  }

  init() {
    this.searchInput.addEventListener('keyup', () => {
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
      
      this.emptySearch.style.display = this.countTiles.length < 1 ? 'block' : 'none';
    });
  }
}

export default CaseStudies;