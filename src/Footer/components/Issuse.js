import { FooterDiv, FooterTitle, FooterInAnchor } from '../footer';
import { repoLink } from '../footer';

export default function Issues() {
  return (
    <FooterDiv className="Issues">
      <FooterTitle className="IssuesTitle footerTitle" title="이슈제보">
        Issues
      </FooterTitle>
      <FooterInAnchor href={repoLink + '/issues'}>
        https://github.com/codeisneverodd/programmers-coding-test/issues
      </FooterInAnchor>
    </FooterDiv>
  );
}
