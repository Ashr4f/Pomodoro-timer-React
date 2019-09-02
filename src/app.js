global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";

import PomodoroTimer from "./components/pomodoro-timer";

import "./app.scss";

const App = () => (
    <div>
        <PomodoroTimer />
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
