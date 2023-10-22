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
  width: 500px;
  height: 500px;
  background: ${(props) => props.theme.content};
  padding: 5px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(-80%, 70%);

  h3 {
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

  .header {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    width: 80%;
    height: 40%;
    margin: 0 auto;
    padding: 10px;
    background: ${(props) => props.theme.background};
    border-radius: 16px;
  }

  .emoji {
  }

  .theme {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
      &:hover {
        cursor: pointer;
      }

      &:focus {
        border: 5px solid blue;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
`;

export function AskModal({
  visible,
  title,
  confirmText = '확인',
  onConfirm,
  onCancel,
  theme,
}) {
  if (!visible) return null;
  return (
    <>
      <Fullscreen onClick={onCancel} />
      <AskModalBlock>
        <div className="header">
          <h3>{title}</h3>
          <Button onClick={onCancel}>x</Button>
        </div>
        <div className="content">
          <span>감정 구슬</span>
        </div>
        <div className="content">
          <span>오늘의 테마</span>
          <div className="theme">
            {theme.map((theme) => {
              return (
                <div
                  key={theme}
                  style={{
                    backgroundImage: 'url(/images/User/Profile.svg)',
                    backgroundSize: 'cover',
                    width: 50,
                    height: 50,
                  }}
                  value={theme}
                />
              );
            })}
          </div>
        </div>
        <div className="buttons">
          <StyledButton onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </AskModalBlock>
    </>
  );
}

export default function ImageModal({ onPublish }) {
  const [open, setOpen] = useState(true);
  const theme = ['Love', 'PokerFace', 'Fear', 'Sad'];

  const onConfirm = () => {
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <AskModal
      visible={open}
      title={'Dinary가 감정과 테마를 분석했어요!'}
      confirmText="확인"
      onConfirm={onPublish}
      onCancel={onCancel}
      theme={theme}
    />
  );
}
