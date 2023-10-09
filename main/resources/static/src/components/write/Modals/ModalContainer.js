import { useState } from 'react';
import ImageModal from './ImageModal';
import Button from '../../common/Button';
import { HiScissors, HiCheck } from 'react-icons/hi';

export default function ModalContainer({ onPublish, isEdit }) {
  const [firstModal, setFirstModal] = useState(false);

  const handleFirstModal = () => {
    setFirstModal(!firstModal);
  };

  return (
    <>
      <Button $circle="true" onClick={handleFirstModal}>
        {isEdit ? <HiScissors /> : <HiCheck />}
      </Button>
      {firstModal && <ImageModal onPublish={onPublish} />}
    </>
  );
}
