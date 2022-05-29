const GET_FILE_CONTENT_BASE_URL = `https://raw.githubusercontent.com/codeisneverodd/programmers-coding-test/main/`;
export const getFileContent = async (level, fileName) => {
  const url = GET_FILE_CONTENT_BASE_URL + `/level-${level}` + `/${fileName}`;
  const response = await fetch(url);
  return await response.text();
};
