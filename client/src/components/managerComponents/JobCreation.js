import React, { useEffect, useRef, useState } from "react";
import API from "../../utils/API";
// import Search from "./jobSearch";
import JobAutoComplete from "./JobAutoComplete";

function JobCreation(props) {

    const clientRef = useRef("");
    // const addressRef = useRef("");
    const contactNameRef = useRef("");
    const contactNumberRef = useRef("");
    const backupContactNameRef = useRef("");
    const backupContactNumberRef = useRef("");
    const detailsRef = useRef("");
    const workerRef = useRef("");
    const deliveryDateRef = useRef("");
    const [ latRef, setLatRef ] = useState("")
    const [ lngRef, setLngRef ] = useState("")
    const [ address, setAddress ] = useState("")

    const setGeoLocation = (lat, lng) => {
        setLatRef(lat);
        setLngRef(lng);
    }

    const setFilledAddress = (address) => {
        setAddress(address)
    }

    const getUserList = async () => {
        let employeeList = [];
        const users = await API.getUserList()
        await console.log(users)
        await users.data.forEach(name => {
            employeeList.push(name)
        });
        await console.log("Employees", employeeList);
        
    }

    useEffect(() => {
        console.log(latRef)
        console.log(address)
        getUserList()
    }, [latRef, lngRef, address])

    const postJob = (client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng) => {
        API.createJob(client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        postJob(clientRef.current.value, address, contactNameRef.current.value, contactNumberRef.current.value, backupContactNameRef.current.value, backupContactNumberRef.current.value, detailsRef.current.value, workerRef.current.value, deliveryDateRef.current.value, latRef, lngRef);
        clientRef.current.value = "";
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
                                    <label>Client/Job Name</label>
                                    <input type="text" className="form-control" placeholder="Enter an Client/Job Name" ref={clientRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Delivery Address</label>
                                    <JobAutoComplete setGeoLocation={setGeoLocation} setFilledAddress={setFilledAddress}/>
                                </div>
                                <div className="form-group">
                                    <label>Site Contact Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact Name" ref={contactNameRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Site Contact Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact Number" ref={contactNumberRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Who do you want to assign this job to?</label>
                                    <input type="text" className="form-control" placeholder="Enter a workers name" ref={workerRef}></input>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Estimated Delivery Date</label>
                                    <input type="date" className="form-control" placeholder="Please enter a rough time and date" ref={deliveryDateRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Back up Contact</label>
                                    <input type="text" className="form-control" placeholder="Enter a Back up Contact Name" ref={backupContactNameRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Back up Contact Number</label>
                                    <input type="text" className="form-control" placeholder="Enter a Back up contact Number" ref={backupContactNumberRef}></input>
                                </div>
                                <div className="form-group">
                                    <label>Job Details</label>
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