import "./App.css";
import React, {useState} from "react";
import { ChakraProvider } from '@chakra-ui/react'
import PageContent from "./Components/Layout/PageContent";
import Content from "./Components/Layout/Content";
import Navbar from "./Components/Layout/Navbar";

function App() {
  const [clickedTab, setClickedTab] = useState("About Me")

  const handleClick = (tabValue) => {
    setClickedTab(tabValue)
  }

    return (
        <ChakraProvider>
            <PageContent>
                <Navbar handleClick={handleClick}/>
                <Content clickedTab={clickedTab}/>
            </PageContent>
        </ChakraProvider>
    );
}

export default App;
