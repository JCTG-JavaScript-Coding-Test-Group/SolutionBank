import { getFileContent, getFileList } from '../../../SearchBox/utils/api.js';
import { splitCodeToSolutions } from '../../../SearchBox/utils/format.js';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { solutionState, loadingState, solutionNoState } from '../../../atom.js';
import styled from 'styled-components';

const FileListContainer = styled.div`
  max-height: 50rem;
  overflow: auto;
  margin: 12px 0;
  border-radius: 15px;
  .file-list {
    background-color: ${props => props.theme.darkGray};
    position: relative;
    top: 0;
    padding: 1rem;
    outline: none;
    .levelTitle {
      color: ${props => props.theme.borderLevelTitle};
      font-size: 1.8rem;
      font-weight: 700;
      cursor: default;
    }
    .levelTit .levelTitle:hover {
      background-color: transparent;
    }
    .file-list-item {
      cursor: pointer;
    }
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3rem;
      border-radius: 1rem;
      padding: 1rem;
      font-size: 1.3rem;
      list-style: none;
    }
    li:hover {
      background-color: ${props => props.theme.blue};
    }
  }
  .file-list::after {
    content: '';
    width: 10rem;
    height: 5rem;
    background-color: red;
  }
  .is-hidden {
    display: none !important;
  }
`;

export default function SearchableList() {
  const [fileListHTML, setFileListHTML] = useState('');
  const setSolutionInfo = useSetRecoilState(solutionState);
  const setLoadingState = useSetRecoilState(loadingState);
  const setSolutionNo = useSetRecoilState(solutionNoState);
  (async function fillList() {
    const POSSIBLE_LEVELS = [1, 2, 3, 4, 5];
    const fileList = {};
    for (const level of POSSIBLE_LEVELS) {
      fileList[level] = await getFileList(level);
      delete fileList[level][0];
    }
    setFileListHTML(
      POSSIBLE_LEVELS.map(
        level => `
      <ul class= "file-list ${`level-${level}`}">
      <li class="levelTitle">Level ${level}</li>

        ${fileList[level]
          .map(
            file =>
              `<li class="file-list-item ${`${file.name}`}">${file.name
                .slice(0, file.name.length - 3)
                .replaceAll('-', ' ')}</li>`,
          )
          .join('')}
      </ul>`,
      ).join(''),
    );
    setLoadingState(false);
  })();

  async function showResult(e) {
    setSolutionNo(no => (no = 0));
    if (e.target.tagName !== 'LI') return;
    const level = e.target.parentNode.classList[1].slice(-1);
    const fileName = e.target.classList[1];
    const solution = splitCodeToSolutions(
      await getFileContent(level, fileName),
    );
    setSolutionInfo({
      level: level,
      fileName: fileName,
      solution: solution,
    });
  }

  return (
    <FileListContainer
      onClick={showResult}
      solutionNoState={0}
      dangerouslySetInnerHTML={{ __html: fileListHTML }}
    />
  );
}
