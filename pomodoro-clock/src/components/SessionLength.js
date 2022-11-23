import React from "react";

function SessionLength(props) {

    return (
        <section className="interval-container-content">
            <button>Down</button>
            <p>{props.sessionLength}</p>
            <button>Up</button>
        </section>
    )
}

export default SessionLength;