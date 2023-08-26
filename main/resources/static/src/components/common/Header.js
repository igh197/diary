import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  width: 100%;
  background: white;
`;

/**
 * Responsive 컴포넌트 속성에 스타일 추가해서 새로운 컴포넌트 생성
 */

const Wrapper = styled(Responsive)`
  margin-top: 2rem;
  text-align: right;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: bold;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지 콘텐츠가 4rem 아래 나타나도록 해 주는 컴포넌트
 */

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div>
            {user ? (
              <div>
                <UserInfo>{user.account}</UserInfo>
                <Button onClick={onLogout}>Logout</Button>
              </div>
            ) : (
              <div>
                <Button to="/login">Sign in</Button>
                <Button to="/settings">Settings</Button>
              </div>
            )}
          </div>
          <Button to="/" $header="true">
            Dinary
          </Button>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
