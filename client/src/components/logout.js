import React, { useContext } from "react";
import API from "../utils/API";
import UserProvider from "../utils/UserContext";

function Logout() {

    const userData = useContext(UserProvider.context);
    console.log(userData)

    const logOutHandler = () => {
        API.userLogOut()
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>{userData.email} do you want to log out?</h1>
            <button onClick={logOutHandler}>Click to log out</button>
        </div>
        
    )
}

export default Logout;