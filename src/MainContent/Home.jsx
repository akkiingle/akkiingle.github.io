import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import UserImage from "../Image/UserImage.jpg";
import UserImage2 from "../Image/UserImage2.JPG";
import Type from "../type";

const Home = () => {
  return (
    <Box
      // height=""
      id="home"
      color="#e0fbfc"
      bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
      paddingBottom="120px"
      pt="50px"
    >
      <Grid
        templateColumns={{ lg: "50% 50%", sm: "100%" }}
        pt="50px"
        paddingBottom="10px"
        rowGap="20px"
      >
        <Box h="400px" pos="relative">
          <Image
            src={UserImage}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="50%"
            // borderRadius="40% 20% 40% 20%"
            margin="auto"
            backgroundColor="transparent"
            borderRight="10px solid "
            // borderLeft="10px solid #f6bd60"
            // boxShadow=" 0px 10px 20px rgba(0, 0, 0, 0.12)"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          ></Image>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="left"
          textAlign={{ lg: "left", md: "center", base: "center" }}
        >
          <Text fontSize="30" fontFamily="Merienda">
            Hey...This is . . . .
          </Text>
          <Text fontSize="70" fontFamily="ComforterBrush">
            Akshay Ingle
          </Text>
          <Text fontFamily="Merienda" fontSize="40">
            <Type />
          </Text>
          <a href="https://drive.google.com/file/d/18DnRfQh35Oaw7auNtvlDXpYCk3E-4JMD/view?usp=share_link" target="blank">
            <button class="button-72" role="button">
              Resume
            </button>
          </a>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
