import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import SearchBox from '../../SearchBox/SearchBox';
import SearchableList from './components/SearchableList';
import SearchResult from './components/SearchResult';
const Home = () => {
  return (
    <Wrapper>
      <Title>프로그래머스 해설 은행</Title>
      <SearchArea>
        <SearchInput />
        <SearchableList />
      </SearchArea>
      <SearchResult />
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 500rem;
  margin: auto;
`;
const Title = styled.h1`
  display: block;
  padding-bottom: 3rem;
  padding-top: 7rem;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;
const SearchArea = styled.section`
  width: 25rem;
`;
