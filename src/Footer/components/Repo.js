export default function Repo({ repoLink }) {
  return (
    <div class="repo">
      <div class="repoTitle footerTitle" title="깃허브 레포지토리">
        Repository
      </div>
      <a href={repoLink}>
        https://github.com/codeisneverodd/programmers-coding-test
      </a>
    </div>
  );
}
