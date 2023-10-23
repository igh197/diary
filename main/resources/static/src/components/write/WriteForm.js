import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Edit from './Edit';
import ModalContainer from './Modals/ModalContainer';
import ToTop from '../common/ToTop';

const WriteBlock = styled(Responsive)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .explain-bar {
    width: 100%;
    height: 120px;
    padding: 30px 65px 20px 65px;
    box-shadow: 0px 23px 6px 0 rgba(0, 0, 0, 0),
      0px 14px 6px 0 rgba(0, 0, 0, 0.01), 0px 8px 5px 0 rgba(0, 0, 0, 0.05),
      0px 4px 4px 0 rgba(0, 0, 0, 0.09), 0px 1px 2px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .category {
    padding: 0 0 5px 0;

    font-size: 1.2rem;
    font-weight: 900;
    color: ${(props) => props.theme.text};
  }

  .subtitles {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.subtext};
  }
`;

export default function WriteForm({ onChangeField, onPublish, tempEmoji }) {
  return (
    <WriteBlock>
      <div className="explain-bar">
        <div>
          <div className="category">일기 작성</div>
          <div className="subtitles">
            {/* Dinary가 일기를 기반으로 감정을 분석해드릴게요! - 수정 선택에 대한 설명 필요 */}
            오늘 하루, 어떤 감정이 제일 기억에 남나요?
          </div>
        </div>
        <ModalContainer
          onPublish={onPublish}
          onChangeEmoji={onChangeField}
          tempEmoji={tempEmoji}
        />
      </div>
      <Edit onChangeField={onChangeField} />
      <ToTop />
    </WriteBlock>
  );
}
