// src/components/auth/AuthForm.js
 
import React from 'react';
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
	// padding-bottom: 0.5rem;
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

const ButtonWithMarginTop = styled(Button)`
margin-top: 2rem;
`;

const textMap = {
  login: 'Login',
  register: 'Join',
};

const AuthForm = ({type}) => {
  const text = textMap[type];

	return (
		<AuthFormBlock>
			<form>
				<StyledInput
					autoComplete="username"
					name="username"
					placeholder="ID"
				/>
 
				<StyledInput
					autoComplete="new-password"
					name="password"
					placeholder="Password"
					type="password"
				/>
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            type="password"
          />)}
				<ButtonWithMarginTop pink fullWidth>
					{text}
				</ButtonWithMarginTop>
			</form>
 
			<Footer>{
        type === 'login' ? (
          <Link to="/register">Join</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
			</Footer>
		</AuthFormBlock>
	);
};
 
export default AuthForm;