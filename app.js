import { SearchableList } from './components/Search/SearchableList.js';
import { SearchInput } from './components/Search/SearchInput.js';
import { SearchResult } from './components/Search/SearchResult.js';
import { CreateFuzzyMatcher } from './components/Search/KoreanFuzzy.js';

//TODO: app.js 내에서 DOM 구조가 그려질 수 있도록 수정, 현재는 index.html 에서 app.js 가 아닌 곳에 하드코딩되어있음
const init = async () => {
  const content = document.querySelector('.app');
  const $searchSection = document.createElement('div');
  $searchSection.className = 'search-section';
  const $resultSection = document.createElement('div');
  $resultSection.className = 'result-section';
  $resultSection.innerHTML = `
    <div class="file-title"></div>
    <pre class="line-numbers"><code class="language-js"></code></pre>
  `;
  content.append($searchSection, $resultSection);
  // const $searchSection = document.querySelector('.search-section');
  const searchInput = new SearchInput({ $target: $searchSection });
  searchInput.render();
  const searchableList = new SearchableList({ $target: $searchSection });
  await searchableList.render();

  const $searchbox = document.getElementById('search-box');
  const $fileListContainer = document.querySelector('.file-list-container');
  const $fileListItem = document.querySelectorAll('.file-list-item');
  const $fileTitle = document.querySelector('.file-title');

  $searchbox.addEventListener('input', event => {
    const query = $searchbox.value;
    const regex = CreateFuzzyMatcher(query.toLowerCase());
    for (let i = 0; i < $fileListItem.length; i++) {
      if (regex.test($fileListItem[i].textContent.toLowerCase())) {
        $fileListItem[i].classList.remove('is-hidden');
      } else {
        $fileListItem[i].classList.add('is-hidden');
      }
    }
  });

  $fileListContainer.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return;
    $fileTitle.innerHTML = e.target.innerText;
    const level = e.target.parentNode.classList[1].slice(-1);
    const fileName = e.target.classList[1];
    const $container = document.querySelector('code');
    const searchResult = new SearchResult({
      $target: $container,
      level,
      fileName,
    });
    searchResult.render();
  });
};

init();
