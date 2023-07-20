import { Avatar, Flex, Text } from "@chakra-ui/react";
import profPic from "../images/avatar.png";
import React from "react";

function Thumbnail() {
    return (
        <Flex>
            <Flex mt={5} ml={5} mr={5} mb={3} alignItems='center'>
                <Avatar src={profPic} size="xl" />
            </Flex>
            <Flex flexDir="column" boxSize='350px'>
                <Text mt={5} ml={5} mb={5} fontWeight={700} fontSize="15pt">
                    Hello, I'm Ryan Mahoney
                </Text>
                <Flex flex={1} flexDirection="column">
                    <Text textAlign="left" ml={5} fontWeight={600}>
                        My Background
                    </Text>
                    <Text fontSize="10pt" ml={5} mt={1} mr={3} mb={3}>
                        I am a chemist turned software engineer. I went to
                        college for chemistry and right out of college joined a
                        diagnostics lab where I spent 5 years in a fast paced,
                        metric driven environment using a lot of applications
                        with poorly designed UIs. I spent most of my time
                        training new and current employees until I started
                        leading a project to updrade some of our more
                        sophisticated analyzers. During that time, I found a
                        passion for debugging and writing code which led me to
                        pursue a full time career in development.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Thumbnail;
