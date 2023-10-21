import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import UserInfo from './userInfo/UserInfo';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 4rem 1rem 2rem;
  background: ${(props) => props.theme.background};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$scroll &&
    css`
    padding 1rem 4rem 1rem 2rem;
    opacity: 0.95;
    backdrop-filter: blur(3px);
    box-shadow: 0 3px 3px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.1);
    `}
`;

const HeaderBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  font-size: 1rem;
  font-weight: bold;
`;

const LogoButton = styled(Button)`
  position: absolute;
  left: 3rem;

  div {
    width: 105.16px;
    height: 44px;
    background-image: url(${(props) => props.theme.header});
    background-size: cover;
  }
`;

export default function Header({ account, userImage, onLogout }) {
  const [scroll, setScroll] = useState(false);

  // 좀 더 효율적인 방법 없을까??? 수정
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <Wrapper $scroll={scroll}>
      <HeaderBlock>
        <LogoButton to="/postsample">
          <div />
        </LogoButton>
        <UserInfo account={account} userImage={userImage} onLogout={onLogout} />
      </HeaderBlock>
    </Wrapper>
  );
}
