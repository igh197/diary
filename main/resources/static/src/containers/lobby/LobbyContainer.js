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
  justify-content: center;
  align-items: center;
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
    position: relative;
    bottom: 1rem;
    color: white;
    font-size: 1.5rem;
  }
`;

const SubHeading = styled.div`
  margin-top: 2rem;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

export default function LobbyContainer() {
  return (
    <LobbyBlock>
      <Header className="logo">Dinary</Header>
      <Header className="text">Find your feelings</Header>
      <SubHeading>
        <Button to="/login">Sign in</Button>|
        <Button to="/register">Sign up</Button>
      </SubHeading>
    </LobbyBlock>
  );
}
