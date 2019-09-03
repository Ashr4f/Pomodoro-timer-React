global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";

import PomodoroTimer from "./components/pomodoro-timer";

import "./app.scss";

const App = () => (
    <React.Fragment>
        <div className={"header-container"}>
            <Header />
        </div>

        <div className={"content"}>
            <PomodoroTimer />
        </div>
    </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector("#root"));
