import styled from 'styled-components';
import UserInfoModal from './UserInfoModal';
import useModal from '../../hooks/useModal';
import Button from '../Button';

const StyledButton = styled(Button)`
  margin: 0 0 0 10px;
  padding: 0;
`;

const UserImageButton = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  border: 3px solid ${(props) => props.theme.text};
`;

export default function UserInfo({ account, userImage, onLogout }) {
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
        <UserInfoModal
          account={account}
          userImage={userImage}
          close={close}
          onLogout={onLogout}
        />
      )}
    </>
  );
}
