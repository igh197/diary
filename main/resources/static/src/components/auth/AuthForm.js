import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;

const InputDiv = styled.div`
  width: 31rem;
  height: 3.6rem;
  margin: 0 auto;
  padding: 0 25px 0 35px;
  border-radius: 39px;
  background: ${(props) => props.theme.content};
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  & + & {
    margin-top: 20px;
  }

  &:hover {
    background: ${palette.gray[0]};
  }

  ${(props) =>
    props.$select &&
    css`
      border: 2px solid ${(props) => props.theme.text};
    `}
`;

const StyledInput = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  background: none;
  overflow: auto;
  outline: none;

  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.theme.subtext};

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }

  &:focus {
    color: ${(props) => props.theme.text};
  }
`;

const ButtonAuth = styled(Button)`
  width: 31rem;
  height: 3.6rem;
  border-radius: 39px;
  background: ${(props) => props.theme.text};

  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.titleButton};

  &:hover {
    background: ${palette.gray[0]};
    color: ${(props) => props.theme.titleButton};
  }

  ${(props) =>
    props.$error &&
    css`
      margin: 40px 0 0 0;
    `}
`;

const Footer = styled.div`
  margin: 35px 0 0 0;

  display: flex;
  justify-content: center;

  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.theme.placeholder};

  &:hover {
    color: ${palette.gray[0]};
  }
`;

const textMap = {
  login: 'LOG IN',
  register: 'JOIN',
};

const ErrorMessage = styled.div`
  margin: 20px 0 20px 0;
  z-index: 100;

  font-size: 0.875rem;
  text-align: center;
  color: red; // 수정
`;

export default function AuthForm({ type, form, onChange, onSubmit, error }) {
  const text = textMap[type];
  const [select, setSelect] = useState('');

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit} action="../login" method="POST">
        <InputDiv $select={select === 'login' ? true : false}>
          <StyledInput
            autoComplete="account"
            name="account"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
            value={form.account}
            onFocus={() => setSelect('login')}
          />
          {select === 'login' ? <img src="/images/Login/Eye.svg" alt="" /> : ''}
        </InputDiv>

        <InputDiv $select={select === 'password' ? true : false}>
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            onChange={onChange}
            value={form.password}
            onFocus={() => setSelect('password')}
          />
          {select === 'password' ? (
            <img src="/images/Login/Eye.svg" alt="" />
          ) : (
            ''
          )}
        </InputDiv>
        {type === 'register' && (
          <InputDiv $select={select === 'passwordConfirm' ? true : false}>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
              onFocus={() => setSelect('passwordConfirm')}
            />
            {select === 'passwordConfirm' ? (
              <img src="/images/Login/Eye.svg" alt="" />
            ) : (
              ''
            )}
          </InputDiv>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonAuth $error={error ? false : true}>{text}</ButtonAuth>
      </form>

      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}
