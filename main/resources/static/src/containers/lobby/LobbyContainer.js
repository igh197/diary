import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';

const LobbyBlock = styled(Responsive)`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.titleBackground};
  display: flex;
  flex-direction: column;
  justify-content: center; // 가로 정렬
  align-items: center; // 세로 정렬
  div + div {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  text-shadow: 1px 1px 1px ${palette.gray[0]};
  font-weight: 600;
  letter-spacing: 2px;

  &.logo {
    font-family: ${(props) => props.theme.titleFont};
    font-size: 7rem;
    color: ${(props) => props.theme.titleColor};
  }

  &.text {
    font-family: ${(props) => props.theme.subTitleFont};
    color: white;
    position: relative;
    bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

export default function LobbyContainer() {
  return (
    <LobbyBlock>
      <Header className="logo">Dinary</Header>
      <Header className="text">Find your feelings</Header>
      <div>
        <StyledButton to="/login">Sign in</StyledButton>
        <StyledButton>|</StyledButton>
        <StyledButton to="/register">Sign up</StyledButton>
      </div>
    </LobbyBlock>
  );
}
