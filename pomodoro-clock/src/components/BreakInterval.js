import React from "react";

function BreakInterval(props) {

    return (
        <section>
            <h4>Break Length <span class="head">(min)</span></h4>
            <section className="interval-container-content">
                <button>Increase</button>
                <p className="interval-length">{props.BreakInterval}</p>
                <button>Decrease</button>
            </section>
        </section>
    );
}

export default BreakInterval;