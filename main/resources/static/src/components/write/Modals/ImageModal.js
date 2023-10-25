import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import Emoji from '../../common/Emoji';

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
  width: 550px;
  height: 594.97px;
  background: ${(props) => props.theme.content};
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(73%, 40%);

  position: fixed;

  h4 {
    color: #666666;
    margin: 5px 5px 0 5px;
  }

  p {
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .header {
    width: 100%;
    padding: 0 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    width: 100%;
    height: 40%;
    padding: 10px 20px;
    background: ${(props) => props.theme.background};
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);

    // width: 715px;
    // height: 292px;
  }

  .emoji {
    padding: none;
    size: 90%;
  }

  .theme {
    padding: 5px 0 0 0;

    display: block;

    overflow-x: auto;
    white-space: nowrap;
    scroll-behavior: smooth;

    button {
      width: 80px;
      height: 80px;
      margin: 7px 3px;
      border: 5px solid ${(props) => props.theme.background};

      display: inline-block;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        border: 5px solid ${(props) => props.theme.text};
      }
    }
  }
`;

const XButton = styled(Button)`
  width: 15px;
  height: 15px;
  background-image: url(/images/Write/XButton.svg);
  background-size: cover;
`;

export function AskModal({
  tempEmoji,
  visible,
  title,
  confirmText = '확인',
  onConfirm,
  onCancel,
  onClick,
  theme,
}) {
  if (!visible) return null;
  return (
    <>
      <Fullscreen onClick={onCancel} />
      <AskModalBlock>
        <div className="header">
          <h4>{title}</h4>
          <XButton onClick={onCancel} />
        </div>
        <div className="content emoji">
          <h4>감정 구슬</h4>
          <Emoji tempEmoji={tempEmoji} onClick={onClick} />
        </div>
        <div className="content">
          <h4>오늘의 테마</h4>
          <div className="theme">
            {theme.map((theme) => {
              return (
                <button
                  key={theme}
                  style={{
                    backgroundImage: 'url(/images/User/Profile.svg)',
                    backgroundSize: 'cover',
                    width: '125px',
                    height: '125px',
                  }}
                  value={theme}
                />
              );
            })}
          </div>
        </div>
        <div className="buttons">
          <Button $done="true" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </AskModalBlock>
    </>
  );
}

export default function ImageModal({ onPublish, onChange, tempEmoji }) {
  const [open, setOpen] = useState(true);
  const theme = ['Love', 'PokerFace', 'Fear'];

  const onConfirm = () => {
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <AskModal
      tempEmoji={tempEmoji}
      visible={open}
      title={'Dinary가 감정과 테마를 분석했어요!'}
      confirmText="완료"
      onConfirm={onPublish}
      onCancel={onCancel}
      onClick={onChange}
      theme={theme}
    />
  );
}
