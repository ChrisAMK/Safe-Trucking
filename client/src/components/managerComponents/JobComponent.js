import React from "react";

function JobComponent(props) {


    return(

        <div className="row">
            <div className="col-4"></div>
                <div className="col-4 loginForm">
                    <h2>{props.address}</h2>
                    <form className="login">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Delivery Address</label>
                    <p>{props.address}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact number</label>
                    <p>{props.contact}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Who is working this job</label>
                    <p>{props.worker}</p>
                </div>
                </form>
            </div>
        </div>
    )
}

export default JobComponent