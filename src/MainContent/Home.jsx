import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import UserImage from "../Image/UserImage.jpg";
import Type from "../type";

const Home = () => {
  return (
    <Box
      // height=""
      id="home"
      color="#E7E8D1"
      // backgroundImage="https://t3.ftcdn.net/jpg/02/74/63/90/360_F_274639050_ddLeyFuQGwEjtTP0e2Y9ZZesSo2Mj6JD.jpg"
      // backgroundImage="https://c4.wallpaperflare.com/wallpaper/428/851/781/simple-background-texture-blue-background-wallpaper-preview.jpg"
      bg="#2B3856"
    >
      <Navbar />
      <Grid
        // border="1px solid white"
        templateColumns={{lg:"50% 50%",sm:"100%"}}
        mt="50px"
        paddingBottom="20px"
      >
        <Box
          // border="2px solid red"
          h="400px"
          pos="relative"
        >
          <Image
            src={UserImage}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="50%"
            margin="auto"
            backgroundColor="transparent"
            border="5px solid #E7E8D1"
          ></Image>
        </Box>
        <Box
          // border="10px solid yellow"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="left"
          textAlign={{lg:"left",md:"center",base:"center"}}
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
        </Box>
      </Grid>
      
    </Box>
  );
};

export default Home;
