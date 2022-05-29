export function splitCodeToSolutions(code) {
  if (code === undefined) return [];
  const splitter = /\/\/[ ]*정답/;
  const solutions = code.split(splitter);
  const formattedSolutions = solutions.map(solution => '//' + solution);
  return formattedSolutions.slice(1);
}
