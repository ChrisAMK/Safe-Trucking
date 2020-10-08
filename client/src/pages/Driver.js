import React from "react";
import Signin from "../components/Signin";
// import Signup from "../components/Signup";

function Driver() {


    return(
        <div className="driverBody">
            <h1>DRIVERS PAGE</h1>
            <h6>Please sign in to continue</h6>
            <Signin />
            
        </div>
    )
}

export default Driver;