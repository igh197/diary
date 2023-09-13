import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';

const ThemeBlock = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

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

const ImagePut = styled(ThemeBlock)`
  display: inline-block;
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
`;

export default function Theme({ onChange, currentTheme }) {
  const handleTheme = (newTheme) => {
    onChange(newTheme);
  };

  return (
    <ThemeBlock>
      <form>
        <input
          type="radio"
          name="theme"
          value="pinkTheme"
          onChange={() => handleTheme('pinkTheme')}
        />
        <input
          type="radio"
          name="theme"
          value="purpleTheme"
          onChange={() => handleTheme('purpleTheme')}
        />
        <input
          type="radio"
          name="theme"
          value="darkTheme"
          onChange={() => handleTheme('darkTheme')}
        />
      </form>
      <ImagePut />
      <ImagePut />
      <ImagePut />
      <Save>Save</Save>
    </ThemeBlock>
  );
}
