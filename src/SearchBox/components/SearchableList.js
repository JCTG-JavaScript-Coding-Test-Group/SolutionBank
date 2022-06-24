import { getFileContent, getFileList } from '../utils/api.js';
import { splitCodeToSolutions } from '../utils/format.js';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { solutionState, loadingState, solutionNoState } from '../../index.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  display: inline;
`;

const FileListContainer = styled.div`
  max-height: 858px;
  overflow: auto;
  margin: 12px 0;
  border-radius: 15px;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.bgColor};
    border-radius: 0 15px 15px 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${props => props.theme.bgBtn1};
    box-shadow: inset 2px 2px 5px 0 rgba(#ffffff, 0.4);
  }
  .file-list {
    background-color: ${props => props.theme.bgColor};
    position: relative;
    top: 0;
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.bgBtn2};
    outline: none;
    color: $text-color;
    font-size: 18px;
    font-weight: 700;
    .levelTitle {
      color: ${props => props.theme.borderLevelTitle};
      font-size: 22px;
      font-weight: 700;
      cursor: default;
    }
    .file-list-item {
      cursor: pointer;
    }
    li {
      padding: 5px;
      list-style: none;
    }
  }
  .file-list:last-child {
    border: none;
  }
  .is-hidden {
    display: none !important;
  }
`;

// const FileList = styled.div`
//   background-color: ${props => props.theme.bgColor};
//   position: relative;
//   top: 0;
//   padding: 10px;
//   margin: 0;
//   border-bottom: 1px solid ${props => props.theme.bgBtn2};
//   outline: none;
//   color: $text-color;
//   font-size: 18px;
//   font-weight: 700;
//   &:last-child {
//     border: none;
//   }
// `;

export default function SearchableList() {
  let [fileListHTML, changeState] = useState('');
  const setSolutionInfo = useSetRecoilState(solutionState);
  const setLoadingState = useSetRecoilState(loadingState);
  const setSolutionNo = useSetRecoilState(solutionNoState);
  // TODO: ``부분 수정 필요..
  (async function fillList() {
    const POSSIBLE_LEVELS = [1, 2, 3, 4, 5];
    const fileList = {};
    for (const level of POSSIBLE_LEVELS) {
      fileList[level] = await getFileList(level);
      delete fileList[level][0];
    }
    changeState(
      (fileListHTML = POSSIBLE_LEVELS.map(
        level => `
      <ul class= "file-list ${`level-${level}`}">
      <div class="levelTitle">[level ${level}]</div>
        ${fileList[level]
          .map(
            file =>
              `<li class="file-list-item ${`${file.name}`}">${file.name
                .slice(0, file.name.length - 3)
                .replaceAll('-', ' ')}</li>`,
          )
          .join('')}
      </ul>`,
      ).join('')),
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
    <Wrapper>
      <FileListContainer
        onClick={showResult}
        solutionNoState={0}
        dangerouslySetInnerHTML={{ __html: fileListHTML }}
      ></FileListContainer>
    </Wrapper>
  );
}
