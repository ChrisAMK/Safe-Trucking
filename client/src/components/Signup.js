// Signup component is rendered if the user needs to create a new account
import React, { useRef, useState } from "react";
import API from "../utils/API";

function Signup() {
    // setting up state on if the user wants to create a manager account
    const [ isManager, setIsManager ] = useState(false);

    // setting up references to the user's input
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const firstNameRef = useRef("");
    const lastNameRef = useRef("")

    // When the submit button is pressed this event is triggered
    const submitHandler = (event) => {
        // preventing the page from refreshing 
        event.preventDefault();
        // creating a easy object to pass to the information to
        const userData = {
            email: emailRef.current.value.trim(),
            password: passwordRef.current.value.trim(),
            firstname: firstNameRef.current.value.trim(),
            lastname: lastNameRef.current.value.trim()
        };

        // Making sure all data is filled out
        if (!userData.email || !userData.password || !userData.firstname || !userData.lastname) {
            return;
        }

        // using the userData as parameters to the signup Function and resetting the input values
        signUpUser(userData.email, userData.password, isManager, userData.firstname, userData.lastname);
        emailRef.current.value = "";
        passwordRef.current.value = "";
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";

    };

    // creating a function that uses the UserSignUp API function to create a post request for the server to handle
    const signUpUser = (email, password, isManager, firstname, lastname) => {
        API.UserSignUp(email, password, isManager, firstname, lastname)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    // setting the state of isManager to true or false for the signup function
    const isManagerCheck = () => {
        (isManager === false) ? setIsManager(true) : setIsManager(false)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 signupForm">
                <h2>Sign Up Form</h2>
                <form className="signup">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter your First Name</label>
                        <input type="name" className="form-control" id="name-input" placeholder="First Name" ref={firstNameRef}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter your Last Name</label>
                        <input type="name" className="form-control" id="name-input" placeholder="Last Name" ref={lastNameRef}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailRef}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordRef}></input>
                    </div>
                    <div className="form-group managerCheck">
                        <input className="form-check-input" type="checkbox" onClick={isManagerCheck}></input>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Are you a manager
                        </label>
                    </div>
                    <div id="alert" className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span> <span className="msg"></span>
                    </div>
                    <button onClick={submitHandler} className="btn btn-default">Sign Up</button>
                </form>
                <br />
                <p>Or log in <a href="/">here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup