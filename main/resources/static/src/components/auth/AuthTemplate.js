import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/* 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다. */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  letter-spacing: 2px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.background}};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const InnerBox = styled.div`
  .logo-area {
    font-family: ${(props) => props.theme.titleFont};
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    color: ${(props) => props.theme.text};
    text-shadow: 1px 1px 1px ${palette.gray[0]};
    opacity: 0.8;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 500px; // 이거를 어떻게 크기로 변환할까..? 수정
  background: ${(props) => props.theme.content};
  border-radius: 5px;
`;

export default function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <InnerBox>
        <div className="logo-area">
          <Link to="/">Dinary</Link>
        </div>
        {children}
      </InnerBox>
      {/*불 값 수정*/}
    </AuthTemplateBlock>
  );
}
