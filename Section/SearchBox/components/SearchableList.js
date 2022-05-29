//TODO: api 함수 및 상수 분리
import { Index } from '../../SearchResult/components/index.js';
import { getFileList } from '../utils/api.js';

const POSSIBLE_LEVELS = [1, 2, 3, 4, 5];
export function SearchableList() {
  const $searchableList = document.querySelector('.searchableList');
  this.render = async () => {
    $searchableList.innerHTML = `
      <div class="file-list-container"></div>
    `;
    const $fileListContainer = document.querySelector('.file-list-container');
    await fillList();
    async function fillList() {
      const fileList = {};
      for (const level of POSSIBLE_LEVELS) {
        fileList[level] = await getFileList(level);
      }
      $fileListContainer.innerHTML = `
          ${POSSIBLE_LEVELS.map(
            level => `
          <ul class= "file-list ${`level-${level}`}">
            [level ${level}]
            ${fileList[level]
              .map(
                file =>
                  `<li class="file-list-item ${`${file.name}`}">${file.name
                    .slice(0, file.name.length - 3)
                    .replaceAll('-', ' ')}</li>`,
              )
              .join('')}
          </ul>`,
          ).join('')}
        `;
    }

    $fileListContainer.addEventListener('click', e => {
      if (e.target.tagName !== 'LI') return;
      const level = e.target.parentNode.classList[1].slice(-1);
      const fileName = e.target.classList[1];
      const $searchResult = new Index({
        level,
        fileName,
      });
      $searchResult.render();
    });
  };
}
