import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Contact.css";
import { skillsImage } from "./Skills/skillsImage";



const Contact = () => {
  return (
    <Box
      height="500px"
      // border="1px solid red"
      color="#e0fbfc"
      p="30px 5% 20px 5%"
      id="contact"
      bg="linear-gradient(135deg, rgba(15,77,92,1) 0%, rgba(15,77,92,1) 32%, rgba(41,50,65,1) 65%, rgba(41,50,65,1) 100%)"
    >
      <Text
        fontSize={{ base: "40px", md: "50px", lg: "50px" }}
        fontFamily="ComforterBrush"
        fontWeight="600"
        color="#f6bd60"
      >
        Contact Me
      </Text>

      <Grid
        // border="1px solid"
        templateColumns="repeat(1,1fr)" 
        /*templateColumns="repeat(1,1fr)"templateColumns="repeat(1,1fr)" */
        mt="30px"
      >
        <Flex
          flexDirection="column"
          margin="auto"
          rowGap="20px"
          w={{base:"",md:"60%",lg:"40%"}}
          // border="1px solid"
        >
          <button class="button-33">
            <Flex gap="5" justifyContent="flex-start" 
              pl={{base:"0",md:"20%"}}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/684/684912.png"
                h={{ base: "25px", md: "30px", lg: "30px" }}
                pointerEvents="none"
                alt={"skill"}
                // margin="auto"
                mb="5px"
                // border="1px solid"
              ></Image>
              <Text mt="1">+918329648285 / +919096989832</Text>
            </Flex>
          </button>
          <button class="button-33" >
            <Flex gap="5" justifyContent="flex-start" 
            pl={{base:"0",md:"20%"}}
            >
              <Image
                src={skillsImage("email")}
                h={{ base: "25px", md: "30px", lg: "30px" }}
                pointerEvents="none"
                alt={"skill"}
                // margin="auto"
                mb="5px"
                // border="1px solid"
              ></Image>
              <Text mt="1">akshayingle9898@gmail.com</Text>
            </Flex>
          </button>
          <a href="https://www.linkedin.com/in/akshay-ingle/" target="blank">
          <button class="button-33" >
            <Flex gap="5" justifyContent="flex-start"  pl={{base:"0",md:"20%"}}>
              <Image
                src={skillsImage("linkedin")}
                h={{ base: "25px", md: "30px", lg: "30px" }}
                pointerEvents="none"
                alt={"skill"}
                mb="5px"
                // border="1px solid"
              ></Image>
              <Text mt="1" fontSize="">Akshay Ingle</Text>
            </Flex>
          </button>
          </a>
          <a href="https://github.com/akkiingle" target="blank">
          <button class="button-33" >
            <Flex gap="5" justifyContent="flex-start"  pl={{base:"0",md:"20%"}}>
              <Image
                src={skillsImage("github")}
                h={{ base: "25px", md: "30px", lg: "30px" }}
                pointerEvents="none"
                alt={"skill"}
                
                mb="5px"
                // border="1px solid"
              ></Image>
              <Text mt="1">akkiingle</Text>
            </Flex>
          </button>
          </a>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Contact;
