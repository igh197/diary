import styled from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import Edit from './Edit';
import ModalContainer from './Modals/ModalContainer';

const WriteBlock = styled(Responsive)`
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .side-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function WriteForm({
  onChangeField,
  title,
  content,
  onCancel,
  onPublish,
  isEdit,
}) {
  return (
    <WriteBlock>
      <Edit title={title} content={content} onChangeField={onChangeField} />
      <div className="side-button">
        <ModalContainer onClick={onPublish} isEdit={isEdit} />
      </div>
    </WriteBlock>
  );
}
