import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
    StackDivider,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";

function ProjectCard({ name, githubLink, summary, image }) {
    return (
        <Card m={5}>
            <CardHeader>
                <Heading size="md">{name}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Summary
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {summary}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Links
                        </Heading>
                        <Flex display='flex' flexDirection='column' >
                            <Icon as={AiFillGithub} fontSize={25} />
                            <Text>
                                See the project code repo{" "}
                                <Link
                                    target="_blank"
                                    href={githubLink}
                                    color="blue"
                                >
                                    here
                                </Link>
                            </Text>
                            <Icon as={IoLogoVercel} fontSize={25} />
                            <Text>
                                See the live demo{" "}
                                <Link
                                    target="_blank"
                                    href={githubLink}
                                    color="blue"
                                >
                                    here
                                </Link>
                            </Text>
                        </Flex>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
