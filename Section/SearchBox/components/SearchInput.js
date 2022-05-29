import { CreateFuzzyMatcher } from '../utils/koreanFuzzy.js';

export function SearchInput() {
  this.render = () => {
    const $searchInput = document.querySelector('.searchInput');
    $searchInput.innerHTML = `
      <input type="search" id="searchInput" placeholder="문제 이름을 검색하세요.">
    `;
    const $fileListItem = document.querySelectorAll('.file-list-item');

    $searchInput.addEventListener('input', event => {
      const $searchInputBox = document.getElementById('searchInput');
      const query = $searchInputBox.value;
      const regex = CreateFuzzyMatcher(query.toLowerCase());
      for (let i = 0; i < $fileListItem.length; i++) {
        if (regex.test($fileListItem[i].textContent.toLowerCase())) {
          $fileListItem[i].classList.remove('is-hidden');
        } else {
          $fileListItem[i].classList.add('is-hidden');
        }
      }
    });
  };
}
