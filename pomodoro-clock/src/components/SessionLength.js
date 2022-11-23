import React from "react";

function SessionLength(props) {

    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container-content">
                <button>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button>Up</button>
            </section>
        </section>
    )
}

export default SessionLength;