import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Link,
    Stack,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
import profPic from "../../images/avatar.png";

export default function Navbar({ handleClick }) {
    return (
        <Flex display="flex" flexDirection="column">
            <Flex
                direction="column"
                justify="center"
                align="center"
                mt={5}
                ml={5}
                mr={5}
                borderRadius="10px 10px 0 0 "
                border="1px solid gray"
                borderBottom="none"
                bg="white"
                boxShadow="
                5px 5px 0 0 rgb(243,243,243) inset,
                -5px 5px 0 0 rgb(243,243,243) inset,
                0 -5px 0 0 rgb(243,243,243) inset
                "
            >
                <Flex mt={5} ml={5} mr={5} mb={3}>
                    <Avatar src={profPic} size="lg" />
                </Flex>
                <Flex mt={2} ml={5} mr={5} mb={3}>
                    <Box ml="3">
                        <Text fontWeight="bold">Ryan Mahoney</Text>
                        <Text fontSize="sm">Software Engineer</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Button
                        ml={3}
                        mr={3}
                        mb={3}
                        variant="outline"
                        colorScheme="telegram"
                        size="sm"
                        className="resume"
                    >
                        <Link
                            target="_blank"
                            href={require("../../assets/Resume7_10_23.pdf")}
                            onClick={() => {
                                window.dataLayer.push({
                                    'event': "resumeClicked",
                                });
                            }}
                        >
                            Download Resume
                        </Link>
                    </Button>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                ml={5}
                mr={5}
                border="1px solid gray"
                bg="white"
                boxShadow="
                    5px 5px 0 0 rgb(243,243,243) inset,
                    -5px 5px 0 0 rgb(243,243,243) inset,
                    0 -5px 0 0 rgb(243,243,243) inset
                "
            >
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Center>
                        <Box h="40px" w="100%" mt={5}>
                            <Text
                                onClick={() => {
                                    handleClick("About Me");
                                }}
                                cursor="pointer"
                            >
                                About Me
                            </Text>
                        </Box>
                    </Center>
                    <Center>
                        <Box h="40px" w="100%" mt={3}>
                            <Text
                                onClick={() => handleClick("Projects")}
                                cursor="pointer"
                            >
                                Projects
                            </Text>
                        </Box>
                    </Center>
                    <Center>
                        <Box h="40px" w="100%" mt={3}>
                            <Text
                                onClick={() => handleClick("Contact Me")}
                                cursor="pointer"
                            >
                                Contact Me
                            </Text>
                        </Box>
                    </Center>
                </VStack>
            </Flex>
            <Flex
                direction="row"
                ml={5}
                mr={5}
                border="1px solid gray"
                borderTop="none"
                borderRadius="0 0 10px 10px"
                justify="center"
                align="center"
                bg="white"
                boxShadow="
                    5px 5px 0 0 rgb(243,243,243) inset,
                    5px -5px 0 0 rgb(243,243,243) inset,
                    -5px -5px 0 0 rgb(243,243,243) inset
                "
            >
                <Stack display="flex" flexDirection="row">
                    <Box m={2}>
                        <Link
                            target="_blank"
                            href="https://github.com/r-mahoney"
                        >
                            <Icon as={AiFillGithub} fontSize={36} />
                        </Link>
                    </Box>
                    <Box m={2}>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/ryan-mahoney211/"
                        >
                            <Icon as={AiFillLinkedin} fontSize={36} />
                        </Link>
                    </Box>
                    <Box m={2}>
                        <Link href={`mailto:rsmahoney211@gmail.com`}>
                            <Icon as={AiFillMail} fontSize={36} />
                        </Link>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    );
}
