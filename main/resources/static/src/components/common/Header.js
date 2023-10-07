import styled from 'styled-components';
import Button from './Button';
import UserImage from './userImage/UserImage';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { postTheme, postUserImage } from '../../lib/api/user';

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
`;

const HeaderBlock = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 1rem;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지 콘텐츠가 4rem 아래 나타나도록 해 주는 컴포넌트
 */

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled(Button)`
  color: ${(props) => props.theme.text3};
  font-weight: 800;
`;

export default function Header() {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const { account, userImage, userTheme } = user;

  const handleLogout = () => {
    postTheme(account, userTheme);
    postUserImage(account, userImage);
    localStorage.removeItem('account');
    localStorage.removeItem('theme');
    localStorage.removeItem('user-image');
    resetUser();
    // api도 사용 추후 수정 logout
  };

  return (
    <Wrapper>
      <HeaderBlock>
        <div className="header">
          <UserInfo to="/settings">{account}</UserInfo>
          <Button to="/" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="header">
          {/* 이미지 추가하기 파일 소스 value 
          이게 왜 정렬이 돼? 왜 header로 했더니 정렬이 돼?
          도대체 무슨 속성이었길래*/}
          <UserImage value={userImage} />
          <Button to="/" $header="true">
            's Dinary
          </Button>
        </div>
      </HeaderBlock>
      <Spacer />
    </Wrapper>
  );
}
