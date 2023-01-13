import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import UserImage from "../Image/UserImage1.png";
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
        // border="1px solid red"
      >
        <Box h="400px" pos="relative" >
          <Box
            h={{base:"60%",sm:"",md:"",lg:"100%"}}
            // border="1px solid red"
            w="-webkit-fit-content"
            m="auto"
            borderRadius="50%"
            overflow="hidden"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            // bg="rgb(255,255,255)"
          >
            <Image
              src={UserImage}
              maxHeight="125%"
              maxWidth="100%"
              // borderRadius="50%"
              // borderRadius="40% 20% 40% 20%"
              margin="auto"
              backgroundColor="transparent"
              // mt="5px"
              // borderRight="10px solid "
              // borderLeft="10px solid #f6bd60"
              // boxShadow=" 0px 10px 20px rgba(0, 0, 0, 0.12)"
            ></Image>
          </Box>
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
          <a
            href="https://drive.google.com/u/0/uc?id=18DnRfQh35Oaw7auNtvlDXpYCk3E-4JMD&export=download"
            target="blank"
            style={{marginTop:"20px"}}
          >
            <button class="button-72" style={{textAlign:"center",margin:"auto",marginTop:"20px"}}>Resume</button>
          </a>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
