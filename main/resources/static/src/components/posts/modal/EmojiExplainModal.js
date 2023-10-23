import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';
import Emoji from '../../common/Emoji';

const Content = styled.div`
  width: 360px;
  height: 240px;
  padding: 25px 5px;
  background-image: url(${(props) => props.theme.listEmojiBlock});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-10%, 5%);

  position: fixed;
  z-index: 999;
`;

export default function EmojiExplainModal({ close }) {
  const [checkedEmoji, setCheckedEmoji] = useState('Happy');

  const handleCheckedEmoji = (e) => {
    setCheckedEmoji(e.target.value);
  };

  const handleOutEvent = () => {
    setTimeout(close(), 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('scroll', close);
    };
  });

  return (
    <Modal close={close}>
      <Content>
        {/* Dinary가 당신의 기분구슬을 모아드려요 */}
        <Emoji tempEmoji={checkedEmoji} onClick={handleCheckedEmoji} />
      </Content>
    </Modal>
  );
}
