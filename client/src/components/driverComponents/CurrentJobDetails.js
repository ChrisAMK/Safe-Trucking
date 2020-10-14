import React, { useContext } from "react";
import UserProvider from '../../utils/UserContext';

function CurrentJobDetails(props) {

    const userData = useContext(UserProvider.context);


    // useEffect(() => {

    // })
   
    return(
        <React.Fragment>
            <div>
                <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            </div>
            <div className="body">
                {(userData.assignedJob === null) ? 
                // if user has no job assigned the code directly underneath is render as a error message
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 tAlert">
                    <h1>You do not currently have an Assigned Job <strong>{userData.firstname}</strong></h1>
                    </div>
                    <div className="col-2"></div>
                </div>
                // If user has a job assigned the code underneath here is rendered
                :
                <p>Has Job Second Option</p>}
            </div>
        </React.Fragment>

        
    )
}

export default CurrentJobDetails