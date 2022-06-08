import SearchBox from './Section/SearchBox/components/index.js';
import FooterBox from './Section/Footer/footer.js';

const $app = document.querySelector('.app');
const $loading = document.querySelector('.loading');

const init = async () => {
  $app.innerHTML = `
    <div class="searchBox"></div>
    <div class="searchResult"></div>
    <footer id="footerBox"></footer>
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
  FooterBox();
  $loading.style.display = 'none';
};

loading();