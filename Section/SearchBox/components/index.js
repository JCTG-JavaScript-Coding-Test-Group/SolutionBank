import { SearchInput } from './SearchInput.js';
import { SearchableList } from './SearchableList.js';

export default function SearchBox() {
  const $searchBox = document.querySelector('.searchBox');
  this.render = async () => {
    $searchBox.innerHTML = `
      <div class="searchInput"></div>
      <div class="searchableList"></div>
      <div class="searchPhrases"><a href="#footerBox">찾는 문제가 없으신가요?<br>Repository에 풀이를 제보해주세요</a></div>
  `;
    const searchInput = new SearchInput();
    const searchableList = new SearchableList();

    await searchableList.render();
    searchInput.render();
  };
}
