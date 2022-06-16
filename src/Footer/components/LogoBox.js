import gitHubLogoPath from '../../images/github.png';
import programmersLogoPath from '../../images/programmers.png';
import styled from 'styled-components';
import { repoLink } from '../footer';

const LogoBoxDiv = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  a {
    font-size: 0;
  }
  .footerLogo {
    height: 50px;
    max-width: 50px;
    margin: 0 10px 8px 4px;
    overflow: hidden;
    font-size: 14px;
    cursor: pointer;
  }
`;

const FooterLogo = styled.img`
  height: 50px;
  max-width: 50px;
  margin: 0 10px 8px 4px;
  overflow: hidden;
  font-size: 14px;
  cursor: pointer;
`;

export default function LogoBox() {
  return (
    <LogoBoxDiv className="logoBox">
      <a href={repoLink} target="_blank">
        <FooterLogo
          className="footerLogo"
          src={gitHubLogoPath}
          alt="깃허브 로고"
          title="깃허브 레포지토리"
        />
      </a>
      <a href="https://programmers.co.kr/learn/challenges" target="_blank">
        <FooterLogo
          className="footerLogo"
          src={programmersLogoPath}
          alt="프로그래머스 로고"
          title="프로그래머스"
        />
      </a>
    </LogoBoxDiv>
  );
}
