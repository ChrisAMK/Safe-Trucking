import React from "react";

function DriverHome(props) {
    return(
        <React.Fragment>
        <div className="row topRow">
            <div className="col-1"></div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-4 driverPanel" onClick={() => props.handlePageChange("currentjob")}>
                <h1>View Current Trip</h1>
                <img src={require("../../assets/newjob.png")} className="menuIcon" alt="icon"></img>
            </div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-4 driverPanel" onClick={() => props.handlePageChange("safety")}>
                <h1>Latest Safety News</h1>
                <img src={require("../../assets/newjob.png")} className="menuIcon" alt="icon"></img>
            </div>
            <div className="col-1"></div>
        </div>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-4 driverPanel" onClick={() => props.handlePageChange("updatestats")}>
                <h1>Update Information</h1>
                <img src={require("../../assets/newjob.png")} className="menuIcon" alt="icon"></img>
            </div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-4 driverPanel" onClick={() => props.handlePageChange("viewtrips")}>
                <h1>View Past Trips</h1>
                <img src={require("../../assets/newjob.png")} className="menuIcon" alt="icon"></img>
            </div>
            <div className="col-1"></div>
        </div>
    </React.Fragment>
    )
}

export default DriverHome;