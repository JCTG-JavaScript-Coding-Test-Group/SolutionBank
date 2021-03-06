import spinnerPath from './images/spinner.svg';
import { useRecoilValue } from 'recoil';
import { loadingState } from './atom.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: -50px;
  flex-direction: column;
  margin: 50px auto;
  align-items: center;
  color: #0aa1dd;
  font-size: 18px;
  min-width: 1500px;
  width: 100%;
  min-height: 2000px;
  height: 100%;
  z-index: 5;
  background-color: ${props => props.theme.background};
`;

const Content = styled.div`
  position: relative;
  top: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default function Loading() {
  const loading = useRecoilValue(loadingState);
  return loading ? (
    <Wrapper>
      <Content>
        <img src={spinnerPath} alt="Loading..." />
        Loading…
      </Content>
    </Wrapper>
  ) : null;
}
