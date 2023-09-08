import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/* 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다. */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // backgroud: ${palette.gray[1]};
  background: #ffffff;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const PinkBox = styled.div`
    .logo-area{
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        color: ${palette.pink[2]}};
        text-shadow: 1px 1px 1px ${palette.pink[3]};
        opacity: 0.8;
    }
    box-shadow: 0 0 10px rgba(0,0,0,0.025);
    padding: 2rem;
    width: 500px;
    height: 550px;
    background-color: ${palette.pink[0]};
    border-radius: 5px;
    `;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <PinkBox>
        <div className="logo-area">
          <Link to="/">Dinary</Link>
        </div>
        {children}
      </PinkBox>
      {/*불 값 수정*/}
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
