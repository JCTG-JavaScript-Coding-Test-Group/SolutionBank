const GET_FILE_CONTENT_BASE_URL = `https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/main/`;
const getFileContent = async (level, fileName) => {
  const url = GET_FILE_CONTENT_BASE_URL + `/level-${level}` + `/${fileName}`;
  const response = await fetch(url);
  const data = await response.text();
  return data;
};
const textProcess = text => {
  const processedText = text.replace(/\n/g, '<br />');
  return processedText;
};
export function SearchResult({ $target, level, fileName }) {
  this.render = async () => {
    const fileContent = await getFileContent(level, fileName);
    const fileContentArr = textProcess(fileContent);
    $target.innerHTML = fileContentArr;
  };
}
