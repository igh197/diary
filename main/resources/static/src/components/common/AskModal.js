import styled from 'styled-components';
import Button from './Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  opacity: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalBlock = styled.div`
  width: 320px;
  background: ${(props) => props.theme.background};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

export default function AskModal({
  visible,
  title,
  desxription,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) {
  if (!visible) return null;
  return (
    <>
      <Fullscreen onClick={onCancel} />
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{desxription}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </AskModalBlock>
    </>
  );
}
