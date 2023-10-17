import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { registerState } from '../../State/authState';
import { register } from '../../lib/api/auth';

export default function RegisterForm() {
  const [user, setUser] = useRecoilState(registerState);
  const { form, auth, authError } = user;
  const resetState = useResetRecoilState(registerState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...form,
      [name]: value,
    });
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { account, password, passwordConfirm } = form;
    if ([account, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    register({ account, password });
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
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        resetState();
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      resetState();
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError, resetState]);

  // 에러 핸들링
  useEffect(() => {
    if (auth) {
      console.log('check API 성공');
      console.log(user.account);
      alert('회원가입 성공');
      navigate('/');
    }
  }, [navigate, user.account, auth]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}
