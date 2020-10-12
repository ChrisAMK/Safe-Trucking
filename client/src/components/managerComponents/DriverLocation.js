import React from "react";

function DriverLocation(props) {
    return(
        <React.Fragment>
            <h1>View DriverLocation</h1>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
        </React.Fragment>
        
    )
}

export default DriverLocation