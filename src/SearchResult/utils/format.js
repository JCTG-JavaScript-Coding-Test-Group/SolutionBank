export function splitCodeToSolutions(code) {
  if (code === undefined) return [];
  const splitter = /\/\/[ ]*정답/;
  const solutions = code.split(splitter);
  const formattedSolutions = solutions.map(solution => '//' + solution);
  return formattedSolutions.slice(1);
}

export function formattedFileName(fileName) {
  return fileName.replace(/\-/g, ' ').replace('.js', '');
}
