import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";

export default function BreakTimerModal(props) {
    const [breakSeconds, setBreakSeconds] = useState(5 * 60);

    function incrementBreakSeconds() {
        if (breakSeconds >= 0 && breakSeconds <= 59 * 60) {
            setBreakSeconds(breakSeconds + 60);
        }
    }
    function decrementBreakSeconds() {
        if (breakSeconds > 60) {
            setBreakSeconds(breakSeconds - 60);
        }
    }

    return (
        <Modal
            onHide={props.onHide}
            show={props.show}
            size={"md"}
            aria-labelledby={"contained-modal-title-vcenter"}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id={"contained-modal-title-vcenter"}>
                    {"Timer has finished"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{"Do you want to set a break?"}</h4>
                <div className={"clearfix text-center"}>
                    <p className={"break-timer"}>
                        {`${Math.floor(breakSeconds / 60)
                            .toString()
                            .padStart(2, "0")}:${`${breakSeconds % 60}`
                            .toString()
                            .padStart(2, "0")}`}
                    </p>
                    <button
                        className={"float-left break-button"}
                        type={"button"}
                        onClick={incrementBreakSeconds}>
                        {"+"}
                    </button>

                    <button
                        className={"float-right break-button"}
                        type={"button"}
                        onClick={decrementBreakSeconds}>
                        {"-"}
                    </button>
                </div>
            </Modal.Body>
            <div className={"clearfix modal-footer-container"}>
                <button type={"button"} onClick={() => props.onHide}>
                    {"Close"}
                </button>
                <button
                    type={"button"}
                    onClick={() => props.onSet(breakSeconds)}>
                    {"Set"}
                </button>
            </div>
        </Modal>
    );
}
