import React from "react";

function ManagerHome(props) {
    return(
        <React.Fragment>
        <div className="row topRow">
            <div className="col-5 managerPanel" onClick={() => props.handlePageChange("newJob")}>
                <h1>Create a new Job</h1>
            </div>
            <div className="col-2"></div>
            <div className="col-5 managerPanel" onClick={() => props.handlePageChange("driverLoc")}>
                <h1>View Driver Location</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-5 managerPanel" onClick={() => props.handlePageChange("driverStats")}>
                <h1>View Driver Stats</h1>
            </div>
            <div className="col-2"></div>
            <div className="col-5 managerPanel" onClick={() => props.handlePageChange("allJobs")}>
                <h1>View All Jobs</h1>
            </div>
        </div>
    </React.Fragment>
    )
}
    
export default ManagerHome;