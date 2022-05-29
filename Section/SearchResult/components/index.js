import { getFileContent } from '../utils/api.js';

export function Index({ $target, level, fileName }) {
  this.render = async () => {
    $target.innerHTML = await getFileContent(level, fileName);
  };
}
