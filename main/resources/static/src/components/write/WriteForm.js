import styled from 'styled-components';
import Button from '../common/Button';
// import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
import Responsive from '../common/Responsive';
import Editor from './Editor';
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
  onChange,
  title,
  body,
  onCancel,
  onPublish,
  isEdit,
}) {
  return (
    <WriteBlock>
      <div className="side-button">
        <Button $circle="true">
          <FiChevronLeft />
        </Button>
      </div>
      <Editor title={title} body={body} onChange={onChange} />
      <div className="side-button">
        <Button onClick={onCancel} $circle="true">
          <HiX />
        </Button>
        <Button $circle="true">
          <FiChevronRight />
        </Button>
        <ModalContainer onClick={onPublish} isEdit={isEdit} />
      </div>
    </WriteBlock>
  );
}
