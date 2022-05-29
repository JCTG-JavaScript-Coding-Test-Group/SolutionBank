export function splitCodeToSolutions(code) {
  if (code === undefined) return [];
  const splitter = /\/\/[ ]*정답/;
  const solutions = code.split(splitter);
  return solutions.slice(1);
}
