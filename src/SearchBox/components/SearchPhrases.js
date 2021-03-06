import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${props => props.theme.phrasesColor};
  margin: 20px 0;
`;

const Anchor = styled.div`
  text-decoration-line: none;
  color: inherit;
`;

export default function SearchPhrases() {
  return (
    <Wrapper>
      <Anchor>
        찾는 문제가 없으신가요?
        <br />
        Repository에 풀이를 제보해주세요
      </Anchor>
    </Wrapper>
  );
}
