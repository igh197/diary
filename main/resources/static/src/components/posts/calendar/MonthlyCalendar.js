import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { Link } from "react-router-dom";

const MonthlyCalendarBlock = styled.div`
  width: 100%;
  display: inline-block;
  justify-content: column;
  height: 37rem;
  padding: 2rem;
  background: ${(props) => props.theme.content};
  color: ${(props) => props.theme.text2};
  margin-bottom: 3rem;
`;

const CalendarBlock = styled.div`
  .react-calendar {
    display: inline;
    background: none;
    width: 100%;
    border: 0;
  }
  .react-calendar__navigation {
    display: inline-block;
    justify-content: left;
    margin-bottom: 3rem;

    .react-calendar__navigation__label {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  button {
    padding: 1rem;
    border: 0;
    color: ${(props) => props.theme.text2};
    font-family: ${(props) => props.theme.fontFamily};
    height: 4rem;

    &:hover {
      background-color: ${palette.gray[0]};
    }

    &:active {
      background-color: #a5c1a5;
    }
  }
  .react-calendar__tile {
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.text2};
  }
  .react-calendar__month-view__weekdays {
    abbr {
      /*월,화,수... 글자 부분*/
      font-size: 1.4rem;
      font-weight: 500;
      text-decoration: none;
    }
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid ${(props) => props.theme.text2};
    border-top: 1px solid ${(props) => props.theme.text2};
  }
`;

export default function MonthlyCalendar() {
  return (
    <MonthlyCalendarBlock>
      <CalendarBlock>
        <Calendar calendarType="hebrew" />
      </CalendarBlock>
    </MonthlyCalendarBlock>
  );
}
