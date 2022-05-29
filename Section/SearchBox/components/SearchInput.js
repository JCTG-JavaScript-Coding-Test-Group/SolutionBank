import { CreateFuzzyMatcher } from '../utils/koreanFuzzy.js';

export function SearchInput({ $target }) {
  this.render = () => {
    const $searchBox = document.createElement('input');
    $searchBox.setAttribute('type', 'search');
    $searchBox.setAttribute('id', 'search-input');
    $searchBox.setAttribute('placeholder', '문제 이름을 검색하세요.');
    $target.appendChild($searchBox);
    const $fileListItem = document.querySelectorAll('.file-list-item');

    $searchBox.addEventListener('input', event => {
      const query = $searchBox.value;
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
