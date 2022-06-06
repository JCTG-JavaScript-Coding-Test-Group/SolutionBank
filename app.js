import SearchBox from './Section/SearchBox/components/index.js';
import FooterBox from './Section/Footer/footer.js';

const $app = document.querySelector('.app');

const init = async () => {
  $app.innerHTML = `
    <div class="searchBox"></div>
    <div class="searchResult"></div>
    <footer class="footerBox"></footer>
  `;
  const $searchBox = new SearchBox();
  $searchBox.render();

};

init();
FooterBox();