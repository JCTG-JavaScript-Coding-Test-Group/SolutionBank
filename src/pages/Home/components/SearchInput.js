import { CreateFuzzyMatcher } from '../../../SearchBox/utils/koreanFuzzy';
import styled from 'styled-components';
import searchIcon from '../../../images/search.png';
const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem 0.5rem 4rem;
  color: ${props => props.theme.textColorReversed};
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 3rem;
  background: url(${searchIcon}) no-repeat;
  background-position: left 1.5rem center;
  background-size: 1.3rem 1.3rem;
  background-color: ${props => props.theme.inputBgColor};
  &::placeholder {
    font-weight: 600;
    color: ${props => props.theme.inputPlaceholderColor};
  }
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
    <Input
      // type="search"
      id="searchInput"
      placeholder="문제를 검색하세요."
      onChange={search}
    />
  );
}
