import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export default function UserImageModal({ close }) {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Content></Content>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.background};
  opacity: 0.7;
`;
const Content = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  border-radius: 400px;
  min-width: 200px;
  max-width: 400px;
  background-color: ${palette.gray[0]};
  border: 15px solid ${(props) => props.theme.userBorder};
  overflow: hidden;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
