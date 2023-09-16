import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';
import { useState } from 'react';

const ThemeBlock = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeRadioBox = styled.div`
  display: inline-block;
  justify-content: row;
  input {
    vertical-align: middle;
    appearance: none;
    background: white;
    box-shadow: 0 0 0 1px ${palette.gray[0]};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2rem;
    margin-right: 6rem;
    margin-left: 6rem;

    &:checked {
      background: black;
      border: 3.5px solid white;
      box-shadow: 0 0 0 1px ${palette.gray[0]};
    }
  }
`;

const ImageBlock = styled.div`
  display: inline-block;
  justify-content: row;
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

export default function Theme({ onChange, currentTheme }) {
  const [tempTheme, setTempTheme] = useState(currentTheme);

  const handleTempTheme = (newTheme) => {
    setTempTheme(newTheme);
  };

  const handleTheme = () => {
    onChange(tempTheme);
  };

  const themesInput = ['pinkTheme', 'purpleTheme', 'darkTheme'];

  return (
    <ThemeBlock>
      <form>
        {themesInput.map((theme, index) => (
          <ThemeRadioBox key={index}>
            <input
              type="radio"
              name="theme"
              value={theme}
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
