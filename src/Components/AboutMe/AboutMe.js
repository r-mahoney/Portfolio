import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function AboutMe() {
    return (
        <Flex m={5} display="flex" flexDir="column">
            <Flex
                border="1px solid gray"
                mb={2}
                borderRadius="10px 10px 0 0"
                display="flex"
                flexDir="column"
                bg="white"
                box
                shadow="
                5px 5px 0 0 beige inset,
                -5px 5px 0 0 beige inset,
                0 -5px 0 0 beige inset
                "
            >
                <Text mt={5} ml={5} fontWeight={700} fontSize="15pt">
                    Hello, I'm Ryan Mahoney
                </Text>
                <Text
                    fontSize="10pt"
                    ml={5}
                    mt={1}
                    mr={3}
                    mb={3}
                >
                    Hey there! I'm a{" "}
                    <span style={{ fontWeight: "700" }}>
                        Full Stack Web Developer
                    </span>{" "}
                    specializing in front end and back end application
                    development using JavaScript. I have about 1 year of web development under
                    my belt having built multiple full stack applications using React on the front
                    end and Node.js and Express on the back-end.
                </Text>
            </Flex>
            <Flex border="1px solid gray" borderRadius="0 0 10px 10px">
                <h2>Skills</h2>
            </Flex>
        </Flex>
    );
}

export default AboutMe;
