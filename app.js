import { SearchableList } from './components/Search/SearchableList.js';
import { SearchInput } from './components/Search/SearchInput.js';
import { SearchResult } from './components/Search/SearchResult.js';

//TODO: 문자열 슬라이싱 관련 함수, 별도의 폴더로 분리
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const ch2pattern = ch => {
  const offset = 44032;
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) {
      return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      ㄱ: '가'.charCodeAt(0),
      ㄲ: '까'.charCodeAt(0),
      ㄴ: '나'.charCodeAt(0),
      ㄷ: '다'.charCodeAt(0),
      ㄸ: '따'.charCodeAt(0),
      ㄹ: '라'.charCodeAt(0),
      ㅁ: '마'.charCodeAt(0),
      ㅂ: '바'.charCodeAt(0),
      ㅃ: '빠'.charCodeAt(0),
      ㅅ: '사'.charCodeAt(0),
    };
    const begin =
      con2syl[ch] || (ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ'];
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  return escapeRegExp(ch);
};

const createFuzzyMatcher = input => {
  const pattern = input.split('').map(ch2pattern).join('.*?');
  return new RegExp(pattern);
};

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
    const regex = createFuzzyMatcher(query.toLowerCase());
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
