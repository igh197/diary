import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { useState } from 'react';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[0]};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const InputDiv = styled.div`
  width: 502px;
  height: 57px;
  border-radius: 39px;
  background: ${(props) => props.theme.inputBackground};
  padding-left: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 1;
  opacity: 1;
  padding-right: 1rem;

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    background: ${palette.gray[0]};
  }

  ${(props) =>
    props.select &&
    css`
      border: 2px solid #79317a;
    `}

  .icon {
    width: 2rem;
    height: 2rem;
    color: ${palette.gray[0]};
    ${(props) =>
      props.select &&
      css`
        color: black;
      `}
  }
`;

const StyledInput = styled.input`
  font-size: 16px;
  text-align: left;
  color: #c1c1c1;
  border: none;
  background: none;

  width: 90%;
  height: 90%;
  margin-left: 1rem;
  overflow: auto;

  outline: none;

  &:focus {
    color: #0ca678;
  }
`;

const ButtonAuth = styled(Button)`
  margin-top: 2.5rem;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  width: 502px;
  height: 57px;
  border-radius: 39px;
  background: #79317a;

  &:hover {
    background: ${palette.gray[0]};
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
  display: flex;
  justify-content: center;
  postion: absolute;
  left: 991px;
  top: 740px;
  font-size: 16px;
  text-align: left;
  color: #c1c1c1;
  margin-top: 2rem;
  &:hover {
    color: ${palette.gray[0]};
  }
`;

const textMap = {
  login: 'LOG IN',
  register: 'JOIN',
};

/* 에러 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export default function AuthForm({ type, form, onChange, onSubmit, error }) {
  const text = textMap[type];
  const [select, setSelect] = useState('');

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit} action="../login" method="POST">
        <InputDiv select={select === 'login' ? true : false}>
          {/* <MdPersonOutline className="icon" /> */}
          <StyledInput
            autoComplete="account"
            name="account"
            placeholder="아이디를 입력해주세요"
            onChange={onChange}
            value={form.account}
            onFocus={() => setSelect('login')}
          />
          {select === 'login' ? <img src="/images/Login/Eye.png" alt="" /> : ''}
        </InputDiv>

        <InputDiv select={select === 'password' ? true : false}>
          {/* <MdLockOutline className="icon" /> */}
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
            <img src="/images/Login/Eye.png" alt="" />
          ) : (
            ''
          )}
        </InputDiv>
        {type === 'register' && (
          <InputDiv select={select === 'passwordConfirm' ? true : false}>
            {/* <MdLockOpen className="icon" /> */}
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
              <img src="/images/Login/Eye.png" alt="" />
            ) : (
              ''
            )}
          </InputDiv>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonAuth>{text}</ButtonAuth>
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
