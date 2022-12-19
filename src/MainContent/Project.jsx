import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import PharmEasy from "../Image/PharmEasy.png";
import Zappos from "../Image/Zappos.png";
import Semrush from "../Image/Semrush.png";
import PWS from "../Image/PWS.png";

const Project = () => {
  return (
    <Box
      id="project"
      margin="auto"
      p="90px 5% 70px 5%"
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
        {/* -------------------------------------PWS------------------------------------------------*/}

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
            <Image src={PWS} h="100%" borderRadius="10px"></Image>
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              // boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
              justifyContent="center"
            >
              <Text
                //  color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                PWS.com (Personal Work Space)
              </Text>
              <Text
                textAlign="justify"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
                borderRadius="0 0 5px 5px"
              >
                PWS is a great platform were you can manage your all tasks. Your
                can create,update and delete the tasks. Yo can also groups the
                tasks according to your needs.
              </Text>
              <Text
                textAlign="left"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                TechStack :- <span>React</span> | <span>Express</span> |{" "}
                <span>JavaScript</span> | <span>HTML</span> | <span>CSS</span> |{" "}
                <span>Mongoose</span> | <span>Chakra UI</span>
              </Text>
              <Text
                textAlign="left"
                m="auto"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                Features :-
                <li>Landing page</li>
                <li>User authentication is required to buy the product</li>
                <li>Create gropus and add tasks to it.</li>
                <li>Delete and update tasks or groups.</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a
                  href="https://joyful-bubblegum-706d0d.netlify.app/"
                  target="blank"
                >
                  <button class="button-89">Deploy</button>
                </a>
                <a
                  href="https://github.com/avdhut9/robust-pen-8778"
                  target="blank"
                >
                  <button class="button-89">Github</button>
                </a>
              </HStack>
            </Grid>
          </Grid>
        </Box>

        {/* -------------------------------------Zappos------------------------------------------------*/}

        <Box>
          <Flex
            direction={{base:"column-reverse",lg:"row"}}
            gap="5%"
          >
           
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              justifyContent="center"
              // boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
              w={{base:"100%",lg:"47.5%"}} 
              mt={{base:"20px",lg:"0"}} 
            >
              <Text fontFamily="Roboto Flex" fontSize="20px" lineHeight="40px">
                Zappos.com
              </Text>
              <Text
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
                borderRadius="0 0 5px 5px"
              >
                Zappos.com is an online shoe and clothing retailer based
                ecommerce website.
              </Text>
              <Text
                textAlign="left"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span> | <span>React</span> |{" "}
                <span>Chakra UI</span>
              </Text>
              <Text
                textAlign="left"
                borderRadius="0 0 5px 5px"
                m="auto"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                Features :-
                <li>Landing page</li>
                <li>Product page with filtering and sorting functionally</li>
                <li>Authentication and integrated with the front end</li>
                <li>All pages responsive</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://zappos-omega.vercel.app/" target="blank">
                  <button class="button-89">Deploy</button>
                </a>
                <a
                  href="https://github.com/akkiingle/exotic-minute-882"
                  target="blank"
                >
                  <button class="button-89">Github</button>
                </a>
              </HStack>
            </Grid>
            <Image src={Zappos} w={{base:"100%",lg:"47.5%"}} borderRadius="10px "></Image>
          </Flex>
        </Box>

        {/* -------------------------------------Pharmeasy------------------------------------------------*/}

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
              // justifyContent="space-between"
              // boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
              justifyContent="center"
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
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
                borderRadius="0 0 5px 5px"
              >
                PharmEasy is online pharmacy & medical stores offering
                pharmaceutical and healthcare products
              </Text>
              <Text
                textAlign="left"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span>
              </Text>
              <Text
                textAlign="left"
                m="auto"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                Features :-
                <li>Landing page</li>
                <li>User authentication is required to buy the product</li>
                <li> Filtering and sorting functionality</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a
                  href="https://flourishing-salmiakki-eeb8bb.netlify.app/"
                  target="blank"
                >
                  <button class="button-89">Deploy</button>
                </a>
                <a
                  href="https://github.com/akkiingle/probable-hour-5744"
                  target="blank"
                >
                  <button class="button-89">Github</button>
                </a>
              </HStack>
            </Grid>
          </Grid>
        </Box>

        {/* -------------------------------------Semrush------------------------------------------------*/}

        <Box>
          <Flex
           direction={{base:"column-reverse",lg:"row"}}
           gap="5%"
          >
            
            <Grid
              p="2% 2%"
              border="1px solid "
              borderRadius="10px"
              justifyContent="center"
              // boxShadow=" 0px 10px 20px rgba(50, 500, 0, 0.12)"
              w={{base:"100%",lg:"47.5%"}} 
              mt={{base:"20px",lg:"0"}} 
            >
              <Text
                // color="#2b2d42"
                fontFamily="Roboto Flex"
                fontSize="20px"
                lineHeight="40px"
              >
                Semrush.com
              </Text>
              <Text
                textAlign="justify"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
                borderRadius="0 0 5px 5px"
              >
                Semrush is an all-in-one tool suite for improving online
                visibility and discovering marketing insights.
              </Text>
              <Text
                textAlign="left"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                TechStack :- <span>HTML</span> | <span>CSS</span> |{" "}
                <span>JavaScript</span>
              </Text>
              <Text
                textAlign="left"
                m="auto"
                borderRadius="0 0 5px 5px"
                fontSize={{ base: "11px", sm: "15px", md: "14px" }}
              >
                Features :-
                <li>Login and Logout</li>
                <li>Animation created by CSS</li>
                <li>User authentication is required to explore plans</li>
                <li>Checkout Page functionality</li>
              </Text>
              <HStack justifyContent="space-around" mt="10px">
                <a href="https://semrush.netlify.app/">
                  <button class="button-89">Deploy</button>
                </a>
                <a href="https://github.com/isky27/spicy-yak-7891">
                  <button class="button-89">Github</button>
                </a>
              </HStack>
            </Grid>
            <Image src={Semrush} borderRadius="10px"   w={{base:"100%",lg:"47.5%"}}></Image>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Project;
