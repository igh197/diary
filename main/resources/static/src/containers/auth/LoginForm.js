import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { loginState } from '../../State/authState';
import { login } from '../../lib/api/auth';
import { getUser } from '../../lib/api/user';

export default function LoginForm() {
  const [user, setUser] = useRecoilState(loginState);
  const { form, auth, authError } = user;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
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
    login({ account: form.account, password: form.password });

    try {
      setUser({
        ...form,
        auth: true,
        authError: null,
      });
    } catch (e) {
      console.log(e);
      setUser({
        ...form,
        auth: null,
        authError: true,
      });
    }
  };

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
    }
    if (auth) {
      const userInfo = getUser(form.account);
      localStorage.setItem('account', JSON.stringify(form.account));
      localStorage.setItem('user-image', JSON.stringify(userInfo.userImage));
      localStorage.setItem('theme', JSON.stringify(userInfo.userTheme));
      try {
        console.log('로그인 성공');
        navigate(`/@${form.account}`);
      } catch (e) {
        console.log(e);
      }
    }
  }, [auth, authError, form.account, navigate]);

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
