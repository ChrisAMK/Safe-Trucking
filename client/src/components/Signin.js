import React, { useRef } from "react";
import API from "../utils/API";

function Signin() {

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

    loginUser(userData.email, userData.password);
    emailRef.current.value = "";
    passwordRef.current.value = "";

    }

    const loginUser = (email, password) => {
        API.UserSignIn(email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 searchBox">
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
                <button onClick={submitHandler} className="btn btn-default">Login</button>
                    </form>
                    <br />
                    <p>Or sign up <a href="/signup">here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signin