import { FooterDiv, FooterTitle, FooterInAnchor } from '../footer';

export default function Contributor() {
  return (
    <FooterDiv className="contributor">
      <FooterTitle className="contributorTitle footerTitle" title="기여자">
        Contributor
      </FooterTitle>
      <FooterInAnchor href="https://github.com/codeisneverodd">
        codeisneverodd
      </FooterInAnchor>
      <FooterInAnchor href="https://github.com/chaerin-dev">
        chaerin.dev
      </FooterInAnchor>
      <FooterInAnchor href="https://github.com/yongchanson">
        yongchanson
      </FooterInAnchor>
    </FooterDiv>
  );
}
