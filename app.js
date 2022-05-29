import { SearchableList } from './components/Search/SearchableList.js';
import { SearchInput } from './components/Search/SearchInput.js';

const $app = document.querySelector('.app');

const init = async () => {
  $app.innerHTML = `
    <div class="search-section">
      <div class="search-input"></div>
      <div class="searchable-list"></div>
    </div>
    <div class="result-section">
      <div class="file-title"></div>
      <pre class="line-numbers" ><code class="language-js"></code></pre>
    </div>
  `;

  const $searchSection = document.querySelector('.search-section');
  const searchInput = new SearchInput({ $target: $searchSection });
  const searchableList = new SearchableList({ $target: $searchSection });

  searchInput.render();
  await searchableList.render();
};

init();
