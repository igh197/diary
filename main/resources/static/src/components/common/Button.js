import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyle = css`
font-family: ${(props) => props.theme.fontFamily};
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
    color: ${palette.gray[0]};
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
    props.$authButton &&
    css`
      height: 4rem;
      font-size: 1.5rem;
      border-bottom: 2px solid ${palette.gray[0]};
      background: ${(props) => props.theme.button};
      color: #ffffff;
      text-shadow: 1px 1px 1px ${palette.gray[0]};
      &:hover {
        background: ${palette.gray[0]};
      }
    `}

  ${(props) =>
    props.$header &&
    css`
      padding-right: 5rem;
      font-size: 5rem;
      font-weight: bold;
      color: ${(props) => props.theme.text};
      text-shadow: -1px 0 ${palette.gray[0]}, 0 1px ${palette.gray[0]},
        1px 0 ${palette.gray[0]}, 0 -1px ${palette.gray[0]};
      &:hover {
        color: ${palette.gray[0]};
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
      border-bottom: 2px solid ${palette.gray[0]};
      color: ${(props) => props.theme.text};
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
      background: ${palette.gray[0]};
      color: ${palette.gray[0]};
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
