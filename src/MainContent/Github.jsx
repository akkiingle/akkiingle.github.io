import React from 'react';
import { Box } from "@chakra-ui/react";
import Calender from "../Github/Calender";
import Stats from "../Github/Stats";

const Github = () => {
  return (
    <Box
      height="800px"
      // border="1px solid red"
      color="#e0fbfc"
      p="122px 5% 20px 5%"
      bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
      // bg="linear-gradient(45deg, rgba(41,50,65,1) 0%, rgba(41,50,65,1) 35%, rgba(15,77,92,1) 68%, rgba(15,77,92,1) 100%)"
    >
      <Calender />
      <Stats />
    </Box>
  );
}

export default Github;
