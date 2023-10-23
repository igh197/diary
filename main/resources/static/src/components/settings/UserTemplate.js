import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const SettingsPageBlock = styled(Responsive)`
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SettingButton = styled(Button)`
  text-align: left;
  margin: 10px 0px;

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
      padding: 0 0 30px 0;
      border-bottom: 1px solid ${palette.gray[0]};
      font-size: 1.3rem;
    }
  }
`;

export default function UserTemplate({ children }) {
  return (
    <SettingsPageBlock>
      <ProfileBlock className="category">
        <span>마이페이지</span>
        <SettingButton to="/user">내 정보</SettingButton>
        <SettingButton to="/user/theme">테마 설정</SettingButton>
      </ProfileBlock>
      {children}
    </SettingsPageBlock>
  );
}
