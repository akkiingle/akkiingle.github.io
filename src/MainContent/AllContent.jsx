import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import React from "react";
import { Box } from "@chakra-ui/react";
import Github from "./Github";
import Skills11 from "./Skills/Skills11";

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
    >
      <Home />
      <About />
      <Skills11 />
      <Project />
      <Github/>
      <Contact />
    </Box>
  );
};

export default AllContent;
