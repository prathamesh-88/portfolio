import styles from "../styles/layout.module.css";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import Image from "next/image";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box className={styles.footerWrapper}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© Prathamesh Tamanekar.</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={""}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={"Devto"} href="https://dev.to/prathamesht">
            <svg
              width="16"
              height="16"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  d="M435.2 0H76.8C34.3845 0 0 34.3845 0 76.8V435.2C0 477.615 34.3845 512 76.8 512H435.2C477.615 512 512 477.615 512 435.2V76.8C512 34.3845 477.615 0 435.2 0Z"
                  fill="white"
                />
                <path
                  d="M140.47 203.94H123.03V308.41H140.48C150.635 307.865 157.838 299.741 157.95 291V221.35C157.254 210.986 150.154 204.078 140.47 203.94ZM186.2 291.19C186.2 310 174.59 338.5 137.84 338.44H91.44V172.98H138.82C174.26 172.98 186.18 201.44 186.19 220.26L186.2 291.19ZM286.88 202.53H233.6V240.95H266.17V270.52H233.6V308.93H286.89V338.5H224.71C213.55 338.79 204.27 329.97 203.99 318.81V193.7C203.72 182.55 212.55 173.29 223.7 173.01H286.89L286.88 202.53ZM390.52 317.82C377.32 348.57 353.67 342.45 343.08 317.82L304.55 173.02H337.12L366.83 286.74L396.4 173.02H428.98L390.52 317.82Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
