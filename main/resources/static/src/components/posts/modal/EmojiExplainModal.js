import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';
import Emoji from '../../common/Emoji';

const Content = styled.div`
  width: 444px;
  height: 379px;
  padding: 30px 30px 90px 30px;
  background-image: url(${(props) => props.theme.listEmojiBlock});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transform: translate(-10%, 5%);

  position: fixed;
  z-index: 999;

  font-size: 1rem;
  font-weight: 800;
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
        Dinary와 함께 기분구슬을 모아볼까요?
        {/* Dinary가 당신의 기분구슬을 모아드려요 */}
        <Emoji tempEmoji={checkedEmoji} onClick={handleCheckedEmoji} />
      </Content>
    </Modal>
  );
}
