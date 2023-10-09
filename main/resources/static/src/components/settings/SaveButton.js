import Button from '../common/Button';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Save = styled(Button)`
  width: 9rem;
  height: 3rem;
  border-radius: 5px;
  box-shadow: 0 3px 2px ${palette.gray[0]};
  background: white;
  color: black;
`;

export default function SaveButton({ onClick }) {
  return <Save onClick={onClick}>Save</Save>;
}
