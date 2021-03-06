global.jQuery = require("jquery");
require("bootstrap");

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";

import BreakTimerModal from "./components/modals";

import PomodoroTimer from "./components/pomodoro-timer";

import "bootstrap/dist/css/bootstrap.css";
import "./app.scss";

const App = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [secondsDefaultValue, setSecondsDefaultValue] = React.useState(
        25 * 60,
    );
    const [breakPaused, setBreakPaused] = React.useState(true);

    return (
        <React.Fragment>
            <Header />

            <div className={"content"}>
                <PomodoroTimer
                    showModal={setModalShow}
                    secondsDefaultValue={() => secondsDefaultValue}
                    breakPaused={() => breakPaused}
                />

                <BreakTimerModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onSet={value => {
                        setSecondsDefaultValue(value);
                        setBreakPaused(false);
                        setModalShow(false);
                    }}
                    onExit={() => {
                        setSecondsDefaultValue(0);
                        setBreakPaused(true);
                        setModalShow(false);
                    }}
                />
            </div>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
