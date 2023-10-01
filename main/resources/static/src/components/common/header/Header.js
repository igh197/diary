import styled from 'styled-components';
import Responsive from '../Responsive';
import Button from '../Button';
import palette from '../../../lib/styles/palette';
import UserImage from './UserImage';
import useModal from '../../hooks/useModal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../../State/userState';
import { postTheme, postUserImage } from '../../../lib/api/user';

const HeaderBlock = styled(Responsive)`
  background: ${(props) => props.theme.background};
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
  background: ${(props) => props.theme.background};
  height: 4rem;
`;

const UserInfo = styled(Button)`
  font-familty: ${(props) => props.theme.subTitleFont};
  color: ${(props) => props.theme.text3};
  font-weight: 800;
  margin-right: 1rem;
  letter-spacing: 2px;
`;

const UserImg = styled.div`
  height: 7rem;
  width: 7rem;
  display: inline-block;
  border-radius: 100%;
  background: ${palette.gray[0]};
`;

export default function Header() {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const { account, userImage, userTheme } = user;

  const { isOpen, open, close } = useModal();

  const handleLogout = () => {
    postTheme(account, userTheme);
    postUserImage(account, userImage);
    localStorage.removeItem('account');
    localStorage.removeItem('theme');
    localStorage.removeItem('user-image');
    resetUser();
  };

  return (
    <>
      <HeaderBlock>
        <div className="header">
          <UserInfo to="/settings">{account}</UserInfo>
          <Button to="/" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div>
          {/* 이미지 추가하기 파일 소스 value */}
          <UserImg $circle="true" onClick={open} value={userImage} />
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
}
