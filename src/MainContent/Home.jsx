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
      // color="#E7E8D1"
      // backgroundImage="https://t3.ftcdn.net/jpg/02/74/63/90/360_F_274639050_ddLeyFuQGwEjtTP0e2Y9ZZesSo2Mj6JD.jpg"
      // backgroundImage="https://c4.wallpaperflare.com/wallpaper/428/851/781/simple-background-texture-blue-background-wallpaper-preview.jpg"
      // bg="#0f4c5c"
      // bg="linear-gradient(45deg, rgba(41,50,65,1) 0%, rgba(41,50,65,1) 35%, rgba(15,77,92,1) 68%, rgba(15,77,92,1) 100%)"
     bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
      paddingBottom="120px"
      pt="50px"
    >
      <Grid
        templateColumns={{lg:"50% 50%",sm:"100%"}}
        pt="50px"
        paddingBottom="10px"
        rowGap="20px"
      >
        <Box
          h="400px"
          pos="relative"
        >
          <Image
            src={UserImage}
            maxHeight="100%"
            maxWidth="100%"
            borderRadius="40% 20% 40% 20%"
            margin="auto"
            backgroundColor="transparent"
            // border="5px dotted #f6bd60"
          ></Image>
        </Box>
        <Box
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
