import styled, { css } from 'styled-components';
import palette from '../lib/styles/palette';
import Responsive from '../components/common/Responsive';
import Button from '../components/common/Button';

const LobbyBlock = styled(Responsive)`
  height: 100vh;
  width: 100vw;
  background: ${palette.pink[1]};
  text-align: center;
  div + div {
    margin-bottom: 15rem;
  }
`;

const Header = styled.div`
  position: relative;
  top: 30%;
  font-family: 'Playfair Display', serif;
  color: white;
  text-shadow: 1px 1px 1px ${palette.pink[3]};

  ${(props) =>
    props.$logo &&
    css`
      font-size: 7rem;
      font-weight: 600;
      letter-spacing: 2px;
    `}

  ${(props) =>
    props.$text &&
    css`
      postion: relative;
      top: 30%;
      left: 2%;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 2px;
    `}
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const LobbyPage = () => {
  return (
    <LobbyBlock>
      <Header $logo="true">Dinary</Header>
      <Header $text="true">Find your feelings</Header>
      <div>
        <StyledButton to="/login">Sign in</StyledButton>
        <StyledButton>|</StyledButton>
        <StyledButton to="/register">Sign up</StyledButton>
      </div>
    </LobbyBlock>
  );
};

export default LobbyPage;
