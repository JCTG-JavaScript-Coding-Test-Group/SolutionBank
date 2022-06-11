export default function Issues({ repoLink }) {
  return (
    <div class="Issues">
      <div class="IssuesTitle footerTitle" title="이슈제보">
        Issues
      </div>
      <a href={repoLink + '/issues'}>
        https://github.com/codeisneverodd/programmers-coding-test/issues
      </a>
    </div>
  );
}
