import Home from "./Home";
import About from "./About";
import Skills from "../MainContent/Skills/Skills";
import Project from "./Project";
import Contact from "./Contact";
import React from "react";
import { Box } from "@chakra-ui/react";
import Github from "./Github";
import Skills11 from "./Skills11"

const style = {
  backgroundColor: "#2b2d42",
  height: "7px",
  width: "90%",
  margin: "auto",
  border:"1px solid",
  borderRadius: "20px 20px",
  // marginTop: "50px",
};

const AllContent = () => {
  return (
    <Box
      w="100%"
      position="relative" 
      // backgroundImage="https://t3.ftcdn.net/jpg/02/74/63/90/360_F_274639050_ddLeyFuQGwEjtTP0e2Y9ZZesSo2Mj6JD.jpg"
      // backgroundImage="https://i.pinimg.com/736x/2a/3e/f1/2a3ef19eafa2e5fafb5b5523e0591da1.jpg"
      // -webkit-filter= "blur(8px)"
      // bg="#edf2f4"
    >
      <Home />
      {/* <Box style={style} ></Box> */}
      <About />
      {/* <Box style={style} ></Box> */}
      <Skills11 />
      {/* <Box style={style} ></Box> */}
      <Project />
      {/* <Box style={style} ></Box> */}
      <Github/>
      <Contact />
    </Box>
  );
};

export default AllContent;
