import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterComponent from "./router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';

ReactDOM.render(
    <React.StrictMode>
        <RouterComponent />
    </React.StrictMode>,
    document.getElementById("root")
);
