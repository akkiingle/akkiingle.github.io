import React from "react";
import Marquee from "react-fast-marquee";
import { theme } from "./theme.skills";
import "./Skills.css";
import { skillsImage } from "./skillsImage";
import { Box, Hide, Image } from "@chakra-ui/react";

function Skills() {
  const skillsData = ["HTML", "Javascript", "CSS", "React", "typescript"];
  const skillsData1 = ["MongoDB", "canva", "bootstrap"];

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <Box
      id="skills"
      border="1px solid red"
      // className="skills1"
      height={{ base: "", md: "", lg: "800px" }}
      p="122px 5% 20px 5%"
      bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
    >
      <div className="skillsHeader">
        <h2>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <Box className="skill--box" 
              key={id} 
              // style={skillBoxStyle}
              // border="1px solid"
              mr="20px"
              w="100px"
              >
                <Image
                  h="60px"
                  pointerEvents="none"
                  src={skillsImage(skill)}
                  alt={skill}
                  margin="auto"
                />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </Box>
            ))}
          </Marquee>
          {/* <Hide below="md"> */}
          <Marquee
            gradient={false}
            speed={80}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {skillsData1.map((skill, id) => (
              <Box className="skill--box" key={id} 
              // style={skillBoxStyle}
              mr="20px"
              >
                <Image
                  h="60px"
                  pointerEvents="none"
                  src={skillsImage(skill)}
                  alt={skill}
                  margin="auto"
                />
                <h3>{skill}</h3>
              </Box>
            ))}
          </Marquee>
          {/* </Hide> */}
        </div>
      </div>
    </Box>
  );
}

export default Skills;
