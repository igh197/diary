import styled from 'styled-components';
import Button from '../common/Button';
// import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { HiScissors, HiX, HiCheck } from 'react-icons/hi';
import Responsive from '../common/Responsive';
import Editor from './Editor';

const WriteBlock = styled(Responsive)`
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
  title,
  body,
  onChangeField,
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
      <Editor title={title} body={body} onChangeField={onChangeField} />
      <div className="side-button">
        <Button onClick={onCancel} $circle="true">
          <HiX />
        </Button>
        <Button $circle="true">
          <FiChevronRight />
        </Button>
        <Button onClick={onPublish} $circle="true">
          {isEdit ? <HiScissors /> : <HiCheck />}
        </Button>
      </div>
    </WriteBlock>
  );
}
