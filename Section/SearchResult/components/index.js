import { getFileContent } from '../utils/api.js';
import { splitCodeToSolutions } from '../utils/format.js';

export default function SearchResult({ level, fileName }) {
  let page = 0;
  this.render = async () => {
    const $searchResult = document.querySelector('.searchResult');
    $searchResult.innerHTML = `
      ${SolutionNavigator()}
      <div class="file-title"></div>
      <div>
        <pre class="code"></pre>
        <button class="btn-copy">copy</button>
      </div>
    `;
    const $code = document.querySelector('.code');
    const solutions = splitCodeToSolutions(
      await getFileContent(level, fileName),
    );
    $code.innerHTML = solutions[page];

    const $copyBtn = document.querySelector('.btn-copy');
    $copyBtn.addEventListener('click', e => {
      const t = document.createElement('textarea');
      document.body.appendChild(t);
      t.value = e.target.previousElementSibling.innerHTML
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    });

    const $navigator = document.querySelector('.solutionNavigator');
    $navigator.addEventListener('click', e => {
      const $clickedButton = e.target.closest('button');
      if ($clickedButton.className.includes('btnPrevSolution')) {
        if (page > 0) {
          page -= 1;
          $code.innerHTML = solutions[page];
        }
      }
      if ($clickedButton.className.includes('btnNextSolution')) {
        if (page < solutions.length - 1) {
          page += 1;
          $code.innerHTML = solutions[page];
        }
      }
    });
  };
}
function SolutionNavigator() {
  return `
    <div class="solutionNavigator">
      <button class="btnPrevSolution">이전 문제</button>
      <button class="btnNextSolution">다음 문제</button>
    </div>`;
}
