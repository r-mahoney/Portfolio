import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Layout/Content";
import Navbar from "./Components/Layout/Navbar";
import PageContent from "./Components/Layout/PageContent";
import Thumbnail from "./Components/Thumbnail";
import { theme } from "./chakra/theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <PageContent>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Content clickedTab={"About Me"} />}
                    />
                    <Route
                        path="/Projects"
                        element={<Content clickedTab={"Projects"} />}
                    />
                    <Route
                        path="/Contact"
                        element={<Content clickedTab={"Contact Me"} />}
                    />
                    <Route path="/image/thumbnail" element={<Thumbnail />} />
                </Routes>
            </PageContent>
        </ChakraProvider>
    );
}

export default App;
