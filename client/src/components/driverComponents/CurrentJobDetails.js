import React from "react";

function CurrentJobDetails(props) {
    return(
        <div>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            CurrentJobDetails
        </div>
    )
}

export default CurrentJobDetails