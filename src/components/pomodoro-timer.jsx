import React, {useState, useEffect} from "react";

export default function PomodoroTimer() {
    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => {
                    const dynamicDocumentTitle = specialText => {
                        if (specialText) {
                            document.title = specialText;
                        } else {
                            document.title = `Timer: ${Math.floor((s - 1) / 60)
                                .toString()
                                .padStart(2, "0")}:${Math.floor((s - 1) % 60)
                                .toString()
                                .padStart(2, "0")}`;
                        }
                    };
                    if (s > 1) {
                        dynamicDocumentTitle();
                        return s - 1;
                    }
                    dynamicDocumentTitle("Timer finsihed");
                    setPaused(true);
                    return s - 1;
                });
            } else {
                clearInterval(int);
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, [paused]);

    function startTimer() {
        if (seconds > 1 && seconds <= 60 * 60) {
            setPaused(false);
        }
    }
    function incrementTimer() {
        if (seconds >= 0 && seconds <= 59 * 60) {
            setSeconds(seconds + 60);
        }
        if (paused) {
            setPaused(true);
        } else if (paused === false) {
            setPaused(false);
        }
    }
    function decrementTimer() {
        if (seconds >= 60 && seconds <= 59 * 60) {
            setSeconds(seconds - 60);
        }
        if (paused) {
            setPaused(true);
        } else if (paused === false) {
            setPaused(false);
        }
    }
    function pauseTimer() {
        setPaused(true);
    }
    function resetTimer() {
        setPaused(true);
        setSeconds(25 * 60);
    }

    return (
        <React.Fragment>
            <p className={"timer"}>
                {`${Math.floor(seconds / 60)
                    .toString()
                    .padStart(2, "0")}:${`${seconds % 60}`
                    .toString()
                    .padStart(2, "0")}`}
            </p>
            <div className={"timer-buttons-container"}>
                <button
                    className={"timer-button"}
                    type={"button"}
                    onClick={incrementTimer}>
                    {"+"}
                </button>
                <button
                    className={"timer-button"}
                    type={"button"}
                    onClick={paused ? startTimer : pauseTimer}>
                    {paused ? "Start" : "Pause"}
                </button>
                <button
                    className={"timer-button"}
                    type={"button"}
                    onClick={resetTimer}>
                    {"Reset"}
                </button>
                <button
                    className={"timer-button"}
                    type={"button"}
                    onClick={decrementTimer}>
                    {"-"}
                </button>
            </div>
        </React.Fragment>
    );
}
