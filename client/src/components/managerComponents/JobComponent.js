import React from "react";

function JobComponent(props) {

    return(

        <div className="row">
            <div className="col-12 jobCard">
                <div className="jobDate">
                    <strong>Delivery Date:</strong>
                    <p>{props.deliveryDate}</p>
                </div>
                <h2 className="jobTitle">{props.client}</h2>    
                <strong><p>Assigned Driver: {props.worker}</p></strong>
                <hr></hr>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                            <strong>Delivery Address:</strong>
                            <p>{props.address}</p>
                            <hr></hr>
                        </div>
                        <div className="form-group">
                            <strong>Site contacts:</strong>
                        <p>First: {props.contactName} {props.contactNumber}<br></br> Back up: {props.backupContactName} {props.backupContactNumber}</p>
                            <hr></hr>
                        </div>
                        <div className="form-group">
                            <strong>Job Details: </strong>
                            <p>{props.details}</p>
                            <hr></hr>
                        </div>
                    </div>
                    {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6" id="map">
                    
                    
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default JobComponent