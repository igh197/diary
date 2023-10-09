import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { loginState } from '../../State/authState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../State/userState';
import { login, check } from '../../lib/api/auth';

export default function LoginForm() {
  const [errorText, setErrorText] = useState('');
  const [userLogin, setUserLogin] = useRecoilState(loginState);
  const userInfo = useRecoilValue(userState);
  const { form, auth, authError } = userLogin;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...form,
      [name]: value,
    });
  };

  // 폼 등록 이벤트 핸들러 - 백엔드 물어보고 수정
  const onSubmit = (e) => {
    setUserLogin(form);
    e.preventDefault();
    if ([form.account, form.password].includes('')) {
      setErrorText(`아이디 또는 비밀번호를 모두 입력하세요.`);
      return;
    }
    login({ account: form.account, password: form.password });
    console.log('login 후에');
    check();
    console.log('check후에');
    // 수정
    try {
      setUserLogin({
        ...form,
        auth: true,
        authError: null,
      });
    } catch (e) {
      setUserLogin({
        ...form,
        auth: null,
        authError: true,
      });
    }
  };

  useEffect(() => {
    if (authError) {
      setErrorText('로그인 실패');
      console.log('오류 발생');
      console.log(authError);
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
        localStorage.setItem('account', JSON.stringify(userInfo.account));
        localStorage.setItem('user-image', JSON.stringify(userInfo.userImage));
        localStorage.setItem('theme', JSON.stringify(userInfo.userTheme));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, auth, userInfo]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={errorText}
    />
  );
}
