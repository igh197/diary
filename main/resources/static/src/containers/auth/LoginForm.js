import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { authCheckState, loginState } from '../../State/authState';
import { login } from '../../lib/api/auth';
import { getUser } from '../../lib/api/user';
import { userState } from '../../State/userState';

export default function LoginForm() {
  const [form, setForm] = useRecoilState(loginState);
  const [auth, setAuth] = useRecoilState(authCheckState);
  const [user, setUser] = useRecoilState(userState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ([form.account, form.password].includes('')) {
      setError(`아이디 또는 비밀번호를 모두 입력하세요.`);
      return;
    }
    const response = login({ account: form.account, password: form.password });
    console.log(response);
    const userInfo = getUser(form.account);

    if (userInfo) {
      setAuth({ check: true });
    } else {
      setAuth({ check: false });
    }
  };

  // 나중에 useCallback이나 useEffect로 최적화
  useEffect(() => {
    if (auth.check === false) {
      console.log('로그인 실패');
      return;
    }
    if (auth.check === true) {
      try {
        console.log('로그인 성공');

        // 로컬에 저장
        // localStorage.setItem('account', JSON.stringify(form.account));
        // if (userInfo.userTheme) {
        //   localStorage.setItem('theme', JSON.stringify(userInfo.userTheme));
        // } else {
        //   localStorage.setItem('theme', JSON.stringify(user.userTheme));
        // }
        // if (userInfo.userImage) {
        //   localStorage.setItem(
        //     'user-image',
        //     JSON.stringify(userInfo.userImage),
        //   );
        // } else {
        //   localStorage.setItem('user-image', JSON.stringify(user.userImage));
        // }

        // const userTheme = localStorage.getItem('theme');
        // console.log(userTheme, user.userTheme);

        // setUser({
        //   ...user,
        //   account: form.account,
        // });
        navigate(`/${form.account}`);
      } catch (e) {
        console.log(e);
      }
    }
  }, [auth.check]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}
