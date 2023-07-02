import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
	margin-top: 2rem;
	text-align: right;
    margin-right: 2rem;
    margin-bottom: 2rem;
	font-size: 1rem;
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
        margin-right: 5rem;
        margin-left: 70rem;
        font-size: 5rem;
        font-weight: bold;
        color: ${palette.pink[2]};
        text-shadow: -1px 0 ${palette.pink[3]}, 0 1px ${palette.pink[3]}, 1px 0 ${palette.pink[3]}, 0 -1px ${palette.pink[3]};
        display: block;
    }
`;

const Header = () => {
    return(
        <HeaderBlock>
            <Link to={"/login"}>Sign in</Link>/
            <Link to={"/register"}>Sign up   </Link>
            <Link to={"/settings"}>Settings</Link>
            <Link to={"/"} className={"logo-area"}>Dinary</Link>
        </HeaderBlock>
    );
};

export default Header;