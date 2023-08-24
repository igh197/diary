// src/components/auth/AuthForm.js

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	border: none;
	width: 100%;
	height: 4rem;
	border-bottom: 2px solid ${palette.gray[5]};
	outline: none;
	color: ${palette.pink[2]}
	text-shadow: 1px 1px 1px ${palette.pink[3]};
    opacity: 0.8;
	&:focus {
		color: #0ca678;
		border-bottom: 1px solid ${palette.gray[7]};
	}
 
	& + & {
		margin-top: 2rem;
	}
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.5rem;
  a {
    color: ${palette.pink[1]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[3]};
    }
  }
`;

const textMap = {
  login: 'Login',
  register: 'Join',
};

/* 에러 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit} action="../login" method="POST">
        <StyledInput
          autoComplete="account"
          name="account"
          placeholder="👤"
          onChange={onChange}
          value={form.account}
        />

        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="🔒"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="🔐"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button $pink="true" $fullWidth="true" style={{ marginTop: '2rem' }}>
          {text}
        </Button>
      </form>

      <Footer>
        {type === 'login' ? (
          <Link to="/register">Join</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
