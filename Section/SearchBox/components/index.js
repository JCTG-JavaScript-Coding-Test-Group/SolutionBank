import { SearchInput } from './SearchInput.js';
import { SearchableList } from './SearchableList.js';

export default function SearchBox() {
  const $searchBox = document.querySelector('.searchBox');
  this.render = async () => {
    $searchBox.innerHTML = `
      <div class="searchInput"></div>
      <div class="searchableList"></div>
  `;
    const searchInput = new SearchInput();
    const searchableList = new SearchableList();

    await searchableList.render();
    searchInput.render();
  };
}
