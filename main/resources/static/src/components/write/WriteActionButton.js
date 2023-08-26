import styled from 'styled-components';
import Button from '../common/Button';
import { HiScissors, HiX, HiCheck } from 'react-icons/hi';

const WriteActionButtonBlock = styled.div`
  position: fixed;
  top: 20%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-top: 8rem;
  }
`;

// /* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */
// const StyledButton = styled(Button)`
//   height: 3rem;
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;

const WriteActionButton = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <Button onClick={onCancel} $circle="true" $cancle="true">
        <HiX />
      </Button>
      <Button onClick={onPublish} $circle="true" $right="true">
        {isEdit ? <HiScissors /> : <HiCheck />}
      </Button>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
