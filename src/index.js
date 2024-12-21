import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Make sure the CSS file exists
import App from "./App"; // Make sure the App component is being imported correctly

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
