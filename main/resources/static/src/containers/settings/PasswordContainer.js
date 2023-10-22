import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import UserTemplate from '../../components/settings/UserTemplate';
import PasswordChange from '../../components/settings/PasswordChange';
import { userProfileState } from '../../State/userState';
import { passwordState } from '../../State/authState';
import { changePassword } from '../../lib/api/auth';
import { postUserImage } from '../../lib/api/user';

const ContentBlock = styled.div`
  width: 746px;
  margin: 0 10px;
  background: ${(props) => props.theme.settingContent};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.settingBorder};

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0 0 30px 0;

    font-size: 1.5rem;
    font-weight: 1000;
    color: ${(props) => props.theme.subtext};
  }
`;

export default function PasswordContainer() {
  const [profile, setProfile] = useRecoilState(userProfileState);
  const [user, setUser] = useRecoilState(passwordState);
  const { form, auth, authError } = user;
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ([form.password, form.passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
    } else if (form.password === form.passwordConfirm) {
      changePassword(profile.account, form.password);
      try {
        setUser({
          ...user,
          auth: true,
        });
      } catch (e) {
        setUser({
          ...user,
          authError: true,
        });
      }
    } else {
      setError('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.');
    }
  };

  useEffect(() => {
    if (auth) {
      alert('비밀번호가 변경되었습니다.');
    }
    if (authError) {
      alert('비밀번호 변경에 실패했습니다.');
    }
  }, [auth, authError]);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const correctForm = /(.*?)\.(jpg|gif|png|jpeg|bmp|tif|heic|)$/;
    if (file.size > 1024 * 1024 * 10) {
      alert('10MB 이상의 이미지는 업로드 할 수 없습니다.');
      return;
    }
    if (!file.name.match(correctForm)) {
      alert(
        '이미지 파일만 업로드가 가능합니다. (*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic)',
      );
    } else {
      setProfile({
        ...profile,
        userImage: imageUrl,
      });
    }

    postUserImage(profile.account, imageUrl);
    try {
      // 여기에서 막힌다.
      // 원래는 selector에 적어야 하는데 오류 생겨서 여기에 저장 확인 후 수정
      localStorage.setItem('user-image', imageUrl);
      console.log(profile.userImage);
      window.location.reload();
    } catch (e) {
      console.log('localStorage is not working');
    }
  };

  return (
    <UserTemplate>
      <ContentBlock>
        <PasswordChange
          onChange={onChange}
          onUpload={onUpload}
          profile={profile}
          onSubmit={onSubmit}
          form={form}
          error={error}
        />
      </ContentBlock>
    </UserTemplate>
  );
}
