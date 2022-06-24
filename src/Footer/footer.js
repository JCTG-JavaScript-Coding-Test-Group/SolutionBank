import Repo from './components/Repo';
import Issues from './components/Issuse';
import Contributor from './components/Contributor';
import CopyRight from './components/CopyRight';
import LogoBox from './components/LogoBox';
import styled from 'styled-components';

const FooterBox = styled.div`
  position: absolute;
  top: 1200px;
  min-width: 1200px;
  width: 100%;
  background: ${props => props.theme.bgFooter};
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
  overflow: hidden;
`;

export const FooterTitle = styled.div`
  color: ${props => props.theme.bgBtn2};
  cursor: default;
  margin-right: 10px;
`;

export const FooterDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
export const FooterInAnchor = styled.a`
  padding: 0 5px;
  text-decoration-line: none;
  color: inherit;
`;

export const repoLink =
  'https://github.com/codeisneverodd/programmers-coding-test';

export default function Footer() {
  return (
    <FooterBox>
      <div>
        <Repo />
        <Issues />
        <Contributor />
        <CopyRight />
      </div>
      <LogoBox />
    </FooterBox>
  );
}
