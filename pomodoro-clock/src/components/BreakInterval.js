import React from "react";

function BreakInterval(props) {

    return (
        <section className="interval-container-content">
            <button>Down</button>
            <p>{props.BreakInterval}</p>
            <button>Up</button>
        </section>
    );
}

export default BreakInterval;