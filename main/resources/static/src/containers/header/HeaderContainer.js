import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { postUser, getUser } from '../../lib/api/user';
import { logout } from '../../lib/api/auth';
import Header from '../../components/common/header/Header';

export default function HeaderContainer() {
  const user = useRecoilValue(userState);
  const { account, userImage, userTheme } = user;
  const resetUser = useResetRecoilState(userState);

  const navigate = useNavigate();

  const userInfo = getUser(account);
  if (userInfo.userTheme !== null) {
    localStorage.setItem('theme', JSON.stringify(userInfo.userTheme));
  } else {
    localStorage.setItem('theme', JSON.stringify(userTheme));
  }
  if (userInfo.userImage !== null) {
    localStorage.setItem('user-image', JSON.stringify(userInfo.userImage));
  } else {
    localStorage.setItem('user-image', JSON.stringify(userImage));
  }

  // 에러 처리 추가 수정 localStorage removeItem사용
  const handleLogout = () => {
    postUser(account, userImage, userTheme);
    resetUser();
    logout();
    navigate('/');
  };

  return (
    <Header
      account={account}
      userImage={userImage}
      onLogout={() => handleLogout}
    />
  );
}
