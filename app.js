import { SearchBox } from './Section/SearchBox/components/index.js';

const $app = document.querySelector('.app');

const init = async () => {
  $app.innerHTML = `
    <div class="searchBox"></div>
    <div class="result-section">
      <div class="file-title"></div>
      <pre class="line-numbers" ><code class="language-js"></code></pre>
    </div>
  `;
  const $searchBox = new SearchBox();
  $searchBox.render();
};

init();
