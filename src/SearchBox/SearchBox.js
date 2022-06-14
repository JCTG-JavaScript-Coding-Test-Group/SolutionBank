import SearchInput from './components/SearchInput';
import SearchableList from './components/SearchableList';
import SearchPhrases from './components/SearchPhrases';

export default function SearchBox() {
  return (
    <div className="searchBox">
      <SearchInput />
      <SearchableList />
      <SearchPhrases />
    </div>
  );
}
