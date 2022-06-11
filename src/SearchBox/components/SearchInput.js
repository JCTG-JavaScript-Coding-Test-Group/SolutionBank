import { CreateFuzzyMatcher } from "../utils/koreanFuzzy";

export default function SearchInput() {
  function search(e) {
    const query = e.target.value;
    const regex = CreateFuzzyMatcher(query.toLowerCase());
    const $fileListItem = document.querySelectorAll(".file-list-item");
    for (let i = 0; i < $fileListItem.length; i++) {
      if (regex.test($fileListItem[i].textContent.toLowerCase())) {
        $fileListItem[i].classList.remove("is-hidden");
      } else {
        $fileListItem[i].classList.add("is-hidden");
      }
    }
  }

  return (
    <div className="searchInput">
      <input
        type="search"
        id="searchInput"
        placeholder="문제 이름을 검색하세요."
        onChange={search}
      />
    </div>
  );
}
