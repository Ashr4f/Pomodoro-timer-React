import React, {useState, useEffect} from "react";

export default function PomodoroTimer(props) {
    const [seconds, setSeconds] = useState(props.secondsDefaultValue);
    const [paused, setPaused] = useState(props.breakPaused);

    useEffect(() => {
        setSeconds(props.secondsDefaultValue);
    }, [props.secondsDefaultValue]);

    useEffect(() => {
        setPaused(props.breakPaused);
    }, [props.breakPaused]);

    useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => {
                    const dynamicDocumentTitle = specialText => {
                        if (specialText) {
                            document.title = specialText;
                        } else {
                            document.title = `🍅 Timer: ${Math.floor(
                                (s - 1) / 60,
                            )
                                .toString()
                                .padStart(2, "0")}:${Math.floor((s - 1) % 60)
                                .toString()
                                .padStart(2, "0")} 🍅`;
                        }
                    };
                    if (s > 1) {
                        dynamicDocumentTitle();
                        return s - 1;
                    }

                    props.showModal(true);

                    dynamicDocumentTitle("🍅 Timer finsihed 🍅");
                    setPaused(true);

                    if (s === 0) {
                        return s;
                    }

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
        if (seconds >= 1 && seconds <= 60 * 60) {
            setPaused(false);
        } else {
            //
        }
    }
    function incrementTimer() {
        if (seconds >= 0 && seconds <= 59 * 60) {
            setPaused(true);
            setSeconds(seconds + 60);
        }
    }
    function decrementTimer() {
        if (seconds >= 119) {
            setPaused(true);
            setSeconds(seconds - 60);
        }
    }
    function pauseTimer() {
        setPaused(true);
    }
    function resetTimer() {
        setPaused(true);
        setSeconds(25 * 60);
        document.title = "🍅 Pomodro Timer 🍅";
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
            <div className={"timer-buttons-container clearfix"}>
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
