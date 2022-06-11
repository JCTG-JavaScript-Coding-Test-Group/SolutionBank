import Repo from './components/Repo';
import Issues from './components/Issuse';
import Contributor from './components/Contributor';
import CopyRight from './components/CopyRight';
import LogoBox from './components/LogoBox';

export const repoLink =
  'https://github.com/codeisneverodd/programmers-coding-test';

export default function Footer() {
  return (
    <FooterBox id="footerBox">
      <div class="footer">
        <Repo repoLink={repoLink} />
        <Issues repoLink={repoLink} />
        <Contributor />
        <CopyRight repoLink={repoLink} />
      </div>
      <LogoBox repoLink={repoLink} />
    </FooterBox>
  );
}
