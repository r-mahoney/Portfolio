import { Flex } from "@chakra-ui/react";
import React from "react";
import { projects } from "../Projects/projectObj";
import ProjectCard from "../Projects/ProjectCard";

export default function Content({ clickedTab }) {
    return (
        <Flex
            border="1px solid gray"
            // h="95%"
            m={5}
            mr={8}
            borderRadius="10px"
            display="flex"
            flexDir="column"
        >
            {clickedTab === "Projects" &&
                projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        name={project.name}
                        githubLink={project.githubLink}
                        summary={project.summary}
                        image={project.image}
                    />
                ))}
            {clickedTab === "About Me" && (
                <div>hello</div>
                // <AboutMe />
            )}
        </Flex>
    );
}
