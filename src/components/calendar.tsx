import { useRef } from "react";
import styled from "styled-components";
import Light from "./light";

type CalendarPropsType = {
  backgroundColor?: string;
  color?: string;
  lightColor?: string;
};

const calendarDays = [
  30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const Calendar = ({ backgroundColor, color }: CalendarPropsType) => {
  const calendarContainerRef = useRef<HTMLDivElement>(null);

  return (
    <StyledContainer backgroundColor={backgroundColor} color={color}>
      <StyledCalendarContainer ref={calendarContainerRef}>
        {calendarDays.map((d, k) => {
          return <StyledCalendarDays key={k}>{d}</StyledCalendarDays>;
        })}
        <Light containerRef={calendarContainerRef} />
      </StyledCalendarContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  backgroundColor?: string;
  color?: string;
}>`
  background-color: ${(props) => props.backgroundColor || "#262626"};
  color: ${(props) => props.color || "#e5e5e5"};
  padding: 15px;
  border-radius: 6px;
  z-index: 0;
`;

const StyledCalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1f);
  background-color: inherit;
  color: inherit;
  gap: 2px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const StyledCalendarDays = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: inherit;
  position: relative;
  z-index: 5;
  pointer-events: none;
`;

export default Calendar;
