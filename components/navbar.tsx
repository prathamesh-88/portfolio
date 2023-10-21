import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

import styles from "../styles/navbar.module.css";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  link: string;
}

const Links: { [k: string]: string } = {
  Home: "/",
  Articles: "/articles",
  Projects: "/projects",
};
const LinksList = Object.keys(Links);

const NavLink = (props: Props) => {
  const { children, link } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={link}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className={styles.navbar} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box className={styles.logo}>
            <Link href="/">
              <Image alt="Logo" src="/images/logo.png" width={40} height={40} />
            </Link>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {LinksList.map((link) => (
              <NavLink key={link} link={Links[link]}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {LinksList.map((link) => (
              <NavLink key={link} link={Links[link]}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
