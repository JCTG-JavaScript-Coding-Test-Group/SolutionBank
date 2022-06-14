import { FooterDiv, FooterTitle, FooterInAnchor } from '../footer';

export default function Repo({ repoLink }) {
  return (
    <FooterDiv className="repo">
      <FooterTitle className="repoTitle footerTitle" title="깃허브 레포지토리">
        Repository
      </FooterTitle>
      <FooterInAnchor href={repoLink}>
        https://github.com/codeisneverodd/programmers-coding-test
      </FooterInAnchor>
    </FooterDiv>
  );
}
