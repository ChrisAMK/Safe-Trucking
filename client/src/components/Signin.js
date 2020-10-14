// This component is rendered as the first component on the app, this allows the user to sign in to an existing account
// or create an account is need be
import React, { useRef } from "react";
import API from "../utils/API";
// import WrappedMap from "../components/managerComponents/Map";

function Signin() {

    // capturing the value of the inputs with refs
    const emailRef = useRef("");
    const passwordRef = useRef("");
    
    // when the submit button is clicked the user's input is then given to our login user function that sends a post request to the database
    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        // if a field is empty return out of the function
    if (!userData.email || !userData.password) {
        return;
    }

    // we passing the users input as parameters to the loginUser function and resetting the input fields
    loginUser(userData.email, userData.password);
    emailRef.current.value = "";
    passwordRef.current.value = "";

    }

    // defining the function for the submit handler
    const loginUser = (email, password) => {
        API.UserSignIn(email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    return (
        <div className="container">
            {/* <WrappedMap googleMapURL={''}/> */}
            <div className="row">
                <div className="col-1 col-md-1 col-lg-4"></div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-4 loginForm">
                    <h2>Login Form</h2>
                    <form className="login">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailRef}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordRef}></input>
                </div>
                <button onClick={submitHandler} className="submitBtn">Login</button>
                    </form>
                    <br />
                    <p>Or sign up <a href="/signup">here</a></p>
                </div>
                <div className="col-1 col-md-1 col-lg-4"></div>
            </div>
        </div>
    )
}

export default Signin