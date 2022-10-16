import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import React from "react";
import { Box } from "@chakra-ui/react";

const AllContent = () => {
  return (
    <Box
      w="100%"
      // backgroundImage="https://t3.ftcdn.net/jpg/02/74/63/90/360_F_274639050_ddLeyFuQGwEjtTP0e2Y9ZZesSo2Mj6JD.jpg"
      // backgroundImage="https://i.pinimg.com/736x/2a/3e/f1/2a3ef19eafa2e5fafb5b5523e0591da1.jpg"
      // -webkit-filter= "blur(8px)"
      bg="#2B3856"
    >
      <Home />
      <Box
        bg="#E7E8D1"
        h="7px"
        width="90%"
        margin="auto"
        borderRadius="20px 20px"
        mt="50px"
      ></Box>
      <About />
      <Box
        bg="#E7E8D1"
        h="7px"
        width="90%"
        margin="auto"
        borderRadius="20px 20px"
        mt="50px"
      ></Box>
      <Skills />
      <Box
        bg="#E7E8D1"
        h="7px"
        width="90%"
        margin="auto"
        borderRadius="20px 20px"
        mt="50px"
      ></Box>
      <Project />
      <Box
        bg="#E7E8D1"
        h="7px"
        width="90%"
        margin="auto"
        borderRadius="20px 20px"
        mt="50px"
      ></Box>
      <Contact />
    </Box>
  );
};

export default AllContent;
