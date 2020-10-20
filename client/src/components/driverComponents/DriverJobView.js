import React from 'react';
import MapWrapped from "../managerComponents/MapWrapped";

function DriverJobView(props) {

    return(
        <div className="col-12 jobCard">
            <div className="jobDate">
                <strong>Delivery Date:</strong>
                <p>{props.jobInfo.deliveryDate}</p>
            </div>
            <h2 className="jobTitle">{props.jobInfo.client}</h2>
            <hr></hr>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                        <strong>Delivery Address:</strong>
                        <p>{props.jobInfo.address}</p>
                        <hr></hr>
                    </div>
                    <div className="form-group">
                        <strong>Site contacts:</strong>
                    <p>First: <a href={`tel:${props.jobInfo.contactNumber}`}>{props.jobInfo.contactName} {props.jobInfo.contactNumber}</a><br></br> Back up: <a href={`tel:${props.jobInfo.backupContactNumber}`}>{props.jobInfo.backupContactName} {props.jobInfo.backupContactNumber}</a></p>
                        <hr></hr>
                    </div>
                    <div className="form-group">
                        <strong>Job Details: </strong>
                        <p>{props.jobInfo.details}</p>
                        <hr></hr>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + process.env.REACT_APP_GoogleAPIKey}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    area={{ lat: props.jobInfo.lat,
                            lng: props.jobInfo.lng  }}
                    />
                </div>
            </div>
        </div>

    )
}

export default DriverJobView