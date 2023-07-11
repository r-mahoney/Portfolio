import { Flex, Tab, Tabs, TabList } from "@chakra-ui/react";
import React from "react";
import { projects } from "../Projects/projectObj";
import ProjectCard from "../Projects/ProjectCard";
import AboutMe from "../AboutMe/AboutMe";
import ScrollToTop from "react-scroll-to-top";

export default function Content({ clickedTab }) {
    return (
        <>
            {clickedTab === "Projects" && (
                <>
                    <Flex m={5}>
                        <Tabs>
                            <TabList>
                                {projects.map((project, idx) => (
                                    <Tab><a href={`#${project.name}`}>{project.name}</a></Tab>
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
                            {window.innerWidth > 800 && (
                                <ScrollToTop
                                    smooth
                                    component={
                                        <p
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "700",
                                            }}
                                        >
                                            Scroll to Top
                                        </p>
                                    }
                                    style={{ right: "0", left: "40px" }}
                                />
                            )}
                        </>
                    ))}
                </>
            )}
            {clickedTab === "About Me" && <AboutMe />}
        </>
    );
}
