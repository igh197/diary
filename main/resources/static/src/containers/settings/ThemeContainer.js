import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import UserTemplate from '../../components/settings/UserTemplate';
import Theme from '../../components/settings/Theme';
import { themeState } from '../../State/userState';

const ContentBlock = styled.div`
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

export default function ThemeContainer() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [tempTheme, setTempTheme] = useState(theme);

  const handleCheck = (e) => {
    setTempTheme(e.target.name);
  };

  const onClick = () => {
    setTheme(tempTheme);
    localStorage.setItem('theme', tempTheme);
    // window.location.reload();
  };

  return (
    <UserTemplate>
      <ContentBlock>
        <Theme tempTheme={theme} onClick={onClick} handleCheck={handleCheck} />
      </ContentBlock>
    </UserTemplate>
  );
}
