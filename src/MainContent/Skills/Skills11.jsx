import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { skillsImage } from "./skillsImage";

const Skills11 = () => {
  const frontend = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Typescript",
    "Redux",
    "ChakraUI",
  ];
  const backend = ["MongoDB", "nodeJS", "Express", "AWS"];
  const tools = ["Git", "Replit", "VSCode", "Postman"];

  const style = {
    boxShadow: " 0px 10px 20px rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "300ms ease-in-out",
    _hover: {
      transform: "scale(1.15)",
    },
  };

  return (
    <Box
      id="skills"
      color="#e0fbfc"
      p={{ base: "50px 5% 20px 5%", md: "80px 5% 20px 5%" }}
      bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
    >
      <Text
        fontSize={{ base: "20px", md: "30px", lg: "50px" }}
        fontFamily="ComforterBrush"
        fontWeight="600"
        // color="#f6bd60"
        color="#01172f"
      >
        Skills
      </Text>

      <Box w="80%" margin="auto" mb="20px">
        <Text mb="10px" fontSize="25px" textAlign="left">
          FrontEnd
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(6,1fr)",
          }}
          gap="2%"
          justifyContent="center"
        >
          {frontend.map((skill, id) => (
            <Box
              style={style}
              key={id}
              p={{ base: "5px 0", sm: "10px 0", lg: "20px 0" }}
            >
              <Image
                h={{ base: "25px", md: "30px", lg: "50px" }}
                pointerEvents="none"
                src={skillsImage(skill)}
                alt={skill}
                margin="auto"
                mb="5px"
              />
              <Text fontSize={{ base: "11px", lg: "16px" }}>{skill}</Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box w="80%" margin="auto" mb="20px">
        <Text mb="10px" fontSize="25px" textAlign="left">
          BackEnd
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(6,1fr)",
          }}
          // border="1px solid brown"
          gap="2%"
          justifyContent="center"
        >
          {backend.map((skill, id) => (
            <Box
              key={id}
              style={style}
              p={{ base: "5px 0", sm: "10px 0", lg: "20px 0" }}
            >
              <Image
                h={{ base: "25px", md: "30px", lg: "50px" }}
                pointerEvents="none"
                src={skillsImage(skill)}
                alt={skill}
                margin="auto"
              />
              <Text fontSize={{ base: "11px", lg: "16px" }}>{skill}</Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box w="80%" margin="auto" mb="20px">
        <Text mb="10px" fontSize="25px" textAlign="left">
          Tools
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(6,1fr)",
          }}
          // border="1px solid brown"
          gap="2%"
          justifyContent="center"
        >
          {tools.map((skill, id) => (
            <Box
              key={id}
              style={style}
              p={{ base: "5px 0", sm: "10px 0", lg: "20px 0" }}
            >
              <Image
                h={{ base: "25px", md: "30px", lg: "50px" }}
                pointerEvents="none"
                src={skillsImage(skill)}
                alt={skill}
                margin="auto"
              />
              <Text fontSize={{ base: "11px", lg: "16px" }}>{skill}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills11;
