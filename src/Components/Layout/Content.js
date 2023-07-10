import { Flex } from "@chakra-ui/react";
import React from "react";
import { projects } from "../Projects/projectObj";
import ProjectCard from "../Projects/ProjectCard";
import AboutMe from "../AboutMe/AboutMe";

export default function Content({ clickedTab }) {
    return (
        <>
            {clickedTab === "Projects" &&
                projects.map((project, idx) => (
                    <Flex
                        key={idx}
                        border="1px solid gray"
                        m={5}
                        borderRadius="10px"
                        display="flex"
                        flexDir="column"
                    >
                        <ProjectCard
                            name={project.name}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            summary={project.summary}
                            images={project.images}
                        />
                    </Flex>
                ))}
            {clickedTab === "About Me" && <AboutMe />}
        </>
    );
}
