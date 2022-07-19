import SearchInput from '../pages/Home/components/SearchInput';
import SearchableList from '../pages/Home/components/SearchableList';
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
    <Wrapper>
      <SearchInput />
      <SearchableList />
      <SearchPhrases />
    </Wrapper>
  );
}
