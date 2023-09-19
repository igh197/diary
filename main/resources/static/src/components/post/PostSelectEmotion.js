import styled from 'styled-components';

export default function PostSelectEmotion({ title, message, close, confirm }) {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Content>
        <Top>
          <Title>{title}</Title>
          <CloseBtn onClick={close}>&#x2716;</CloseBtn>
        </Top>
        <Message>{message}</Message>
        <BtnContainer>
          <CancelBtn onClick={close}>cancel</CancelBtn>
          <ConfirmBtn
            onClick={() => {
              confirm && confirm();
              close && close();
            }}
          >
            confirm
          </ConfirmBtn>
        </BtnContainer>
      </Content>
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
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 50%;
  padding: 16px;
  min-width: 200px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3``;
const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;
const Message = styled.p``;
const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
`;
const CancelBtn = styled.div`
  flex: 1;
  height: 24px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  cursor: pointer;
`;
const ConfirmBtn = styled.div`
  flex: 1;
  height: 24px;
  text-align: center;
  color: white;
  background-color: royalblue;
  border-radius: 4px;
  cursor: pointer;
`;
