import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

/* 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다. */

const AuthTemplateBlock = styled(Responsive)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.content}};
  display: flex;
  flex-direction: row;
`;

const ImageBlock = styled.img`
  display: block;
  width: 50%;
  height: 100%;
  // width: 720px;
  // height: 1044px;
  overflow: hidden;
`;

const InnerBox = styled.div`
  display: block;
  width: 50%;
  .logo-area {
    width: 302px;
    height: 112px;
    // position: absolute;
    // left: 922px;
    // top: 275px;
    font-size: 96px;
    text-align: left;
    color: #79317a;
    margin-bottom: 4rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <ImageBlock src="images/Background/Login1.png" alt="images" />
      <InnerBox>
        <div className="logo-area">
          <Link to="/">
            <img src="images/Logo/Logo1.svg" alt="logo" />
          </Link>
        </div>
        {children}
      </InnerBox>
    </AuthTemplateBlock>
  );
}
