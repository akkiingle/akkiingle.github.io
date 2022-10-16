import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Grid
      templateColumns={{ lg: "40% 40%", md: "100%" }}
      w="80%"
      margin="auto"
      mt="90px"
      columnGap="20%"
      // h="99vh"
    >
      <Box id="about" color="#E7E8D1" bg="#2B3856" textAlign="left">
        <Text fontSize="70" fontFamily="ComforterBrush" fontWeight="600">Who I am</Text>
        <Text
          textAlign="justify"
          // w="50%"
          margin="auto"
          fontFamily="Roboto Flex"
          fontSize="20px"
          lineHeight="40px"
        >
          My name's Akshay. I'm a full-stack web-developer. I am a B.Tech graduate in Mechanical. I love exploring new
          technologies in the field of Web Development and always try to adapt
          to it.I believe in the concept of continuous learning by regularly
          upgrading my skills and enhancing my knowledge.I have learned MERN
          stack, data structures, algorithms, and soft skills at Masai
          School. As a developer, my hunger for learning has drastically increased. And I
          want to centralize my skills and learning for enhancement of an
          organization and more of it, to enhance my career.
        </Text>
      </Box>
      <Box>
        <Image src="https://abhishekdewanganportfolio.netlify.app/static/media/blueTheme-boy.b2f186cb.svg"></Image>
      </Box>
    </Grid>
  );
};

export default About;
