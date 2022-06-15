import SearchBox from './SearchBox/SearchBox';
import SearchResult from './SearchResult/SearchResult';
import Footer from './Footer/footer';
import Loading from './Loading';

import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';

// const AppDiv = styled.div`
//   display: flex;
//   width: 1170px;
//   margin: 0 auto;
//   justify-content: center;
// `;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>🔍 프로그래머스 해설 은행</h1>
        <Loading />
        <SearchBox />
        <SearchResult />
        <Footer />
      </ThemeProvider>
    </>
  );
}
