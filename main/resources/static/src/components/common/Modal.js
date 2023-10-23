import styled from 'styled-components';

const ModalBlock = styled.div``;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: none;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

export default function Modal({ children, close }) {
  return (
    <ModalBlock>
      <Overlay onClick={close}></Overlay>
      {children}
    </ModalBlock>
  );
}
