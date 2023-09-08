import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import palette from '../lib/styles/palette';
import HeaderContainer from '../components/common/HeaderContainer';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const SettingsPageBlock = styled(Responsive)`
  width: 100%;
  display: flex;
  justify-content: center;
  outline: none;
`;

const ProfileBlock = styled.div`
  width: 50%;
  height: 100%;
  background: ${palette.pink[0]};
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 3px 2px ${palette.gray[5]};
  margin-bottom: 2rem;

  a {
    width: 80%;
    text-align: right;
    font-size: 1rem;
    margin-top: 1rem;
    color: ${palette.pink[6]};
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  .pink {
    margin-top: 2rem;
    width: 80%;
    text-align: left;
    color: ${palette.pink[6]};
    font-size: 1.5rem;
  }

  &.profile-img {
    justify-content: center;
    width: 30rem;
    height: 30rem;
  }

  & + & {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .content {
    width: 90%;
  }
`;

const ProfileImage = styled.div`
width:80%;
height:80%;
background: ${palette.gray[0]};
}`;

const ProfileContent = styled.div`
  weight: 100%;
  margin-top: 4rem;
  text-align: left;
  font-size: 1.5rem;

  span {
    display: inline-block;
    width: 25rem;
    height: 3.5rem;
    line-height: 3.5rem;
    margin-left: 3rem;
    font-size: 1.5rem;
    color: ${palette.gray[8]};
    background: white;
  }

  input {
    color: ${palette.gray[6]};
    font-size: 1.5rem;
    width: 25rem;
    height: 3.5rem;
    margin-left: 3rem;
    border: none;
    &:focus {
      outline: none;
      border-radius: 4px;
      border: 2px solid ${palette.gray[11]};
      color: #0ca678;
    }
  }
`;

const ThemeBlock = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

  input {
    vertical-align: middle;
    appearance: none;
    background: white;
    box-shadow: 0 0 0 1px ${palette.gray[11]};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2rem;
    margin-right: 7rem;
    margin-left: 7rem;

    &:checked {
      background: black;
      border: 3.5px solid white;
      box-shadow: 0 0 0 1px ${palette.gray[11]};
    }
  }

  image {
    display: inline-block;
    width: 12rem;
    height: 15rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    background: ${palette.gray[0]};
    margin-bottom: 2rem;
  }
`;

const Save = styled(Button)`
  width: 9rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 0 3px 2px ${palette.gray[5]};
  background: white;
`;

const SettingsPage = ({ useraccount, profileImage }) => {
  return (
    <>
      <HeaderContainer />
      <SettingsPageBlock>
        <ProfileBlock className="profile-img">
          <ProfileImage>{profileImage}</ProfileImage>
          <Link to="/settings" className="a">
            Upload..
          </Link>
        </ProfileBlock>
        <ProfileBlock>
          <div className="pink">Profile</div>
          <div className="content">
            <ProfileContent>
              {/* 수정: 이거 왜 위치가 안 맞지? */}
              ID : <span>{useraccount}account</span>
            </ProfileContent>
            <ProfileContent>
              PW :<input placeholder="비밀번호 변경" />
            </ProfileContent>
            <ProfileContent>
              PW :<input placeholder="비밀번호 확인" />
            </ProfileContent>
            <ProfileContent>Change Theme</ProfileContent>
          </div>
          <ThemeBlock>
            <form>
              <input type="radio" name="theme" />
              <input type="radio" name="theme" />
              <input type="radio" name="theme" />
            </form>
            <div>
              <image />
              <image />
              <image />
            </div>
            <Save>Save</Save>
          </ThemeBlock>
        </ProfileBlock>
      </SettingsPageBlock>
    </>
  );
};

export default SettingsPage;
