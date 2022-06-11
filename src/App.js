import SearchBox from './SearchBox/SearchBox';
import SearchResult from './SearchResult/SearchResult';
import Footer from './Footer/footer';
import Loading from './Loading';

export default function App() {
  return (
    <div className="App">
      <h1>🔍 프로그래머스 해설 은행</h1>
      <Loading />
      <SearchBox />
      <SearchResult />
      <Footer />
    </div>
  );
}
