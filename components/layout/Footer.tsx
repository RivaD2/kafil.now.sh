import { Flex, Heading, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      icon: FaGithub,
      display: true,
      name: "github",
      url: "https://github.com/kafiln",
    },
    {
      icon: FaTwitter,
      display: true,
      name: "twitter",
      url: "https://twitter.com/kafiiil",
    },
    {
      icon: FaLinkedin,
      display: true,
      name: "linkedin",
      url: "https://www.linkedin.com/in/kafiln/",
    },
    { name: "blog", url: "https://kafil.now.sh" },
    { name: "mail", url: "mailto:kafil.nasdami@gmail.com" },
  ];
  return (
    <Flex p={4} as="footer" justifyContent="space-between">
      <Heading as="h1" mx={2} size="sm">
        Kafil NASDAMI
      </Heading>
      <HStack as="ul" spacing={10}>
        {socials
          .filter((item) => item.display)
          .map((item) => {
            return (
              <Box as="li" key={item.name} style={{ listStyle: "none" }}>
                <a
                  aria-label={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size="2em" />
                </a>
              </Box>
            );
          })}
      </HStack>
    </Flex>
  );
};

export default Footer;
