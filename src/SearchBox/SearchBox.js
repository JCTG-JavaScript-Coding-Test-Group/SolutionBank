import SearchInput from './components/SearchInput';
import SearchableList from './components/SearchableList';
import SearchPhrases from './components/SearchPhrases';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: -600px;
  width: 320px;
  display: inline-block;
  position: absolute;
  left: 50%;
`;

export default function SearchBox() {
  return (
    // <div className="searchBox">
    <Wrapper>
      <SearchInput />
      <SearchableList />
      <SearchPhrases />
      {/* </div> */}
    </Wrapper>
  );
}
