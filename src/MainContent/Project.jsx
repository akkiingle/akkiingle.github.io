import { Box, Button, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import PharmEasy from "../Image/PharmEasy.png";
import Zappos from "../Image/Zappos.png";
import Semrush from "../Image/Semrush.png";

const Project = () => {
  return (
    <Box
      id="project"
      margin="auto"
      p="122px 5% 70px 5%"
      color="#e0fbfc"
      bg="linear-gradient(135deg, rgba(15,77,92,1) 0%, rgba(15,77,92,1) 32%, rgba(41,50,65,1) 65%, rgba(41,50,65,1) 100%)"
    >
      <Text
        fontSize={{ base: "40px", md: "50px", lg: "50px" }}
        fontFamily="ComforterBrush"
        fontWeight="600"
        color="#f6bd60"
      >
        Let's Talk About My Work
      </Text>
      <Grid justifyContent="center" alignItems="center" gap="40px" mt="30px">
        <Box >
          <Grid
            templateColumns="repeat(2,1fr)"
            gap="5%"
            // border="5px dotted #f6bd60"
            // p="5"
          >
            <Image src={PharmEasy} borderRadius="10px" maxH="100%"></Image>
            <Box >
              <Text>About Project</Text>
              <Text>TechStack</Text>
              <Text></Text>

              <Text
                // color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                PharmEasy.com
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a
                  href="https://flourishing-salmiakki-eeb8bb.netlify.app/"
                  target="blank"
                >
                  <Button bg="#2b2d42" color="#edf2f4">
                    Deploy
                  </Button>
                </a>
                <a
                  href="https://github.com/akkiingle/probable-hour-5744"
                  target="blank"
                >
                  <Button bg="#2b2d42" color="#edf2f4">
                    Github
                  </Button>
                </a>
              </HStack>
            </Box>
          </Grid>
        </Box>
        <Box>
          <Grid
            // border="5px dotted #f6bd60"
            // p="5"
            templateColumns="repeat(2,1fr)"
            gap="5%"
          >
            <Image src={Zappos} borderRadius="10px "></Image>
            <Box >
              <Text>About Project</Text>
              <Text>TechStack</Text>
              <Text></Text>
              <Text
                // color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                Zappos.com
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://zappos-omega.vercel.app/" target="blank">
                  <Button bg="#2b2d42" color="#edf2f4">
                    Deploy
                  </Button>
                </a>
                <a
                  href="https://github.com/akkiingle/exotic-minute-882"
                  target="blank"
                >
                  <Button bg="#2b2d42" color="#edf2f4">
                    Github
                  </Button>
                </a>
              </HStack>
            </Box>
          </Grid>
        </Box>
        <Box
        // border="1px solid white"
        >
          <Grid
            //  border="5px dotted #f6bd60"
            //  p="5"
            templateColumns="repeat(2,1fr)"
            gap="5%"
          >
            <Image src={Semrush} borderRadius="10px "></Image>
            <Box >
              <Text>About Project</Text>
              <Text>TechStack</Text>
              <Text></Text>

              <Text
                // color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                Semrush.com
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://semrush.netlify.app/">
                  <Button bg="#2b2d42" color="#edf2f4">
                    Deploy
                  </Button>
                </a>
                <a href="https://github.com/isky27/spicy-yak-7891">
                  <Button bg="#2b2d42" color="#edf2f4">
                    Github
                  </Button>
                </a>
              </HStack>
            </Box>
          </Grid>
        </Box>
        {/* <Box 
        // border="1px solid white"
        >
          <Image
          h=""
            src="https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg"
            borderRadius="10px "
          ></Image>
          <Text
            color="#E7E8D1"
            fontFamily="Roboto Flex"
            fontSize="20px"
            lineHeight="40px"
          >
            DummyCard
          </Text>
          <HStack justifyContent="space-around" mt="10px">
            <Button>Deploy</Button>

            <Button>Github</Button>
          </HStack>
        </Box> */}
        {/* <Box 
        // border="1px solid white"
        >
          <Image
            src="https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg"
            borderRadius="10px "
          ></Image>
          <Text
            color="#E7E8D1"
            fontFamily="Roboto Flex"
            fontSize="20px"
            lineHeight="40px"
          >
            DummyCard
          </Text>
          <HStack justifyContent="space-around" mt="10px">
            <Button>Deploy</Button>

            <Button>Github</Button>
          </HStack>
        </Box> */}
        {/* <Box 
        // border="1px solid white"
        >
          <Image
            src="https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg"
            borderRadius="10px "
          ></Image>
          <Text
            color="#E7E8D1"
            fontFamily="Roboto Flex"
            fontSize="20px"
            lineHeight="40px"
          >
            DummyCard
          </Text>
          <HStack justifyContent="space-around" mt="10px">
            <Button>Deploy</Button>

            <Button>Github</Button>
          </HStack>
        </Box> */}
      </Grid>
    </Box>
  );
};

export default Project;
