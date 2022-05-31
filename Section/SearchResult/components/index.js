import { getFileContent } from '../utils/api.js';
import { splitCodeToSolutions } from '../utils/format.js';
import { copyText } from '../utils/copyText.js';

export default function SearchResult({ level, fileName }) {
  let page = 0;
  this.render = async () => {
    const $searchResult = document.querySelector('.searchResult');
    $searchResult.innerHTML = `
      ${SolutionNavigator()}
      <div class="file-title"></div>
      <div>
        <pre class="code"></pre>
        <button class="btn-copy">코드 복사하기</button><span class="isCopied">복사됨</span>
      </div>
    `;

    const $fileTitle = document.querySelector('.file-title');
    $fileTitle.innerHTML = fileName.replace(/\-/g, ' ').replace('.js', '');

    const $code = document.querySelector('.code');
    const solutions = splitCodeToSolutions(
      await getFileContent(level, fileName),
    );
    $code.innerHTML = solutions[page];

    const $copyBtn = document.querySelector('.btn-copy');
    $copyBtn.addEventListener('click', e => {
      const src = e.target.previousElementSibling;
      copyText(src);
      const isCopied = document.querySelector('.isCopied');
      isCopied.textContent = ' 클립보드에 복사됨!';
    });

    const $navigator = document.querySelector('.solutionNavigator');
    let btnPrevSolution = document.querySelector('.btnPrevSolution-inactive');
    let btnNextSolution = document.querySelector('.btnNextSolution');
    if (page == 0) {
      btnPrevSolution.className = 'btnPrevSolution-inactive';
    }
    $navigator.addEventListener('click', e => {
      const $clickedButton = e.target.closest('button');

      if ($clickedButton.className.includes('btnPrevSolution')) {
        if (page > 0) {
          page -= 1;
          $code.innerHTML = solutions[page];
          console.log(page);
        }
      }
      if ($clickedButton.className.includes('btnNextSolution')) {
        if (page < solutions.length - 1) {
          page += 1;
          $code.innerHTML = solutions[page];
          console.log(page);
        }
      }
      page !== 0
        ? (btnPrevSolution.className = 'btnPrevSolution')
        : (btnPrevSolution.className = 'btnPrevSolution-inactive');
      page == solutions.length - 1
        ? (btnNextSolution.className = 'btnNextSolution-inactive')
        : (btnNextSolution.className = 'btnNextSolution');
    });
  };
}
function SolutionNavigator() {
  return `
    <div class="solutionNavigator">
      <button class="btnPrevSolution-inactive">이전 문제</button>
      <button class="btnNextSolution">다음 문제</button>
    </div>`;
}
