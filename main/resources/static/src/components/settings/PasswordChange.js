import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import UploadFile from './UploadFile';

const Wrapper = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  form {
    margin: 0 0 40px 0;

    p {
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme.subtext};
    }
  }
`;

const ProfileContent = styled.div`
  width: 100%;
  margin: 20px 10px;

  display: flex;
  text-align: left;

  font-size: 1.5rem;
  color: ${(props) => props.theme.text};

  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 0 0 20px;
    background: ${(props) => props.theme.settingPassword};
    border-radius: 16px;
    border: 1px solid #d6d6d6;

    font-size: 1rem;

    ::placeholder {
      color: ${(props) => props.theme.placeholder};
    }

    &:focus {
      outline: none;
      border: 2px solid ${palette.gray[0]};
      color: ${(props) => props.theme.text};
    }
  }

  ${(props) =>
    props.$error &&
    css`
      margin: 20px 10px -20px 10px;
    `}
`;

const ErrorBlock = styled.div`
  width: 100%;
  margin: 0 0 30px 0;

  text-align: center;

  color: red;
`;

const Footer = styled.div`
  width: 100%;
  height: 3rem;

  text-align: right;
`;

const Save = styled(Button)`
  width: 9rem;
  height: 3rem;
  border-radius: 16px;
  box-shadow: 0 3px 2px ${palette.gray[0]};
  background: ${(props) => props.theme.text};

  color: white;
`;

export default function PasswordChange({
  profile,
  form,
  onChange,
  onSubmit,
  onUpload,
  error,
}) {
  return (
    <Wrapper>
      <span>내 정보 수정</span>
      <UploadFile profile={profile} onUpload={onUpload} />
      <form onSubmit={onSubmit}>
        <p>비밀번호 :</p>
        <ProfileContent>
          <input
            name="password"
            autoComplete="password"
            placeholder="변경할 비밀번호를 입력해 주세요."
            onChange={onChange}
            value={form.password}
            type="password"
          />
        </ProfileContent>
        <p>비밀번호 확인 :</p>
        <ProfileContent $error={error || null}>
          <input
            name="passwordConfirm"
            autoComplete="new-password"
            placeholder="변경할 비밀번호를 한번 더 입력해 주세요."
            onChange={onChange}
            value={form.passwordConfirm}
            type="password"
          />
        </ProfileContent>
      </form>
      {error && <ErrorBlock>{error}</ErrorBlock>}
      <Footer>
        <Save onClick={onSubmit}>수정하기</Save>
      </Footer>
    </Wrapper>
  );
}
