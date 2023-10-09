import palette from '../../lib/styles/palette';
import styled from 'styled-components';

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

export default function Theme({ tempTheme, onChange, onSubmit }) {
  const themesInput = ['pinkTheme', 'purpleTheme', 'darkTheme'];

  return (
    <ThemeBlock>
      <form className="radio" onSubmit={onSubmit}>
        {themesInput.map((theme, index) => (
          <ThemeRadioBox key={index}>
            <input
              type="radio"
              name="theme"
              value={theme}
              checked={tempTheme === theme}
              onChange={onChange}
            />
          </ThemeRadioBox>
        ))}
      </form>
      <ImageBlock>
        <ImagePut />
        <ImagePut />
        <ImagePut />
      </ImageBlock>
    </ThemeBlock>
  );
}
