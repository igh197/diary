import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0rem;
  color: ${(props) => props.theme.subtext};
  outline: none;
  cursor: pointer;
  background: none;
  letter-spacing: 1px;

  &:hover {
    color: ${palette.gray[0]};
  }

  ${(props) =>
    props.$save &&
    css`
      width: 9rem;
      height: 3rem;
      border-radius: 16px;
      box-shadow: 0 3px 2px ${palette.gray[0]};
      background: ${(props) => props.theme.text};

      color: white;
    `}

  ${(props) =>
    props.$done &&
    css`
      width: 80px;
      height: 40px;
      background: ${(props) => props.theme.text};
      border-radius: 56px;

      font-size: 1rem;
      font-weight: bold;
      color: white;
    `}
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
