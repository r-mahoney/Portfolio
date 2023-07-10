import React from "react";

function PageContent({ children }) {
    const [leftSide, rightSide] = children;
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{flex: "1"}}>{leftSide}</div>
            <div style={{flex: "4"}}>{rightSide}</div>
        </div>
    );
}

export default PageContent;
