import { Flex } from "@chakra-ui/react";
import React from "react";
// import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak
    <Flex flexDirection="column" gap="20px" w="90%" justifyContent="center" m="auto">
      <div style={{ margin: "auto", border: "1px solid" }}>
        <a href="https://github.com/akkiingle">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=akkiingle"
          />
        </a>
      </div>

      <Flex
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
        flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}
        gap="20px"
      >
        <a href="https://github.com/akkiingle">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=akkiingle" //launguages
          />
        </a>
        <a href="https://github.com/akkiingle">
          <img 
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=akkiingle&count_private=true&show_icons=true" //stats
          />
        </a>
      </Flex>
    </Flex>
  );
};

export default Stats;
