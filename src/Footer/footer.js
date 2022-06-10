import gitHubLogoPath from "../images/github.png";
import programmersLogoPath from "../images/programmers.png";

export default function Footer() {
  return (
    <div id="footerBox">
      <div className="footer">
        <div className="repo">
          <div className="repoTitle footerTitle" title="깃허브 레포지토리">
            Repository
          </div>
          <a href="https://github.com/codeisneverodd/programmers-coding-test">
            https://github.com/codeisneverodd/programmers-coding-test
          </a>
        </div>
        <div className="Issues">
          <div className="IssuesTitle footerTitle" title="이슈제보">
            Issues
          </div>
          <a href="https://github.com/codeisneverodd/programmers-coding-test/issues">
            https://github.com/codeisneverodd/programmers-coding-test/issues
          </a>
        </div>
        <div className="contributor">
          <div className="contributorTitle footerTitle" title="기여자">
            Contributor
          </div>
          <a href="https://github.com/codeisneverodd">김경현</a>
          <a href="https://github.com/chaerin-dev">김채린</a>
          <a href="https://github.com/yongchanson">손용찬</a>
        </div>
        <div>
          해당 페이지의 해답을 자신의 저작물에 추가할 수 있지만 반드시 본{" "}
          <a href="https://github.com/codeisneverodd/programmers-coding-test">Repository</a>의
          주소를 명시하여야합니다.
        </div>
        <div>모든 문제의 저작권은 프로그래머스에 있습니다.</div>
      </div>
      <div className="copyRight">
        <a
          href="https://github.com/codeisneverodd/programmers-coding-test"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footerLogo"
            src={gitHubLogoPath}
            alt="깃허브 로고"
            title="깃허브 레포지토리"
          />
        </a>
        <a href="https://programmers.co.kr/learn/challenges" target="_blank" rel="noreferrer">
          <img
            className="footerLogo"
            src={programmersLogoPath}
            alt="프로그래머스 로고"
            title="프로그래머스"
          />
        </a>
      </div>
    </div>
  );
}
