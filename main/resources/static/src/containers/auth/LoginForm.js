import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { loginState } from '../../State/authState';
import { useRecoilState } from 'recoil';
import { userState } from '../../State/userState';
import { login, check } from '../../lib/api/auth';

export default function LoginForm() {
  const [error, setError] = useState(null);
  const [user, setUser] = useRecoilState(loginState);
  const [account, setAccount] = useRecoilState(userState);
  const { form, auth, authError } = user;
  const navigate = useNavigate();

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...form,
      [name]: value,
    });
  };

  // 폼 등록 이벤트 핸들러 - 백엔드 물어보고 수정
  const onSubmit = (e) => {
    setAccount(form);
    e.preventDefault();
    login({ account: form.account, password: form.password });
    console.log('login 후에');
    check();
    console.log('check후에');
    // 수정
    try {
      setUser({
        ...form,
        auth: true,
        authError: null,
      });
    } catch (e) {
      setUser({
        ...form,
        auth: null,
        authError: true,
      });
    }
  };

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('Fail to login');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
    }
  }, [auth, authError]);

  useEffect(() => {
    if (auth) {
      navigate('/');
      try {
        localStorage.setItem('account', JSON.stringify(account.account));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, auth, account.account]);

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
