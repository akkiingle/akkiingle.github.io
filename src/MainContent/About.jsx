import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Grid
      templateColumns={{ lg: "50% 30%", md: "90%",sm:"90%",base:"90%" }}
      margin="auto"
      columnGap="10%"
      h={{ base: "",lg:"99vh"}}
      bg="linear-gradient(135deg, rgba(15,77,92,1) 0%, rgba(15,77,92,1) 32%, rgba(41,50,65,1) 65%, rgba(41,50,65,1) 100%)"
      id="about"
      justifyContent="center"
      p="90px 5% 70px 5%"
      rowGap="20px"
    >
      <Box color="#e0fbfc" textAlign="left">
        <Text
          fontSize={{ base: "40px", md: "50px", lg: "70px" }}
          fontFamily="ComforterBrush"
          fontWeight="600"
          color="#f6bd60"
        >
         About Me
        </Text>
        <Text
          textAlign="justify"
          margin="auto"
          fontFamily="Roboto Flex"
          fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "20px" }}
          lineHeight={{ base: "25px", md: "30px", lg: "40px" }}
        >
          My name's Akshay. I'm a full-stack web-developer. I am a B.Tech
          graduate in Mechanical. I love exploring new technologies in the field
          of Web Development and always try to adapt to it.I believe in the
          concept of continuous learning by regularly upgrading my skills and
          enhancing my knowledge.I have learned MERN stack, data structures,
          algorithms, and soft skills at Masai School. As a developer, my hunger
          for learning has drastically increased. And I want to centralize my
          skills and learning for enhancement of an organization and more of it,
          to enhance my career.
        </Text>
      </Box>
      <Box>
        <Image src="https://abhishekdewanganportfolio.netlify.app/static/media/blueTheme-boy.766e140d.svg"
          h={{base:"200px",md:"400px"}} margin="auto"></Image>
      </Box>
    </Grid>
  );
};

export default About;
