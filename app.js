import SearchBox from './Section/SearchBox/components/index.js';

const $app = document.querySelector('.app');

const init = async () => {
  $app.innerHTML = `
    <div class="searchBox"></div>
    <div class="searchResult"></div>
  `;
  const $searchBox = new SearchBox();
  $searchBox.render();
};

init();
