const GET_FILE_LIST_BASE_URL = `https://api.github.com/repos/codeisneverodd/programmers-coding-test/contents/`;
const GET_FILE_CONTENT_BASE_URL = `https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/main/`;
const TOTAL_LEVEL_CNT = 5;

const getFileList = async level => {
  const url = GET_FILE_LIST_BASE_URL + `level-${level}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const getFileContent = async (level, fileName) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};

const renderSearchBox = $container => {
  const $searchBox = document.createElement('input');
  $searchBox.setAttribute('type', 'search');
  $searchBox.setAttribute('id', 'search-box');
  $searchBox.setAttribute('placeholder', '문제 이름을 검색하세요.');
  $container.appendChild($searchBox);
};

const renderFileList = async $container => {
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
  $container.appendChild($fileListContainer);
};

const textProcess = text => {
  const processedText = text.replace(/\n/g, '<br />');
  return processedText;
};

const renderFile = async (level, fileName) => {
  const $container = document.querySelector('code');
  const fileContent = await getFileContent(level, fileName);
  const fileContentArr = textProcess(fileContent);
  $container.innerHTML = fileContentArr;
};

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

const init = async () => {
  const $searchSection = document.querySelector('.search-section');
  renderSearchBox($searchSection);
  await renderFileList($searchSection);

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
    renderFile(level, fileName);
  });
};

init();
