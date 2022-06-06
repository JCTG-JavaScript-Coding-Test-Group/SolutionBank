import SearchBox from './Section/SearchBox/components/index.js';

const $app = document.querySelector('.app');
const $loading = document.querySelector('.loading');

const init = async () => {
  $app.innerHTML = `
    <div class="searchBox"></div>
    <div class="searchResult"></div>
  `;
  const $searchBox = new SearchBox();
  await $searchBox.render();
};

const loading = async () => {
  $loading.innerHTML = `
  <img src="images/spinner.svg">

  Loading…
  `;
  await init();
  $loading.style.display = 'none';
};

loading();
