import React from "react";

function ViewPastTrips(props) {
    return (
        <div>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            ViewPastTrips
        </div>
    )
}

export default ViewPastTrips