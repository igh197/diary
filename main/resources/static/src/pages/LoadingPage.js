import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingPage() {
  return (
    <Wrapper>
      <h1>로딩 중입니다. 잠시만 기다려주세요!</h1>
    </Wrapper>
  );
}
