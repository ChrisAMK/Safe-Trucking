import React from "react";

function DriverStats(props) {
    return(
        <React.Fragment>
            <h1>View DriverStats</h1>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
        </React.Fragment>
    )
}

export default DriverStats