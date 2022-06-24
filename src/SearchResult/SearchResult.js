import { formattedFileName } from './utils/format.js';
import { copyText } from './utils/copyText.js';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { solutionState, solutionNoState } from '../atom.js';
import styled from 'styled-components';

const SearchResultDiv = styled.div`
  margin-left: -200px;
  width: 800px;
  display: inline-block;
  position: absolute;
  top: 178px;
  left: 50%;
`;

const SolutionNavigator = styled.div`
  display: flex;
  float: right;
  position: relative;
  top: 55px;
`;

const Button = styled.div`
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 5px;
  font-size: 25px;
  font-weight: 700;
  border: 0;
  ${({ state }) => {
    if (state) {
      return 'opacity:1; cursor:pointer';
    } else {
      return 'opacity:0.4; cursor:not-allowed';
    }
  }};

  color: ${props => props.theme.textBtn};
  &:first-child {
    border-radius: 50px 15px 15px 50px;
    background: ${props => props.theme.bgBtn2};
  }
  &:last-child {
    border-radius: 15px 50px 50px 15px;
    background: ${props => props.theme.bgBtn2};
  }
`;

const FileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => props.theme.bgColor};
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  font-weight: 700;
  position: relative;
  border: 0;
  border-radius: 15px;
  outline: none;
  color: ${props => props.theme.textColor};
`;

const WrapCode = styled.div`
  position: relative;
`;

const Code = styled.div`
  background-color: ${props => props.theme.bgColor};
  padding: 10px;
  margin-top: 70px;
  width: 100%;
  max-height: 800px;
  overflow: auto;
  border: 0;
  border-radius: 15px;
  outline: none;
  color: ${props => props.theme.textColor};
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  white-space: pre-wrap;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.bgColor};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${props => props.theme.bgBtn1};
    box-shadow: inset 2px 2px 5px 0 rgba(#ffffff, 0.4);
  }
`;

const ButtonCopy = styled.div`
  width: 190px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 5px;
  font-size: 25px;
  font-weight: 700;
  border: 0;
  background: ${props => props.theme.bgBtn2};
  color: ${props => props.theme.textBtn};
  position: absolute;
  top: -65px;
  left: -5px;
  border-radius: 15px;
  cursor: pointer;
`;

const IsCopied = styled.div`
  position: absolute;
  top: -60px;
  left: 204px;
  width: 200px;
  line-height: 50px;
  color: ${props => props.theme.textColor};
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  padding: 0 6px;
  border-radius: 15px;
`;

export default function SearchResult() {
  const [{ fileName, solution }] = useRecoilState(solutionState);
  const solutionNo = useRecoilValue(solutionNoState);
  const setSolutionNo = useSetRecoilState(solutionNoState);
  let [copyMessage, changeCopyMessage] = useState();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    setPrev(solutionNo > 0 ? true : false);
    setNext(solutionNo < solution.length - 1 ? true : false);
  });

  function copyCode(e) {
    const src = e.target.previousElementSibling;
    copyText(src);
    changeCopyMessage((copyMessage = ' 📋 클립보드에 복사됨!'));
    setTimeout(() => {
      changeCopyMessage((copyMessage = ''));
    }, 1000);
  }

  function showdifferentSolution(e) {
    if (e.target.innerHTML === '이전 해설' && solutionNo > 0)
      setSolutionNo(no => no - 1);
    if (e.target.innerHTML === '다음 해설' && solutionNo < solution.length - 1)
      setSolutionNo(no => no + 1);
  }

  return (
    <SearchResultDiv>
      <SolutionNavigator>
        <Button state={prev} onClick={showdifferentSolution}>
          이전 해설
        </Button>
        <Button state={next} onClick={showdifferentSolution}>
          다음 해설
        </Button>
      </SolutionNavigator>
      <FileTitle>{formattedFileName(fileName)}</FileTitle>
      <WrapCode>
        <Code>{solution[solutionNo]}</Code>
        <ButtonCopy onClick={copyCode}>코드 복사하기</ButtonCopy>
        <IsCopied>{copyMessage}</IsCopied>
      </WrapCode>
    </SearchResultDiv>
  );
}
