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
  color: ${(props) => props.theme.text3};
  outline: none;
  cursor: pointer;
  background: none;
  letter-spacing: 2px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

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
    props.$header &&
    css`
      font-family: ${(props) => props.theme.titleFont};
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
      background: white;
      height: 5rem;
      width: 5rem;
      border-radius: 100%;
      border-bottom: 2px solid ${palette.gray[0]};
      color: ${(props) => props.theme.text};
      font-size: 3rem;
      margin: 5rem;
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
