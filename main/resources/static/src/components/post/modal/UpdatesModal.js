import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import palette from '../../../lib/styles/palette';

const Content = styled.div`
  width: 150px;
  height: 160px;
  padding: 25px 5px;
  background-image: url('/images/Post/UpdatesBox.svg');
  background-size: cover;
  filter: drop-shadow(0px 86px 24px rgba(0, 0, 0, 0))
    drop-shadow(0px 55px 22px rgba(0, 0, 0, 0.01))
    drop-shadow(0px 31px 19px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 14px 14px rgba(0, 0, 0, 0.09))
    drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1));

  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-94%, 13%);

  position: fixed;
  z-index: 999;
`;

const ActionButton = styled(Button)`
  padding: 0.5rem;
  background: none;
  border-radius: 4px;
  border: none;

  font-size: 1rem;
  font-weight: 900;
  color: ${(props) => props.theme.subtext};
  outline: none;

  cursor: pointer;

  &:hover {
    background: none;
    color: ${palette.gray[0]};
  }
`;

export default function UpdatesModal({ close, onEdit, onRemove }) {
  useEffect(() => {
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('scroll', close);
    };
  });

  return (
    <Modal close={close}>
      <Content>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemove}>삭제</ActionButton>
      </Content>
    </Modal>
  );
}
