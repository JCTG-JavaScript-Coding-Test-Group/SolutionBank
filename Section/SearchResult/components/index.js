import { getFileContent } from '../utils/api.js';
import { formattedFileName, splitCodeToSolutions } from '../utils/format.js';
import { copyText } from '../utils/copyText.js';

export default function SearchResult({ level, fileName }) {
  let page = 0;
  this.render = async () => {
    const $searchResult = document.querySelector('.searchResult');
    $searchResult.innerHTML = `
      <div class="solutionNavigator">
        <button class="btnPrevSolution-inactive">이전 해설</button>
        <button class="btnNextSolution">다음 해설</button>
      </div>
      <div class="file-title"></div>
      <div class="wrapCode">
        <pre class="code"></pre>
        <button class="btn-copy">코드 복사하기</button><span class="isCopied"></span>
      </div>
    `;
    const $fileTitle = document.querySelector('.file-title');
    const $code = document.querySelector('.code');
    const solutions = splitCodeToSolutions(
      await getFileContent(level, fileName),
    );
    setCurrentResult();
    addCopyEvent();
    addNavEvent();

    function setCurrentResult() {
      $fileTitle.innerHTML = formattedFileName(fileName);
      $code.innerHTML = solutions[page];
    }

    function addCopyEvent() {
      const $copyBtn = document.querySelector('.btn-copy');
      $copyBtn.addEventListener('click', e => {
        const src = e.target.previousElementSibling;
        copyText(src);
        const isCopied = document.querySelector('.isCopied');
        isCopied.textContent = ' 📋 클립보드에 복사됨!';
        setTimeout(() => {
          isCopied.textContent = '';
        }, 1000);
      });
    }

    function addNavEvent() {
      const $navigator = document.querySelector('.solutionNavigator');
      const btnPrevSolution = document.querySelector(
        '.btnPrevSolution-inactive',
      );
      const btnNextSolution = document.querySelector('.btnNextSolution');
      if (page === 0) {
        btnPrevSolution.className = 'btnPrevSolution-inactive';
      }
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
        page !== 0
          ? (btnPrevSolution.className = 'btnPrevSolution')
          : (btnPrevSolution.className = 'btnPrevSolution-inactive');
        page === solutions.length - 1
          ? (btnNextSolution.className = 'btnNextSolution-inactive')
          : (btnNextSolution.className = 'btnNextSolution');
      });
    }
  };
}
