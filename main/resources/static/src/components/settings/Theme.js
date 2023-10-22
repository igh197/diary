import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const ThemeBlock = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 12rem;
    height: 18rem;
    margin: 12px 15px;
    border-radius: 16px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: 5px solid blue;
    }
  }

  .check {
    width: 24px;
    height: 24px;
    margin: 0;

    z-index: 2;

    position: absolute;
    transform: translate(790%, 10%);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 40px 0 0 0;

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

export default function Theme({ tempTheme, onClick, handleCheck }) {
  const themesInput = ['basicTheme', 'greenTheme', 'darkTheme'];
  const check = document.activeElement.name;

  return (
    <ThemeBlock>
      <span>테마 선택</span>
      <ImageBlock>
        {themesInput.map((theme, index) => {
          return (
            <div key={theme}>
              {check === theme ? (
                <img
                  src="/images/User/Check.svg"
                  alt="check"
                  className="check"
                />
              ) : null}
              <img
                name={theme}
                src={`/images/Background/Login${index + 1}.png`}
                alt="theme"
                tabIndex="0"
                onFocus={handleCheck}
              />
            </div>
          );
        })}
      </ImageBlock>
      <Footer>
        <Save onClick={onClick}>수정하기</Save>
      </Footer>
    </ThemeBlock>
  );
}
