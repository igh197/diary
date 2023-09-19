import styled from 'styled-components';
import Responsive from '../Responsive';
import Button from '../Button';
import palette from '../../../lib/styles/palette';
import UserImage from './UserImage';
import useModal from '../../hooks/useModal';

const HeaderBlock = styled(Responsive)`
  background: ${(props) => props.theme.background};
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 1rem;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지 콘텐츠가 4rem 아래 나타나도록 해 주는 컴포넌트
 */

const Spacer = styled.div`
  background: ${(props) => props.theme.background};
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const UserImg = styled(Button)`
  height: 6rem;
  width: 6rem;
  display: inline-block;
  border-radius: 5rem;
  background: ${palette.gray[0]};
  margin-right: 1rem;
`;

const Header = ({ user, onLogout, userImg }) => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <HeaderBlock>
        <div>
          {user ? (
            <div>
              <UserInfo to="/settings">{user.account}</UserInfo>
              <Button onClick={onLogout}>Logout</Button>
            </div>
          ) : (
            <div>
              <Button to="/login">Sign in</Button>
              <Button to="/settings">Settings</Button>
              {/* 지울것 */}
            </div>
          )}
        </div>
        <div>
          <UserImg $circle="true" onClick={open} />
          <Button to="/" $header="true">
            's Dinary
          </Button>
        </div>
      </HeaderBlock>
      {isOpen && (
        <>
          <UserImage close={close}></UserImage>
        </>
      )}
      <Spacer />
    </>
  );
};

export default Header;
