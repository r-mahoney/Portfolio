import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TagManager from "react-gtm-module";
import { BrowserRouter } from "react-router-dom";
const tagManagerArgs = {
    gtmId: "GTM-MMWMCPJ",
};
TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
