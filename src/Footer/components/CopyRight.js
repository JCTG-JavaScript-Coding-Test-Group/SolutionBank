export default function CopyRight({ repoLink }) {
  return (
    <>
      <div>
        해당 페이지의 해답을 자신의 저작물에 추가할 수 있지만 반드시 본{' '}
        <a href={repoLink}>Repository</a>의 주소를 명시하여야합니다.
      </div>
      <div>모든 문제의 저작권은 프로그래머스에 있습니다.</div>
    </>
  );
}
