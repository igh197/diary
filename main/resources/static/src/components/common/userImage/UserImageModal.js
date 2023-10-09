import styled from 'styled-components';
import Button from '../Button';
import palette from '../../../lib/styles/palette';

const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: none;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  transform: translate(-100%, 20%);
  z-index: 999;
`;

const UserImageButton = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  background: ${palette.gray[0]};
  border: 1px solid ${(props) => props.theme.text};
`;

export default function UserImageModal({ account, userImage, close, onClick }) {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Content>
        <p>{account}</p>
        <UserImageButton src={userImage} alt="Profile" />
        <Button to="/settings">My Page</Button>
        <Button to="/" onClick={onClick}>
          Logout
        </Button>
      </Content>
    </Wrapper>
  );
}
