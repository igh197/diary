import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import UserImageModal from './UserImageModal';
import useModal from '../../hooks/useModal';
import Button from '../Button';

const StyledButton = styled(Button)`
  padding: 0;
  margin-left: 0.7rem;
`;

const UserImageButton = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  background: ${palette.gray[0]};
  border: 3px solid ${(props) => props.theme.text};
`;

export default function UserImage({ account, userImage, onClick }) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <StyledButton>
        <UserImageButton src={userImage} alt="Profile" onClick={open} />
      </StyledButton>
      <StyledButton>
        <img src="/images/User/ArrowDown.svg" alt="이미지" onClick={open} />
      </StyledButton>
      {isOpen && (
        <UserImageModal
          account={account}
          userImage={userImage}
          close={close}
          onClick={onClick}
        />
      )}
    </>
  );
}
