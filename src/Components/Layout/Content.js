import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import ProjectCard from "../Projects/ProjectCard";
import { projects } from "../Projects/projectObj";

export default function Content({ clickedTab }) {
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {clickedTab === "Projects" && (
                <>
                    <Flex m={5}>
                        <Tabs>
                            <TabList>
                                {projects.map((project, idx) => (
                                    <Tab
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(project.name);
                                        }}
                                    >
                                        <a href={`#${project.name}`}>
                                            {project.name}
                                        </a>
                                    </Tab>
                                ))}
                            </TabList>
                        </Tabs>
                    </Flex>
                    {projects.map((project, idx) => (
                        <>
                            <Flex
                                id={`${project.name}`}
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
                                    subheading={project.subheading}
                                    liveIcon={project.liveIcon}
                                />
                            </Flex>
                        </>
                    ))}
                </>
            )}
            {clickedTab === "About Me" && <AboutMe />}
            {clickedTab === "Contact Me" && <ContactMe />}
        </>
    );
}
