import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
	margin-top: 2rem;
	text-align: right;
    margin-right: 2rem;
	font-size: 1.5rem;
    font-weight: bold;
	a {
		color: #000000;
		&:hover {
			color: ${palette.gray[3]};
		}
	}
    .setting-area{

    }
    .logo-area{
        display: block;
    }
`;

const Header = () => {
    return(
        <HeaderBlock>
            <Link to={"/login"}>Sign in</Link>/
            <Link to={"/register"}>Sign up   </Link>
            <Link to={"/settings"}>Settings</Link>
            <h1>Dinary</h1>
        </HeaderBlock>
    );
};

export default Header;