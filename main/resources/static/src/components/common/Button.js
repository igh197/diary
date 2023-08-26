import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyle = css`
font-family: 'Playfair Display', serif;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0rem;
  color: black;
  outline: none;
  cursor: pointer;
  background: none;
  letter-spacing: 2px;
  margin-left: 1rem;

  &:hover {
    color: ${palette.gray[6]};
  }

  ${(props) =>
    props.$fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.$pink &&
    css`
      height: 4rem;
      font-size: 1.5rem;
      border-bottom: 2px solid ${palette.gray[5]};
      background: ${palette.pink[1]};
      color: #ffffff;
      text-shadow: 1px 1px 1px ${palette.pink[3]};
      &:hover {
        background: ${palette.pink[3]};
      }
    `}

  ${(props) =>
    props.$header &&
    css`
      margin-right: 5rem;
      margin-left: 7rem;
      font-size: 5rem;
      font-weight: bold;
      color: ${palette.pink[2]};
      text-shadow: -1px 0 ${palette.pink[3]}, 0 1px ${palette.pink[3]},
        1px 0 ${palette.pink[3]}, 0 -1px ${palette.pink[3]};
      display: block;
      &:hover {
        color: ${palette.pink[2]};
      }
    `}

  ${(props) =>
    props.$circle &&
    css`
      position: fixed;
      top: 60%;
      height: 70px;
      width: 70px;
      text-align: center;
      border-radius: 100px;
      border-bottom: 2px solid ${palette.gray[5]};
      color: ${palette.pink[2]};
      font-size: 3rem;
    `}

  ${(props) =>
    props.$left &&
    css`
      left: 10%;
    `}

    ${(props) =>
      props.$right &&
      css`
        right: 10%;
      `}

      ${(props) =>
        props.$cancle &&
        css`
          top: 40%;
          right: 10%;
        `}

    &:disabled {
      background: ${palette.gray[3]};
      color: ${palette.gray[5]};
      cursor: not-allowed;

`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
