import { atom } from 'recoil';

export const solutionState = atom({
  key: 'solutionState',
  default: {
    level: 1,
    fileName: '',
    solution: [],
  },
});

export const solutionNoState = atom({
  key: 'solutionNoState',
  default: 0,
});

export const loadingState = atom({
  key: 'loadingState',
  default: true,
});
