import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';
import { BsArrowLeft, BsArrowRight, BsPlusLg } from 'react-icons/bs';

const WeeklyCalendarBlock = styled.div`
  background: ${(props) => props.theme.content};
  width: 100%;
  text-align: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); // 추후 수정
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;

  p {
    color: ${(props) => props.theme.text2};
    padding-bottom: 0.5rem;
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.weeklyLine};
  }
`;

const WeeklyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DayBlock = styled(WeeklyBlock)`
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: ${(props) => props.theme.weeklyContent};
  border: 1px solid black;
  width: 8rem;
  height: 8rem;
  text-align: left;

  span {
    margin-right: auto;
    padding-left: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.weeklyText};
  }

  // &:hover {
  //   background: ${palette.gray[0]};
  //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); // 추후 수정
  // }
`;

const BsArrowLeftBlock = styled(BsArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.text2};
`;

const BsArrowRightBlock = styled(BsArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.text2};
`;

const BsPlusLgBlock = styled(BsPlusLg)`
  width: 4rem;
  height: 4rem;
  color: ${(props) => props.theme.weeklyColor};
`;

const EmotionButton = styled(Button)`
  width: 6rem;
  height: 6rem;
  margin-bottom: 0.5rem;
  padding-top: 0.5rem; // 이거 왜 수직 안 맞지?
  background: ${(props) => props.theme.weeklyEmoji};
  border-radius: 100px;
  box-shadow: 2px 2px 3px ${palette.gray[0]};
`;

export default function WeeklyCalendar() {
  const emojis = [
    {
      id: 'Mon',
      emoji: '',
    },
    {
      id: 'Tue',
      emoji: '',
    },
    {
      id: 'Wed',
      emoji: '',
    },
    {
      id: 'Thu',
      emoji: '',
    },
    {
      id: 'Fri',
      emoji: '',
    },
    {
      id: 'Sat',
      emoji: '',
    },
    {
      id: 'Sun',
      emoji: '',
    },
  ];

  return (
    <WeeklyCalendarBlock>
      <p>Calendar</p>
      <WeeklyBlock>
        <Button>
          <BsArrowLeftBlock />
        </Button>
        {emojis.map((item) => (
          <DayBlock key={item.id}>
            <span>{item.id}</span>
            <EmotionButton>
              {item.emoji ? item.emoji : <BsPlusLgBlock />}
            </EmotionButton>
          </DayBlock>
        ))}
        <Button>
          <BsArrowRightBlock />
        </Button>
      </WeeklyBlock>
    </WeeklyCalendarBlock>
  );
}
