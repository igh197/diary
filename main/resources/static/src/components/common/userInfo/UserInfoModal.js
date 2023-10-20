import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import palette from '../../../lib/styles/palette';

const Wrapper = styled.div``;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: none;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;

const Content = styled.div`
  width: 224px;
  height: 298px;
  padding: 40px 5px 25px 5px;
  background-image: url('/images/User/UserInfoBox.svg');
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

  .profile {
    margin: 10px 0;
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
  height: 4rem;
  border-radius: 25px;

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
    <Wrapper>
      <Overlay onClick={close}></Overlay>
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
    </Wrapper>
  );
}
