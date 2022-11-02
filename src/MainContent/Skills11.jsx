import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Skills11 = () => {
  return (
    <Box
      height={{ base: "", md: "", lg: "800px" }}
      id="skills"
      color="#e0fbfc"
      p="122px 5% 20px 5%"
      bg="linear-gradient(45deg, rgba(10,118,148,1) 0%, rgba(10,118,148,1) 34%, rgba(117,189,209,1) 68%, rgba(117,189,209,1) 100%)"
      // bg="linear-gradient(45deg, rgba(41,50,65,1) 0%, rgba(41,50,65,1) 35%, rgba(15,77,92,1) 68%, rgba(15,77,92,1) 100%)"
    >
      <Text
        fontSize={{ base: "40px", md: "50px", lg: "70px" }}
        fontFamily="ComforterBrush"
        fontWeight="600"
        color="#f6bd60"
      >
        What are my Skills
      </Text>

      <Text
        // textAlign="justify"
        // // w="50%"
        // margin="auto"
        // fontFamily="Roboto Flex"
        // // fontSize="20px"
        // // fontSize={{base:"10px",md:"18px",lg:"20px"}}
        // // lineHeight={{base:"20px",md:"30px",lg:"40px"}}
        // w="70%"
        // fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "25px" }}
        //   lineHeight={{ base: "25px", md: "30px", lg: "40px" }}
        textAlign="justify"
        margin="auto"
        fontFamily="Roboto Flex"
        fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "25px" }}
        lineHeight={{ base: "25px", md: "30px", lg: "40px" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cum,
        nobis voluptas odio est excepturi, aliquam corrupti a quia hic
        laboriosam obcaecati. Quo aperiam autem voluptatum similique minus
        fugiat ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iusto, cum, nobis voluptas odio est excepturi, aliquam corrupti a quia
        hic laboriosam obcaecati. Quo aperiam autem voluptatum similique minus
        fugiat ex.
      </Text>
    </Box>
  );
};

export default Skills11;
