import React from "react";

function JobComponent(props) {

    return(

        <div className="row">
            <div className="col-12 jobCard">
                <h2 className="jobTitle">{props.client}</h2>
                <hr></hr>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><strong>Delivery Address:</strong></label>
                            <p>{props.address}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1"><strong>{props.contactName}</strong> is your Site Contact</label>
                            <p>{props.contactNumber}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><strong>Assigned Driver:</strong></label>
                            <p>{props.worker}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><strong>{props.backupContactName}</strong> is your Backup Site Contact</label>
                        <p>{props.backupContactNumber}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><strong>Delivery Date</strong></label>
                        <p>{props.deliveryDate}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><strong>Job Details</strong></label>
                        <p>{props.details}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobComponent