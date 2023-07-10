import {
    Box,
    Flex,
    Heading,
    Icon,
    Image,
    List,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import front from "../../images/front.PNG";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiE, SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import ListItems from "./ListItems";
import { column1, column2 } from "./skills";

function AboutMe() {
    return (
        <Flex m={5} display="flex" flexDir="column">
            <Flex border="1px solid gray" mb={2} borderRadius="10px 10px 0 0">
                <Flex
                    flexDir="column"
                    m={5}
                    bg="white"
                    borderRadius="10px 10px 0 0"
                >
                    <Text mt={5} ml={5} mb={5} fontWeight={700} fontSize="15pt">
                        Hello, I'm Ryan Mahoney
                    </Text>
                    <Flex
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                    >
                        <Flex flex={1} flexDirection="column">
                            <Text textAlign="left" ml={5} fontWeight={600}>My Background</Text>
                            <Text fontSize="10pt" ml={5} mt={1} mr={3} mb={3}>
                                I am a chemist turned software engineer. I went
                                to college for chemistry and right out of
                                college joined a diagnostics lab where I spent 5
                                years in a fast paced metric driven environment
                                using a lot of applications with poorly designed
                                UIs. I spent most of my time training new and
                                current employees until i started leading a
                                project to updrade some of our more
                                sophisticated analyzers. During that, I found a
                                passion for debugging and writing code which led
                                me to pursue a full time career in development.
                            </Text>
                        </Flex>
                        <Flex flex={1} flexDirection="column">
                            <Text textAlign="left" ml={5} fontWeight={600}>
                                What I'm Currently Doing
                            </Text>
                            <Text fontSize="10pt" ml={5} mt={1} mr={3} mb={3}>
                                After completeing an intensive software
                                engineering program where I spent 50-60 hours
                                per week learning some popular technologies,
                                when I am not applying for full time engineering
                                positions, I am spending my time working on
                                projects to keep my skills sharp. I just
                                completed a project building a reddit clone in
                                order to gain familiarity with Next.js, Recoil,
                                and Firebase. I am now focusing on a 3rd party
                                plugin for a note taking tool, collaborating
                                with a UI/UX designer to make metadata more
                                accessible to new users.
                            </Text>
                        </Flex>
                        <Flex flex={1} flexDirection="column">
                            <Text textAlign="left" ml={5} fontWeight={600}>What I Hope To Do</Text>
                            <Text fontSize="10pt" ml={5} mt={1} mr={3} mb={3}>
                                My passion is for creating application with user
                                experiences that make people want to continue to
                                use the app. One of the big pushes for me to
                                change careers was a constant thought of "How
                                hard can it be to make this app better to use?"
                                I hope to find a job where I can be a part of a
                                team making peoples lives easier and building
                                things that dont give them the same frustrations
                                that I once had.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex border="1px solid gray" borderRadius="0 0 10px 10px">
                <Flex
                    m={5}
                    borderRadius="0 0 10px 10px"
                    bg="white"
                    width="100%"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <Flex
                        flexDirection="column"
                        flex={1}
                        alignItems="center"
                        mt={2}
                    >
                        <Heading size="md" mb={3}>
                            Tech Stack
                        </Heading>
                        <Flex mb={3}>
                            <Icon
                                as={TbBrandJavascript}
                                fontSize={40}
                                mr={3}
                            ></Icon>
                            <Icon as={IoLogoReact} fontSize={40} mr={3}></Icon>
                            <Icon as={SiExpress} fontSize={40} mr={3}></Icon>
                            <Icon as={FaNodeJs} fontSize={40} mr={3}></Icon>
                            <Icon as={BiLogoPostgresql} fontSize={40}></Icon>
                        </Flex>
                        <Flex mb={3}>
                            <Flex flexDir="column">
                                <Image src={front} h="52px" w="240px" />
                                <Image
                                    src={require("../../images/frontTech.PNG")}
                                    h="100px"
                                    w="240px"
                                />
                            </Flex>
                            <Flex flexDir="column">
                                <Image
                                    src={require("../../images/res.PNG")}
                                    h="52px"
                                    w="240px"
                                />
                                <Image
                                    src={require("../../images/restech.PNG")}
                                    h="100px"
                                    w="240px"
                                />
                            </Flex>
                            <Flex flexDir="column">
                                <Image
                                    src={require("../../images/port.PNG")}
                                    h="52px"
                                    w="240px"
                                />
                                <Image
                                    src={require("../../images/portTech.PNG")}
                                    h="100px"
                                    w="240px"
                                />
                            </Flex>
                        </Flex>
                        <Text textAlign="center" m={3}>
                            Most of my projects are completed in a JavaScript,
                            React, Express. Node stack. Occassionally I use
                            TypeScript in a side project in order to gain
                            experience
                        </Text>
                    </Flex>
                    <Flex
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                        height="fit-content"
                    >
                        <Heading size="md">Current Skills</Heading>
                        <SimpleGrid
                            gap={10}
                            p={10}
                            columns={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box>
                                <List p={2} fontSize={{ base: "8pt", md: "10pt" }}>
                                    {column1.map((skill) => (
                                        <ListItems
                                            listicle={skill}
                                            key={skill}
                                        />
                                    ))}
                                </List>
                            </Box>
                            <Box>
                                <List
                                    p={2}
                                    fontSize={{ base: "8pt", md: "10pt" }}
                                >
                                    {column2.map((skill) => (
                                        <ListItems
                                            listicle={skill}
                                            key={skill}
                                        />
                                    ))}
                                </List>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AboutMe;
