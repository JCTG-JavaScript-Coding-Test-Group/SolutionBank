import { CreateFuzzyMatcher } from '../utils/koreanFuzzy';
import styled from 'styled-components';

const SearchInputDiv = styled.div`
  width: 320px;
  height: 50px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  font-size: 18px;
  font-weight: 700;
  border: 3px solid ${props => props.theme.borderLevelTitle};
  border-radius: 15px;
  outline: none;
  padding: 0 10px;
`;

export default function SearchInput() {
  function search(e) {
    const query = e.target.value;
    const regex = CreateFuzzyMatcher(query.toLowerCase());
    const $fileListItem = document.querySelectorAll('.file-list-item');
    for (let i = 0; i < $fileListItem.length; i++) {
      if (regex.test($fileListItem[i].textContent.toLowerCase())) {
        $fileListItem[i].classList.remove('is-hidden');
      } else {
        $fileListItem[i].classList.add('is-hidden');
      }
    }
  }

  return (
    <div className="searchInput">
      <SearchInputDiv
        type="search"
        id="searchInput"
        placeholder="문제 이름을 검색하세요."
        onChange={search}
      />
    </div>
  );
}
