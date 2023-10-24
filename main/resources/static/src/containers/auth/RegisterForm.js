import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { registerState } from '../../State/authState';
import { register } from '../../lib/api/auth';
import { errorState } from '../../State/errorState';

export default function RegisterForm() {
  const [form, setForm] = useRecoilState(registerState);
  const [auth, setAuth] = useRecoilState(errorState);
  const resetState = useResetRecoilState(registerState);
  const resetError = useResetRecoilState(errorState);
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
      setAuth({ error: false });
    } catch (e) {
      setAuth({ error: true });
      console.log(e);
    }
  };

  useEffect(() => {
    if (auth.error) {
      // 계정명이 이미 존재할 때
      if (auth.error.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
      } else {
        // 기타 이유
        setError('회원가입 실패');
      }
    }
    if (auth.error === false) {
      console.log('check API 성공');
      alert('회원가입 성공');
      navigate('/');
    }
    resetError();
    resetState();
  }, [auth, setAuth, resetState, resetError, navigate]);

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
