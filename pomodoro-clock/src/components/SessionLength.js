import React from "react";

function SessionLength(props) {

    return (
        <section>
            <h4>Session Length <span class="head">(min)</span></h4>
            <section className="interval-container-content">
                <button>Increase</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button>Decrease</button>
            </section>
        </section>
    )
}

export default SessionLength;