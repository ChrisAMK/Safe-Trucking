import React, { useRef } from "react";
import API from "../../utils/API";

function JobCreation(props) {

    const clientRef = useRef("");
    const addressRef = useRef("");
    const contactNameRef = useRef("");
    const contactNumberRef = useRef("");
    const backupContactNameRef = useRef("");
    const backupContactNumberRef = useRef("");
    const detailsRef = useRef("");
    const workerRef = useRef("");
    const deliveryDateRef = useRef("");

    const postJob = (client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate) => {
        console.log(deliveryDate)
        API.createJob(client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        postJob(clientRef.current.value, addressRef.current.value, contactNameRef.current.value, contactNumberRef.current.value, backupContactNameRef.current.value, backupContactNumberRef.current.value, detailsRef.current.value, workerRef.current.value, deliveryDateRef.current.value);
        clientRef.current.value = "";
        addressRef.current.value = "";
        contactNameRef.current.value = "";
        contactNumberRef.current.value = "";
        backupContactNameRef.current.value = "";
        backupContactNumberRef.current.value = "";
        detailsRef.current.value = "";
        workerRef.current.value = "";
        deliveryDateRef.current.value = "";
    }

    return(
        <React.Fragment>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>

            <div className="row">
                <div className="col-12 loginForm">
                    <h2 className="jobCtitle">Job Creation Sheet</h2>
                    <hr></hr>
                    <form className="login">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Client/Job Name</label>
                                    <input type="text" className="form-control" placeholder="Enter an Client/Job Name" ref={clientRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Delivery Address</label>
                                    <input type="text" className="form-control" placeholder="Enter an Address" ref={addressRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Site Contact Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact Name" ref={contactNameRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Site Contact Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact Number" ref={contactNumberRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Who do you want to assign this job to?</label>
                                    <input type="text" className="form-control" placeholder="Enter a workers name" ref={workerRef}></input>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Estimated Delivery Date</label>
                                    <input type="date" className="form-control" placeholder="Please enter a rough time and date" ref={deliveryDateRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Back up Contact</label>
                                    <input type="text" className="form-control" placeholder="Enter a Back up Contact Name" ref={backupContactNameRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Back up Contact Number</label>
                                    <input type="text" className="form-control" placeholder="Enter a Back up contact Number" ref={backupContactNumberRef}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Job Details</label>
                                    <textarea type="text" className="form-control" placeholder="Enter any needed information including Exact time" ref={detailsRef}></textarea>
                                </div>
                            </div>
                        </div>
                        <button onClick={submitHandler} className="submitBtn jobForm">Submit Job</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default JobCreation