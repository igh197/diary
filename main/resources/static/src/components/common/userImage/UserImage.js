import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../Button';
import UserImageModal from './UserImageModal';
import useModal from '../../hooks/useModal';

const UserImageButton = styled(Button)`
  height: 7rem;
  width: 7rem;
  display: inline-Button; // 이거 왜 있어?
  border-radius: 100%;
  background: ${palette.gray[0]};

  ${(props) =>
    props.$shrink &&
    css`
      height: 2rem;
      width: 2rem;
      margin-right: 0.5rem;
    `}
`;

// 이미지 올리기
export default function UserImage({ userImage, shrink = false }) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <UserImageButton $circle="true" $shrink={shrink} onClick={open} />
      {isOpen && <UserImageModal close={close} />}
    </>
  );
}
