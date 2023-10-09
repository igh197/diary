import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { Link } from "react-router-dom";

const MonthlyCalendarBlock = styled.div`
  width: 70%;
  height: 40rem;
  margin-right: 1rem;

  color: ${(props) => props.theme.text2};

  .main-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
    padding-left: 0.5rem;

    font-size: 1rem;
  }

  .main-header > div:first-child {
    font-weight: bold;
    margin-right: 1rem;
  }
`;

const CalendarBlock = styled.div`
  background: white;
  border-radius: 13px;
  font-family: ${(props) => props.theme.fontFamily};
  .react-calendar {
    display: flex;
    flex-direction: column;
    background: none;
    width: 100%;
    border: 0;
    padding: 2rem;
  }
  .react-calendar__navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    .react-calendar__navigation__label {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.001;
      font-size: 1rem;
    }
  }
  button {
    border: 0;
    color: black;
    height: 5rem;

    &:hover {
      background-color: ${palette.gray[0]};
    }

    &:active {
      background-color: ${palette.gray[0]};
    }
  }
  .react-calendar__tile {
    font-size: 1rem;
    text-align: center;
  }
  .react-calendar__month-view__weekdays {
    abbr {
      /*월,화,수... 글자 부분*/
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      color: black;
    }
    align-items: center;
    border-top: 1px solid ${palette.gray[0]};
  }
`;

export default function MonthlyCalendar() {
  return (
    <MonthlyCalendarBlock>
      <div className="main-header">
        <div>감정달력</div>
        <div>일기를 쓰고 기분구슬을 모아보세요!</div>
      </div>
      <CalendarBlock>
        <Calendar calendarType="hebrew" />
      </CalendarBlock>
    </MonthlyCalendarBlock>
  );
}
