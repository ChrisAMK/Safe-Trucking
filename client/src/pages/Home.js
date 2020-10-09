import React, { useContext } from "react";
import Driver from "../components/Driver";
import UserProvider from "../utils/UserContext";

function Home(props) {

    const userData = useContext(UserProvider.context);
    console.log(userData)


    return(
        <div>
            <Driver />
        </div>
        
    )
}

export default Home;