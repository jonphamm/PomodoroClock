import React from "react";

function BreakInterval(props) {

    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container-content">
                <button>Down</button>
                <p className="interval-length">{props.BreakInterval}</p>
                <button>Up</button>
            </section>
        </section>
    );
}

export default BreakInterval;