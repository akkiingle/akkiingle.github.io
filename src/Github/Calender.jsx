import { Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    
      <Flex w="90%" justifyContent="center"  m="auto" mb="20px">
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="akkiingle"
        transformData={selectLastHalfYear}
        blockSize={14}
        fontSize={16}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
      </Flex>
    
  );
};

export default Calender;