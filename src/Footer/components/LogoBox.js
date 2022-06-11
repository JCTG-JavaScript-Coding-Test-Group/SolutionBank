import gitHubLogoPath from '../../images/github.png';
import programmersLogoPath from '../../images/programmers.png';

export default function LogoBox({ repoLink }) {
  return (
    <div class="logoBox">
      <a href={repoLink} target="_blank">
        <img
          class="footerLogo"
          src={gitHubLogoPath}
          alt="깃허브 로고"
          title="깃허브 레포지토리"
        />
      </a>
      <a href="https://programmers.co.kr/learn/challenges" target="_blank">
        <img
          class="footerLogo"
          src={programmersLogoPath}
          alt="프로그래머스 로고"
          title="프로그래머스"
        />
      </a>
    </div>
  );
}
