import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PharmEasy from "../Image/PharmEasy.png";
import Zappos from "../Image/Zappos.png";
import Semrush from "../Image/Semrush.png";

const Project = () => {
  return (
    <Box
      id="project"
      margin="auto"
      p="90px 5% 70px 5%"
      color="#e0fbfc"
      // bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
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
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap="5%"
          >
            <Image src={PharmEasy} h="100%" borderRadius="10px"></Image>
            
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              justifyContent="space-between"
              // bg="linear-gradient(135deg, rgba(15,77,92,1) 0%, rgba(15,77,92,1) 32%, rgba(41,50,65,1) 65%, rgba(41,50,65,1) 100%)"
              boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
            >
              <Text
                //  color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                PharmEasy.com
              </Text>
              <Text
                textAlign="justify"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
              >
                PharmEasy is online pharmacy & medical stores offering
                pharmaceutical and healthcare products
              </Text>
              {/* <Divider></Divider> */}
              <Text
                textAlign="left"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span>
              </Text>
              {/* <Divider></Divider> */}
              <Text
                textAlign="left"
                m="auto"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                Features :-
                <li>Landing page</li>
                <li>User authentication is required to buy the product</li>
                <li> Filtering and sorting functionality</li>
              </Text>
              {/* <Divider></Divider> */}
              <HStack justifyContent="space-around" mt="10px">
                <a
                  href="https://flourishing-salmiakki-eeb8bb.netlify.app/"
                  target="blank"
                >
                  {/* <Button bg="#2b2d42" color="#edf2f4">
                    Deploy
                  </Button> */}
                  <button class="button-89" role="button">
                    Deploy
                  </button>
                </a>
                <a
                  href="https://github.com/akkiingle/probable-hour-5744"
                  target="blank"
                >
                  {/* <Button bg="#2b2d42" color="#edf2f4">
                    Github
                  </Button> */}
                  <button class="button-89" role="button">
                    Github
                  </button>
                </a>
              </HStack>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap="5%"
          >
            <Image src={Zappos} h="100%" borderRadius="10px "></Image>
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              justifyContent="space-between"
              boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
            >
              <Text fontFamily="Roboto Flex" fontSize="20px" lineHeight="40px">
                Zappos.com
              </Text>
              <Text
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
              >
                Zappos.com is an online shoe and clothing retailer based
                ecommerce website.
              </Text>
              <Text
                textAlign="left"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span> | <span>React</span> |{" "}
                <span>Chakra UI</span>
              </Text>
              <Text
                textAlign="left"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                m="auto"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                Features :-
                <li>Landing page</li>
                <li>Product page with filtering and sorting functionally</li>
                <li>Authentication and integrated with the front end</li>
                <li>All pages responsive</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://zappos-omega.vercel.app/" target="blank">
                <button class="button-89" role="button">
                    Deploy
                  </button>
                </a>
                <a
                  href="https://github.com/akkiingle/exotic-minute-882"
                  target="blank"
                >
                   <button class="button-89" role="button">
                    Github
                  </button>
                </a>
              </HStack>
            </Grid>
          </Grid>
        </Box>
        <Box
        // border="1px solid white"
        >
          <Grid
            //  border="5px dotted #f6bd60"
            //  p="5"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap="5%"
          >
            <Image src={Semrush} borderRadius="10px" h="100%"></Image>
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              justifyContent="space-between"
              boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
            >
              <Text
                // color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                PharmEasy.com
              </Text>
              <Text
                textAlign="justify"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
              >
                Semrush is an all-in-one tool suite for improving online
                visibility and discovering marketing insights.
              </Text>
              <Text
                textAlign="left"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span>
              </Text>
              <Text
                textAlign="left"
                m="auto"
                borderBottom="1px solid"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "16px" }}
              >
                Features :-
                <li>Login and Logout</li>
                <li>Animation created by CSS</li>
                <li>User authentication is required to explore plans</li>
                <li>Checkout Page functionality</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://semrush.netlify.app/">
                <button class="button-89" role="button">
                    Deploy
                  </button>
                </a>
                <a href="https://github.com/isky27/spicy-yak-7891">
                <button class="button-89" role="button">
                    Github
                  </button>
                </a>
              </HStack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Project;
