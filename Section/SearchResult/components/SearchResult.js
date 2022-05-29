import { getFileContent } from '../utils/api.js';

export function SearchResult({ $target, level, fileName }) {
  this.render = async () => {
    $target.innerHTML = await getFileContent(level, fileName);
  };
}
