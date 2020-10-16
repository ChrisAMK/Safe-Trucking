import React, { useContext, useEffect, useRef } from "react";
import UserProvider from '../utils/UserContext';
import { Button } from '@material-ui/core';
import API from "../utils/API";


function Account() {

    const userData = useContext(UserProvider.context);
    const addressRef = useRef("")

    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const dobRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");


    const updateProfileInfo = (firstname, lastname, dob) => {
        API.updateProfile()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const handlePersonSubmit = () => {
        updateProfileInfo()
    }
    useEffect(() => {
        console.log(userData)
    })


    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ];
       
    
    return(
        <React.Fragment>
            <div>Test</div>
            <Button>Buuton</Button>
            <div className="row">
                <div className="col-12 heading">
                <h2>Personal Information</h2>
                {(userData.firstname === undefined) ? <h6>Sign in to View your Profile</h6> : <h6>Welcome {userData.firstname}</h6>}
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-5 jobCard">
                            <h3>Profile</h3>
                            <hr></hr>
                            <h6>Name: {userData.firstname} {userData.lastname}</h6>
                            <h6>DOB: {userData.birthday}</h6>
                            <hr></hr>
                            <br></br>
                            <button className="updateBtn">Update</button>
                        </div>
                        <div className="col-2" />
                        <div className="col-5 jobCard">
                            <h3>Contact Details</h3>
                            <hr></hr>
                            <h6>Email: {userData.email}</h6>
                            <h6>Phone: {userData.phonenumber}</h6>
                            <h6>Address: {userData.address}</h6>
                            <hr></hr>
                            <button className="updateBtn">Update</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 jobCard">
                            <h3>Update Profile</h3>
                            <hr></hr>
                            <div className="form-group">
                                <label>Update your First Name</label>
                                <input type="text" className="form-control" placeholder="Enter new First Name" ref={firstNameRef}></input>
                            </div>
                            <div className="form-group">
                                <label>Update your Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter new Last Name" ref={lastNameRef}></input>
                            </div>
                            <div className="form-group">
                                <label>Update your Date of Birth</label>
                                <input type="text" className="form-control" placeholder="Enter your DOB" ref={dobRef}></input>
                            </div>
                            <button className="updateBtn" onClick={() => handlePersonSubmit}>Update</button>
                        </div>
                        <div className="col-2" />
                        <div className="col-5 jobCard">
                        <h3>Update Profile</h3>
                            <hr></hr>
                            <div className="form-group">
                                <label>Update your Email Address</label>
                                <input type="text" className="form-control" placeholder="Enter new Email Address" ref={emailRef}></input>
                            </div>
                            <div className="form-group">
                                <label>Update your Phone Number</label>
                                <input type="text" className="form-control" placeholder="Enter new Phone Number" ref={phoneRef}></input>
                            </div>
                            <div className="form-group">
                                <label>Update your Home Address</label>
                                <input type="text" className="form-control" placeholder="Enter new Home Address" ref={addressRef}></input>
                            </div>
                            <button className="updateBtn">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Account;