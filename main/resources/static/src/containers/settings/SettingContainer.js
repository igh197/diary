// 수정
// 비밀번호 변경 시 에러 핸들링

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Theme from '../../components/settings/Theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import UploadFile from '../../components/settings/UploadFile';
import Responsive from '../../components/common/Responsive';
import { registerState } from '../../State/authState';
import { changePassword } from '../../lib/api/auth';
import SaveButton from '../../components/settings/SaveButton';
import PasswordChange from '../../components/settings/PasswordChange';
import { userState, themeState } from '../../State/userState';

// UI 수정!!
const SettingsPageBlock = styled(Responsive)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  outline: none;
`;

const ProfileBlock = styled.div`
  width: 50%;
  padding: 2rem 0;
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

  .profile-name {
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

  .content {
    width: 90%;

    .button-block {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

// 에러 핸들링은 나중에
export default function SettingContainer() {
  const userName = useRecoilValue(userState);
  const [user, setUser] = useRecoilState(registerState);
  const { form, auth, authError } = user;
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [tempTheme, setTempTheme] = useState(currentTheme);

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...form,
      [name]: value,
    });
  };

  // 일단 대충 중복시켜놨는데 나중에 확인
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if ([form.password, form.passwordConfirm].includes('')) {
    } else {
      alert('비밀번호가 변경되었습니다.');
      // alterPassword({ account, password: alterPassword });
      changePassword(form.account, form.password);
    }
    setCurrentTheme(tempTheme);
    window.location.reload();
  };

  const handleTempTheme = (e) => {
    setTempTheme(e.target.value);
  };

  return (
    <>
      <SettingsPageBlock>
        <ProfileBlock className="profile-img">
          <UploadFile />
        </ProfileBlock>
        <ProfileBlock>
          <div className="profile-name">Profile</div>
          <div className="content">
            <PasswordChange
              account={userName.account}
              form={form}
              onChange={onChange}
              onSubmit={onSubmit}
            />
            <Theme
              tempTheme={tempTheme}
              onChange={handleTempTheme}
              onSubmit={onSubmit}
            />
            <div className="button-block">
              <SaveButton onClick={onSubmit} />
            </div>
          </div>
        </ProfileBlock>
      </SettingsPageBlock>
    </>
  );
}
