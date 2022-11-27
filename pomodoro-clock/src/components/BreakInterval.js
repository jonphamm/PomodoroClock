import React from "react";

function BreakInterval(props) {
    // only allows user to decrease break length to 1 minute
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    // maximum user break length stops at 60 min
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <h4>Break Length <span class="head">(min)</span></h4>
            <section className="interval-container-content">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Increase</button>
                <p className="interval-length">{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Decrease</button>
            </section>
        </section>
    );
}

export default BreakInterval;