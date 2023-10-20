import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import Button from '../../common/Button';
import UpdatesModal from './UpdatesModal';

const StyledButton = styled(Button)`
  width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 75px;

  div {
    width: 100%;
    height: 100%;
    background-image: url('/images/Post/Updates.svg');
    background-size: cover;
  }
`;

export default function Updates({ onEdit, onRemove }) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <StyledButton onClick={open}>
        <div />
      </StyledButton>
      {isOpen && (
        <UpdatesModal onEdit={onEdit} onRemove={onRemove} close={close} />
      )}
    </>
  );
}
