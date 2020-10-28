import React from "react";

function DriverStats(props) {
    return(
        <React.Fragment>
            <div className="row">
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
                <div className="col-12 heading">
                    <h1>Edit Jobs</h1>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DriverStats