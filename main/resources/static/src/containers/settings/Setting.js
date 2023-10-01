import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Theme from '../../components/settings/Theme';
import { useRecoilValue } from 'recoil';
import { userState } from '../../State/userState';
import UploadFile from '../../components/settings/UploadFile';

const SettingsPageBlock = styled(Responsive)`
background: ${(props) => props.theme.background}};
  width: 100%;
  display: flex;
  justify-content: center;
  outline: none;
`;

const ProfileBlock = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 3rem;
  background: ${(props) => props.theme.content};
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 3px 2px ${palette.gray[0]};

  a {
    width: 80%;
    text-align: right;
    font-size: 1rem;
    color: ${(props) => props.theme.text2};
    &:hover {
      color: ${palette.gray[0]};
    }
  }

  .pink {
    width: 80%;
    text-align: left;
    color: ${(props) => props.theme.text2};
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
  display: flex;
  color: ${(props) => props.theme.text3};

  span {
    font-family: ${(props) => props.theme.fontFamily};
    display: inline-block;
    width: 25rem;
    height: 3.5rem;
    line-height: 3.5rem;
    margin-left: 3rem;
    font-size: 1.5rem;
    color: ${palette.gray[0]};
    background: white;
  }

  input {
    color: ${palette.gray[0]};
    font-size: 1.5rem;
    width: 25rem;
    height: 3.5rem;
    margin-left: 3rem;
    border: none;
    &:focus {
      outline: none;
      border-radius: 4px;
      border: 2px solid ${palette.gray[0]};
      color: #0ca678;
    }
  }
`;

export default function Setting() {
  const userAccount = useRecoilValue(userState).account;
  // 비밀번호 끌고 오기

  return (
    <>
      <SettingsPageBlock>
        <ProfileBlock className="profile-img">
          <ProfileImage>
            <UploadFile />
          </ProfileImage>
          <Link to="/settings" className="a">
            Upload..
          </Link>
        </ProfileBlock>
        <ProfileBlock>
          <div className="pink">Profile</div>
          <div className="content">
            <ProfileContent>
              ID : <span>{userAccount}</span>
            </ProfileContent>
            {/* 합쳐서 사용 */}
            <ProfileContent>
              PW :<input placeholder="비밀번호 변경" />
            </ProfileContent>
            <ProfileContent>
              PW :<input placeholder="비밀번호 확인" />
            </ProfileContent>
            <ProfileContent>Change Theme</ProfileContent>
          </div>
          <Theme />
        </ProfileBlock>
      </SettingsPageBlock>
    </>
  );
}
