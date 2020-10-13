import React from "react";

function UpdateDetails(props) {
    return(
        <div>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            UpdateDetails
        </div>
    )
}

export default UpdateDetails