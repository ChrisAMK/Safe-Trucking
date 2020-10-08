import React, { useRef } from "react";
import API from "../utils/API";


function Signup() {

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const submitHandler = (event) => {

        event.preventDefault();
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        if (!userData.email || !userData.password) {
            return;
        }

        signUpUser(userData.email, userData.password);
        emailRef.current.value = "";
        passwordRef.current.value = "";
    };

    const signUpUser = (email, password) => {
        API.UserSignUp(email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    return(
        
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 searchBox">
                <h2>Sign Up Form</h2>
                <form className="signup">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailRef}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordRef}></input>
                    </div>
                    <div id="alert" className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span> <span className="msg"></span>
                    </div>
                    <button onClick={submitHandler} className="btn btn-default">Sign Up</button>
                </form>
                <br />
                <p>Or log in <a href="/login">here</a></p>
                </div>
            </div>
        </div>

    )
}

export default Signup