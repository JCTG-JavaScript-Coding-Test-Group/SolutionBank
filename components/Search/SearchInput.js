export function SearchInput({ $target }) {
  this.render = () => {
    const $searchBox = document.createElement('input');
    $searchBox.setAttribute('type', 'search');
    $searchBox.setAttribute('id', 'search-box');
    $searchBox.setAttribute('placeholder', '문제 이름을 검색하세요.');
    $target.appendChild($searchBox);
  };
}
