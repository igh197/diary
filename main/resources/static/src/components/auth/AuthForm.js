// src/components/auth/AuthForm.js

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { MdLockOutline, MdPersonOutline, MdLockOpen } from 'react-icons/md';
import { useState } from 'react';

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

const InputDiv = styled.div`
  background: white;
  padding-left: 1rem;
  border-bottom: 2px solid ${palette.gray[5]};
  height: 4rem;
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 1;
  opacity: 1;

  & + & {
    margin-top: 2rem;
  }

  &:hover {
    background: ${palette.gray[2]};
  }

  ${(props) =>
    props.select &&
    css`
      border: 2px solid ${palette.gray[7]};
    `}
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	border: none;
  background: none;
	width: 90%;
	height: 90%;
  margin-left: 1rem;
  overflow: auto;
	
	outline: none;
	color: ${palette.pink[2]}
	text-shadow: 1px 1px 1px ${palette.pink[3]};
    opacity: 0.8;

    
	&:focus {
		color: #0ca678;
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
  const [select, setSelect] = useState('');

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit} action="../login" method="POST">
        <InputDiv select={select === 'login' ? true : false}>
          <MdPersonOutline size="2rem" />
          <StyledInput
            autoComplete="account"
            name="account"
            placeholder="아이디"
            onChange={onChange}
            value={form.account}
            onFocus={() => setSelect('login')}
          />
        </InputDiv>

        <InputDiv select={select === 'password' ? true : false}>
          <MdLockOutline size="2rem" />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
            onFocus={() => setSelect('password')}
          />
        </InputDiv>
        {type === 'register' && (
          <InputDiv select={select === 'passwordConfirm' ? true : false}>
            <MdLockOpen size="2rem" />
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
              onFocus={() => setSelect('passwordConfirm')}
            />
          </InputDiv>
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
