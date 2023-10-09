import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ProfileContent = styled.div`
  width: 90%;
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
    font-size: 1.5rem;
    color: ${palette.gray[0]};
    background: white;
  }

  input {
    color: ${palette.gray[0]};
    font-size: 1.5rem;
    width: 25rem;
    height: 3.5rem;
    border: none;
    &:focus {
      outline: none;
      border-radius: 4px;
      border: 2px solid ${palette.gray[0]};
      color: #0ca678;
    }
  }
`;

export default function PasswordChange({ account, form, onChange, onSubmit }) {
  return (
    <>
      <ProfileContent>
        ID : <span>{account}</span>
      </ProfileContent>
      <form onSubmit={onSubmit}>
        <ProfileContent>
          PW :
          <input
            name="password"
            placeholder="비밀번호 변경"
            onChange={onChange}
            value={form.password}
          />
        </ProfileContent>
        <ProfileContent>
          PW :
          <input
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        </ProfileContent>
      </form>
      {/* 나중에 수정해줘 */}
      <ProfileContent>Change Theme</ProfileContent>
    </>
  );
}
