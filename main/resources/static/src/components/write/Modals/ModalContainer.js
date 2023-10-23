import { useState } from 'react';
import ImageModal from './ImageModal';
import Button from '../../common/Button';
import HeaderContainer from '../../../containers/header/HeaderContainer';

export default function ModalContainer({
  onPublish,
  onChangeEmoji,
  tempEmoji,
}) {
  const [firstModal, setFirstModal] = useState(false);

  const handleFirstModal = () => {
    setFirstModal(!firstModal);
  };

  return (
    <>
      <HeaderContainer />
      <Button $done="true" onClick={handleFirstModal}>
        저장
      </Button>
      {firstModal && (
        <ImageModal
          onPublish={onPublish}
          onChange={onChangeEmoji}
          tempEmoji={tempEmoji}
        />
      )}
    </>
  );
}
