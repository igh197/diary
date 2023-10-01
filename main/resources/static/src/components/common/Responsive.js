import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  background: ${(props) => props.theme.background};
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  font-family: ${(props) => props.theme.fontFamily}};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Responsive({ children, ...rest }) {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}
