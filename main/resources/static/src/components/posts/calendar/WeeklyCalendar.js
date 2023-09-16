import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const WeeklyCalendarBlock = styled.div`
  background: ${(props) => props.theme.content};
  width: 100%;
  height: 10rem;
  text-align: center;
  color: ${(props) => props.theme.text2};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); // 추후 수정
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  div + div {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const WeeklyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  div + div {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  border-top: 2px solid #f86f6f;
`;

const DayBlock = styled(WeeklyBlock)`
  background: white; // 나중에 props 적용
  border: none;
  width: 6rem;
  height: 6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); // 추후 수정

  // &:hover {
  //   background: ${palette.gray[0]};
  //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); // 추후 수정
  // }
`;

const BsArrowLeftBlock = styled(BsArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.text};
`;

const BsArrowRightBlock = styled(BsArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.text};
`;

export default function WeeklyCalendar() {
  return (
    <WeeklyCalendarBlock>
      <div>Calendar</div>
      <WeeklyBlock>
        <Button>
          <BsArrowLeftBlock />
        </Button>
        <DayBlock>
          <Button circle="true">+</Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <DayBlock>
          <Button></Button>
        </DayBlock>
        <Button>
          <BsArrowRightBlock />
        </Button>
      </WeeklyBlock>
    </WeeklyCalendarBlock>
  );
}
