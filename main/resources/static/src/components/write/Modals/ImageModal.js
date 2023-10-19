import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.25;
`;

const AskModalBlock = styled.div`
  width: 320px;
  height: 200px;
  background: ${(props) => props.theme.content};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  z-index: 999;
  transform: translate(-150%, 70%);

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
`;

export function AskModal({
  visible,
  title,
  description,
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
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </AskModalBlock>
    </>
  );
}

export default function ImageModal({ onPublish }) {
  const [open, setOpen] = useState(true);

  const onConfirm = () => {
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <AskModal
      visible={open}
      title={'이미지'}
      description={'Dinary가 감정과 테마를 분석했어요!'}
      confirmText="확인"
      cancelText="취소"
      onConfirm={onPublish}
      onCancel={onCancel}
    />
  );
}
