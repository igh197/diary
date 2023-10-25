import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { postUser } from '../../lib/api/user';
import { logout } from '../../lib/api/auth';
import Header from '../../components/common/header/Header';
import { authCheckState } from '../../State/authState';

export default function HeaderContainer() {
  const user = useRecoilValue(userState);
  const { account, userImage, userTheme } = user;
  const resetUser = useResetRecoilState(userState);
  const resetAuth = useResetRecoilState(authCheckState);

  const navigate = useNavigate();

  // 에러 처리 추가 수정 localStorage removeItem사용
  const handleLogout = () => {
    resetUser();
    resetAuth();
    localStorage.removeItem('account');
    localStorage.removeItem('theme');
    localStorage.removeItem('user-image');
    postUser(account, userImage, userTheme);
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
