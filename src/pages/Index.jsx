import React from "react";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex as="nav" bg="white" p={4} shadow="md" align="center">
      <Box p="2">
        <Text fontSize="xl" fontWeight="bold">
          MySite
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Link px={4} py={2} href="#community" fontSize="md" fontWeight="semibold">
          Community
        </Link>
        <Link px={4} py={2} href="#specialties" fontSize="md" fontWeight="semibold">
          Specialties
        </Link>
        <Link px={4} py={2} href="#intensive-courses" fontSize="md" fontWeight="semibold">
          Intensive Courses
        </Link>
        <Link px={4} py={2} href="#contact" fontSize="md" fontWeight="semibold">
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Index;
