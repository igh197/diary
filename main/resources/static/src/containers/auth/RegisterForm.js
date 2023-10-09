import { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { registerState } from '../../State/authState';
import { register } from '../../lib/api/auth';

export default function RegisterForm() {
  const [error, setError] = useState(null);
  const [user, setUser] = useRecoilState(registerState);
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
    if (register({ account, password })) {
      setUser({
        ...form,
        auth: true,
        authError: null,
      });
    } else {
      setUser({
        ...form,
        auth: null,
        authError: true,
      });
    }
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함 - 수정
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  // user 값이 잘 설정되었는지 확인 - 수정
  useEffect(() => {
    if (auth) {
      console.log('check API 성공');
      console.log(user.account);
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user.account));
      } catch (e) {
        console.log('localStorage is not working');
      }
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
