import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <Box
      w="100%"
      // bg="#0f4c5c"
      background="linear-gradient(to bottom, rgba(41,50,65,1) 0%, rgba(41,50,65,1) 35%, rgba(15,77,92,1) 68%, rgba(15,77,92,1) 100%)"
      position="sticky"
      top="0"
      zIndex="5"
      borderBottom="1px solid #e0fbfc"
      // border="1px solid red"
    >
      <Flex justifyContent={"space-between"}>
        <Box
          w={{ lg: "30%", md: "40%", sm: "40%", base: "50%" }}
          // color="#f6bd60"
          color="#e0fbfc"
        >
          <Text
            fontSize={{ lg: "50", md: "50", sm: "35", base: "25" }}
            fontFamily="Courgette"
          >
            Akshay Ingle
          </Text>
        </Box>
        <HStack
          justifyContent={"space-evenly"}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="#e0fbfc"
          fontSize="20"
        >
          <Text>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
          </Text>
          <Text>
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
          </Text>
          <Text>
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </Text>
          <Text>
            <Link to="project" spy={true} smooth={true}>
              Project
            </Link>
          </Text>
          <Text>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </Text>
          <Text>
            <Link to="resume" spy={true} smooth={true}>
              Resume
            </Link>
          </Text>
        </HStack>
        <Menu>
          <MenuButton
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList
            background="linear-gradient(to bottom, rgba(41,50,65,1) 0%, rgba(41,50,65,1) 35%, rgba(15,77,92,1) 68%, rgba(15,77,92,1) 100%)"
            color="#e0fbfc"
          >
            <Link to="home" spy={true} smooth={true}>
              <MenuItem icon={<AddIcon />}>Home</MenuItem>
            </Link>
            <Link to="about" spy={true} smooth={true}>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                About
              </MenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Skills
              </MenuItem>
            </Link>
            <Link to="project" spy={true} smooth={true}>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Project
              </MenuItem>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Contact
              </MenuItem>
            </Link>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Resume
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
