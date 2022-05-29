//TODO: api 함수 및 상수 분리
import { SearchResult } from './SearchResult.js';

const TOTAL_LEVEL_CNT = 5;
const GET_FILE_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;
const getFileList = async level => {
  const url = GET_FILE_LIST_BASE_URL + `level-${level}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};
export function SearchableList({ $target }) {
  this.render = async () => {
    const $fileListContainer = document.createElement('div');
    $fileListContainer.classList.add('file-list-container');

    for (let level = 1; level <= TOTAL_LEVEL_CNT; level++) {
      const fileList = await getFileList(level);
      const $fileList = document.createElement('ul');
      $fileList.classList.add('file-list', `level-${level}`);
      $fileList.innerHTML = `[level ${level}]`;
      $fileListContainer.appendChild($fileList);
      fileList.forEach(e => {
        if (e.name === '00-해답-예시.js') return;
        const element = document.createElement('li');
        element.classList.add('file-list-item', e.name);
        element.innerHTML = e.name
          .slice(0, e.name.length - 3)
          .replaceAll('-', ' ');
        $fileList.appendChild(element);
      });
    }

    $target.appendChild($fileListContainer);
    const $fileTitle = document.querySelector('.file-title');

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
}
