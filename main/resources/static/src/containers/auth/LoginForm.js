import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AuthForm from '../../components/auth/AuthForm';
import { authCheckState, loginState } from '../../State/authState';
import { login } from '../../lib/api/auth';

export default function LoginForm() {
  const [form, setForm] = useRecoilState(loginState);
  const [auth, setAuth] = useRecoilState(authCheckState);
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
    login({ account: form.account, password: form.password });

    try {
      setAuth({ check: true });
    } catch (e) {
      setAuth({ check: false });
      console.log(e);
    }
  };

  useEffect(() => {
    if (auth.check === false) {
      console.log('로그인 실패');
      return;
    }
    if (auth.check) {
      try {
        console.log('로그인 성공');
        localStorage.setItem('account', JSON.stringify(form.account));
        navigate(`/${form.account}`);
      } catch (e) {
        console.log(e);
      }
    }
  }, [auth, form.account, navigate]);

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
