import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { loginState } from '../../State/authState';
import { userState } from '../../State/userState';
import { login, check } from '../../lib/api/auth';
import { getUser } from '../../lib/api/user';

export default function LoginForm() {
  const [userLogin, setUserLogin] = useRecoilState(loginState);
  const userInfo = useRecoilValue(userState);
  const { form, auth, authError } = userLogin;
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({
      ...form,
      [name]: value,
    });
  };

  // 폼 등록
  const onSubmit = (e) => {
    setUserLogin(form);
    e.preventDefault();
    if ([form.account, form.password].includes('')) {
      setErrorText(`아이디 또는 비밀번호를 모두 입력하세요.`);
      return;
    }
    login({ account: form.account, password: form.password });
    check();

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

  // 에러 핸들링
  useEffect(() => {
    if (authError) {
      setErrorText('로그인 실패');
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      getUser(form.account);
      navigate('/postsample');
      try {
        localStorage.setItem('account', JSON.stringify(userInfo.account));
        localStorage.setItem('user-image', JSON.stringify(userInfo.userImage));
        localStorage.setItem('theme', JSON.stringify(userInfo.userTheme));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, authError, form.account, navigate, userInfo]);

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
