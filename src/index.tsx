import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterComponent from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";

// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { logEvent, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDbgHWmwuzVLCnxhjvHNGJkKqYHa0_5s68",
    authDomain: "sitio-personal.firebaseapp.com",
    databaseURL: "https://sitio-personal.firebaseio.com",
    projectId: "sitio-personal",
    storageBucket: "sitio-personal.appspot.com",
    messagingSenderId: "89976265615",
    appId: "1:89976265615:web:fccd12d78a088d1858c9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "page_loaded");

ReactDOM.render(
    <React.StrictMode>
        <RouterComponent />
    </React.StrictMode>,
    document.getElementById("root")
);
