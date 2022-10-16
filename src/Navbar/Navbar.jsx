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
import { Flex, Spacer } from "@chakra-ui/react";
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
    <Box p="4" w="100%">
      <Flex justifyContent={"space-between"}>
        <Box
          w={{ lg: "30%", md: "40%", sm: "40%", base: "50%" }}
          color="#E7E8D1"
          // border="1px solid red"
        >
          <Text
            fontSize={{ lg: "60", md: "50", sm: "35", base: "30" }}
            fontFamily="Tangerine"
          >
            Akshay Ingle
          </Text>
        </Box>
        <HStack
          justifyContent={"space-evenly"}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="#E7E8D1"
          fontFamily="Courgette"
          fontSize="20"
        >
          <Text>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
          </Text>
          <Text>
            <Link to="about" spy={true} smooth={true}>
              About
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
          <MenuList>
            <MenuItem icon={<AddIcon />}>Home</MenuItem>
            <Link to="about" spy={true} smooth={true}>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                About
              </MenuItem>
            </Link>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Skills
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Project
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Contact
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Resume
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
