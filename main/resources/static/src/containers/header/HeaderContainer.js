import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { postUser } from '../../lib/api/user';
import { logout } from '../../lib/api/auth';
import Header from '../../components/common/header/Header';

export default function HeaderContainer() {
  const user = useRecoilValue(userState);
  const { account, userImage, userTheme } = user;
  const resetUser = useResetRecoilState(userState);

  const navigate = useNavigate();

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
