import styled, { css } from 'styled-components';
import Responsive from '../components/common/Responsive';
import palette from '../lib/styles/palette';
import HeaderContainer from '../components/common/HeaderContainer';

const SettingsPageBlock = styled(Responsive)`
  width: 100%;
`;

const ProfileImage = styled.div`
height: 80%;
width: 80%;
background: ${palette.gray[1]};
}`;

const ProfileInfo = styled.div`
  position: absolute;
  background: ${palette.pink[0]};
  height: 70%;
  width: 40%;
  right: 10%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  ${(props) =>
    props.$name &&
    css`
      position: absolute;
      height: 15rem;
      width: 40%;
      left: 10%;
    `}

  div + div {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const SettingsPage = () => {
  return (
    <>
      <HeaderContainer />
      <SettingsPageBlock>
        <ProfileInfo $name="true">
          <ProfileImage></ProfileImage>
        </ProfileInfo>
        <ProfileInfo></ProfileInfo>
        <ProfileInfo $name="true"></ProfileInfo>
      </SettingsPageBlock>
    </>
  );
};

export default SettingsPage;
