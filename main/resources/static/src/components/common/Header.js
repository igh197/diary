import styled from 'styled-components';
import Button from './Button';
import UserImage from './userImage/UserImage';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { postUser } from '../../lib/api/user';
import { logout } from '../../lib/api/auth';

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
  padding: 3rem 4rem;
`;

const HeaderBlock = styled.div`
  width: 100%;

  text-align: right;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const LogoButton = styled(Button)`
  position: absolute;
  left: 3.5rem;
  top: 3rem;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지 콘텐츠가 1.5rem 아래 나타나도록 해 주는 컴포넌트
 */

const Spacer = styled.div`
  height: 0.5rem;
`;

export default function Header() {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const { account, userImage, userTheme } = user;

  const handleLogout = () => {
    postUser(account, userImage, userTheme);
    localStorage.removeItem('account');
    localStorage.removeItem('theme');
    localStorage.removeItem('user-image');
    resetUser();
    logout();
  };

  return (
    <Wrapper>
      <HeaderBlock>
        <LogoButton to="/">
          <img
            src="/images/Logo/Logo1.svg"
            alt="logo"
            width={105.16}
            height={39}
          />
        </LogoButton>
        <UserImage
          account={account}
          userImage={userImage}
          onClick={() => handleLogout}
        />
      </HeaderBlock>
      <Spacer />
    </Wrapper>
  );
}
