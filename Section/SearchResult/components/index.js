import { getFileContent } from '../utils/api.js';

export function Index({ level, fileName }) {
  this.render = async () => {
    const $searchResult = document.querySelector('.searchResult');
    $searchResult.innerHTML = `
      <div class="file-title"></div>
      <pre class="line-numbers" ><code class="language-js"></code></pre>
    `;
    const $code = document.querySelector('code');
    $code.innerHTML = await getFileContent(level, fileName);
  };
}
