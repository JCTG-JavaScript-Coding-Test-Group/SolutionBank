import { formattedFileName } from '../../../SearchResult/utils/format.js';
import { copyText } from '../../../SearchResult/utils/copyText.js';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { solutionState, solutionNoState } from '../../../atom.js';
import styled from 'styled-components';
import copyBlueImg from '../../../images/copy-blue.png';
import copyWhiteImg from '../../../images/copy-white.png';
import arrowWhiteImg from '../../../images/arrow-white.png';
import arrowBlueImg from '../../../images/arrow-blue.png';

export default function SearchResult() {
  const { fileName, solution } = useRecoilValue(solutionState);
  const [solutionNo, setSolutionNo] = useRecoilState(solutionNoState);
  const [copyMessage, changeCopyMessage] = useState('');
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const codeRef = useRef();
  useEffect(() => {
    setPrev(solutionNo > 0);
    setNext(solutionNo < solution.length - 1);
  }, [solutionNo]);

  function copyCode() {
    const src = codeRef.current;
    copyText(src);
    changeCopyMessage(' 📋 클립보드에 복사됨!');
    setTimeout(() => {
      changeCopyMessage('');
    }, 1000);
  }

  function showPrevSolution(e) {
    if (prev) setSolutionNo(solutionNo - 1);
  }
  function showNextSolution() {
    if (next) setSolutionNo(solutionNo + 1);
  }

  return (
    <Wrapper>
      <FileTitle>{formattedFileName(fileName)}</FileTitle>
      <SolutionNavigator>
        <CopyButton
          available={true}
          onClick={copyCode}
          aria-label={'코드 복사하기 버튼'}
        />
        <IsCopied role={'status'}>{copyMessage}</IsCopied>
        <PrevButton
          available={prev}
          onClick={showPrevSolution}
          aria-label={'이전 해설 보기 버튼'}
        />
        <NextButton
          available={next}
          onClick={showNextSolution}
          aria-label={'다음 해설 보기 버튼'}
        />
      </SolutionNavigator>

      <Code ref={codeRef}>{solution[solutionNo]}</Code>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: absolute;
  top: 12.5rem;
  right: 0;
  width: 50rem;
  border-radius: 2rem;
  background: ${props => props.theme.darkGray};
  padding: 2rem 0;
`;
const FileTitle = styled.h2`
  display: inline-block;
  margin: 0 3rem;
  padding-bottom: 1.5rem;
  font-size: 1.7rem;
  font-weight: 700;
  border-bottom: 3px solid white;
`;
const SolutionNavigator = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 2rem;
  background-color: ${props => props.theme.codeBg};
`;
const Button = styled.div`
  transform: translateX(0);
  width: 4rem;
  height: 4rem;
  border: 0;
  font-size: 1.1rem;
  &:hover {
    &::after {
      background-color: ${props => props.available && props.theme.blue};
    }
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => (props.available ? 'white' : 'darkgray')};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 2.5rem;
    border-radius: 0.5rem;
  }
`;
const CopyButton = styled(Button)`
  &:hover {
    &::after {
      background-image: ${props => props.available && `url(${copyWhiteImg})`};
    }
  }
  &::after {
    background-image: url(${copyBlueImg});
  }
`;
const PrevButton = styled(Button)`
  &:hover {
    &::after {
      background-image: ${props => props.available && `url(${arrowWhiteImg})`};
    }
  }
  &::after {
    background-image: url(${arrowBlueImg});
    background-size: 1.2rem;
  }
`;
const NextButton = styled(PrevButton)`
  margin-left: 1rem;
  &:hover {
    &::after {
      transform: rotate(180deg);
    }
  }
  &::after {
    transform: rotate(180deg);
  }
`;

const Code = styled.div`
  background-color: ${props => props.theme.codeBg};
  padding: 3rem 4rem;
  font-size: 1.2rem;
  height: 39.6rem;
  white-space: pre-wrap;
  line-height: 1.4;
  overflow: scroll;
`;

const IsCopied = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  width: 20rem;
  margin-left: 1rem;
  margin-right: auto;
  color: white;
  font-weight: 600;
`;
