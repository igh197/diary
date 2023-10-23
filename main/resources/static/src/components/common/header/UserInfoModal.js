import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Modal from '../Modal';
import palette from '../../../lib/styles/palette';

const Content = styled.div`
  width: 224px;
  height: 298px;
  padding: 13px 5px;
  background-image: url(${(props) => props.theme.settingModal});
  background-size: cover;
  filter: drop-shadow(0px 86px 24px rgba(0, 0, 0, 0))
    drop-shadow(0px 55px 22px rgba(0, 0, 0, 0.01))
    drop-shadow(0px 31px 19px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 14px 14px rgba(0, 0, 0, 0.09))
    drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1));s

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transform: translate(-94%, 13%);

  position: fixed;
  z-index: 999;

  .profile {
    margin: 0 0 5px 0;
    padding: 25px 0 10px 0;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.subtext};
  }
`;

const UserImageButton = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const LinkButton = styled(Button)`
  width: 80%;
  height: 3rem;
  border-radius: 25px;
  margin: 0 20px 5px;
  padding: 10px;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.subtext};

  &:hover {
    color: ${palette.gray[0]};
  }
`;

export default function UserInfoModal({ account, userImage, close, onLogout }) {
  useEffect(() => {
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('scroll', close);
    };
  });

  return (
    <Modal close={close}>
      <Content>
        <div className="profile">
          <UserImageButton src={userImage} alt="Profile" />
          <p>{account}</p>
        </div>
        <LinkButton to="/user">My Page</LinkButton>
        <LinkButton to="/" onClick={onLogout}>
          Logout
        </LinkButton>
      </Content>
    </Modal>
  );
}
