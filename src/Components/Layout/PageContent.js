import { Flex } from "@chakra-ui/react";
import React from "react";

function PageContent({ children }) {
    const [leftSide, rightSide] = children;
    return (
        <Flex display="flex" flexDirection={{ base: "column", md: "row" }}>
            <div style={{ flex: "1" }}>{leftSide}</div>
            <div style={{ flex: "4" }}>{rightSide}</div>
        </Flex>
    );
}

export default PageContent;
