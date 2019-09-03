import React from "react";

export default function Header() {
    return (
        <div className={"header-container"}>
            <p>{"Pomodoro Timer"}</p>
            <a
                className={"github-fork-container"}
                href={"https://github.com/Ashr4f/Pomodoro-timer-React"}>
                <img
                    src={
                        "https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png"
                    }
                    className={"attachment-full size-full github-fork"}
                    alt={"Fork me on GitHub"}
                    data-recalc-dims={"1"}
                />
            </a>
        </div>
    );
}
