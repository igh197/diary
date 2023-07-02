import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
    `}

  ${(props) =>
    props.pink &&
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
      props.x &&
      css`
      position: relative;
      top: 5rem;
      left: 65rem;
      padding: 1rem 1.5rem;
      height: 5rem;
      weight: 5rem;
      font-size: 2rem;
      border-radius: 50%;
      background: #ffffff;
      color: ${palette.pink[4]};
      border-bottom: 1px solid ${palette.gray[5]};
      &:hover {
        background: ${palette.gray[4]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
