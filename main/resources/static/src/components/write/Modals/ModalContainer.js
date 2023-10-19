import { useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal';
import Button from '../../common/Button';
import Header from '../../common/Header';

const SaveButton = styled(Button)`
  width: 80px;
  height: 40px;
  background: ${(props) => props.theme.text};
  border-radius: 56px;

  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

export default function ModalContainer({ onPublish, isEdit }) {
  const [firstModal, setFirstModal] = useState(false);

  const handleFirstModal = () => {
    setFirstModal(!firstModal);
  };

  return (
    <>
      <Header />
      <SaveButton onClick={handleFirstModal}>저장</SaveButton>
      {firstModal && <ImageModal onPublish={onPublish} />}
    </>
  );
}
