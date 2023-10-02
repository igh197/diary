import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../Button';
import UserImageModal from './UserImageModal';
import useModal from '../../hooks/useModal';

const UserImageButton = styled(Button)`
  height: 7rem;
  width: 7rem;
  display: inline-Button;
  border-radius: 100%;
  background: ${palette.gray[0]};
`;

export default function UserImage() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <UserImageButton $circle="true" onClick={open}></UserImageButton>
      {isOpen && (
        <>
          <UserImageModal close={close}></UserImageModal>
        </>
      )}
    </>
  );
}
