import SearchBox from './SearchBox/SearchBox';
import SearchResult from './pages/Home/components/SearchResult';
import Footer from './Footer/footer';
import Loading from './Loading';

import { ThemeProvider } from 'styled-components';
import { programmersTheme, theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { Reset } from 'styled-reset';
import Home from './pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={programmersTheme}>
      <Reset />
      <GlobalStyle />
      <Home />
      {/*<h1>🔍 프로그래머스 해설 은행</h1>*/}
      {/*<Loading />*/}
      {/*<SearchBox />*/}
      {/*<SearchResult />*/}
      {/*<Footer />*/}
    </ThemeProvider>
  );
}
