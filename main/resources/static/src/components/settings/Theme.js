import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';
import { useState } from 'react';
import { themeState } from '../../State/userState';
import { useRecoilState } from 'recoil';

const ThemeBlock = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .radio {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ThemeRadioBox = styled.div`
  input {
    vertical-align: middle;
    appearance: none;
    background: white;
    box-shadow: 0 0 0 1px ${palette.gray[0]};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2rem;

    &:checked {
      background: black;
      border: 3.5px solid white;
      box-shadow: 0 0 0 1px ${palette.gray[0]};
    }
  }
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ImagePut = styled(ImageBlock)`
  width: 10rem;
  height: 15rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  background: ${palette.gray[0]};
  margin-bottom: 2rem;
`;

const Save = styled(Button)`
  width: 9rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 0 3px 2px ${palette.gray[0]};
  background: white;
  color: black;
`;

export default function Theme() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [tempTheme, setTempTheme] = useState(currentTheme);

  const handleTempTheme = (newTheme) => {
    setTempTheme(newTheme);
  };

  const handleTheme = () => {
    setCurrentTheme(tempTheme);
    window.location.reload();
  };

  const themesInput = ['pinkTheme', 'purpleTheme', 'darkTheme'];

  return (
    <ThemeBlock>
      <form className="radio">
        {themesInput.map((theme, index) => (
          <ThemeRadioBox key={index}>
            <input
              type="radio"
              name="theme"
              value={theme}
              checked={tempTheme === theme}
              onChange={() => handleTempTheme(theme)}
            />
          </ThemeRadioBox>
        ))}
      </form>
      <ImageBlock>
        <ImagePut />
        <ImagePut />
        <ImagePut />
      </ImageBlock>
      <Save onClick={() => handleTheme(tempTheme)}>Save</Save>
    </ThemeBlock>
  );
}
