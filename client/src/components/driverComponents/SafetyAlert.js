import React from "react";

function SafetyAlert(props) {
    return(
        <div>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>

            SafetyAlert
        </div>
    )
}

export default SafetyAlert