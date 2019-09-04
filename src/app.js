global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";

import BreakTimerModal from "./components/modals";

import PomodoroTimer from "./components/pomodoro-timer";

import "./app.scss";

const App = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [secondsDefaultValue, setSecondsDefaultValue] = React.useState(
        25 * 60,
    );
    const [breakPaused, setBreakPaused] = React.useState(true);

    return (
        <React.Fragment>
            <div className={"header-container"}>
                <Header />
            </div>

            <div className={"content"}>
                <PomodoroTimer
                    showModal={setModalShow}
                    secondsDefaultValue={secondsDefaultValue}
                    breakPaused={breakPaused}
                />

                <BreakTimerModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onSet={value => {
                        setModalShow(false);
                        setSecondsDefaultValue(value);
                        setBreakPaused(false);
                    }}
                />
            </div>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
