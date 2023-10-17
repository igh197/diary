import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import Header from '../common/Header';

const SettingsPageBlock = styled(Responsive)`
  width: 100%;
  padding: 50px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SettingButton = styled(Button)`
  text-align: left;
  margin: 10px 20px;

  font-size: 1.2rem;
  font-weight: 500;
`;

const ProfileBlock = styled.div`
  margin: 0 10px;
  background: ${(props) => props.theme.settingContent};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.settingBorder};

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0 0 30px 0;

    font-weight: 1000;
    color: ${(props) => props.theme.subtext};
  }

  &.category {
    width: 516px;
    height: 315px;
    padding: 50px;

    text-align: left;

    span {
      font-size: 1.3rem;
    }
  }

  &.profile {
    width: 746px;

    span {
      font-size: 1.5rem;
    }
  }
`;

export default function UserTemplate({ children }) {
  return (
    <>
      <Header />
      <SettingsPageBlock>
        <ProfileBlock className="category">
          <span>정보 수정</span>
          <SettingButton to="/user">내 정보 수정</SettingButton>
          <SettingButton to="/user/theme">테마 설정</SettingButton>
        </ProfileBlock>
        {children}
      </SettingsPageBlock>
    </>
  );
}
