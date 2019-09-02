import React, {useState, useEffect} from "react";

export default function PomodoroTimer() {
    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => s - 1);
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, [paused]);

    function startTimer() {
        if (seconds >= 60 && seconds <= 60 * 60) {
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
            {`${Math.floor(seconds / 60)}:${`00${seconds % 60}`.slice(-2)}`}
            <button type={"button"} onClick={incrementTimer}>
                {"+"}
            </button>
            <button type={"button"} onClick={paused ? startTimer : pauseTimer}>
                {paused ? "Start" : "Pause"}
            </button>
            <button type={"button"} onClick={resetTimer}>
                {"Reset"}
            </button>
            <button type={"button"} onClick={decrementTimer}>
                {"-"}
            </button>
        </React.Fragment>
    );
}
