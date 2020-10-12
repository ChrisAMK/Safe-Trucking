import React from "react";

function JobComponent(props) {

    console.log(props)

    return(

        <div className="row">
            <div className="col-12">
                <div className="row loginForm">
                    <div className="col-6">
                        <h2>{props.client}</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Delivery Address</label>
                        <p>{props.address}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">{`${props.contactName} is your Site Contact`}</label>
                        <p>{props.contactNumber}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Assigned Driver:</label>
                        <p>{props.worker}</p>
                    </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{props.backupContactName}</label>
                        <p>{props.backupContactNumber}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Delivery Date</label>
                        <p>{props.deliveryDate}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Job Details</label>
                        <p>{props.details}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobComponent