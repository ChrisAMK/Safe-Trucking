import React, { useContext, useEffect, useState } from "react";
import UserProvider from '../../utils/UserContext';
import API from "../../utils/API";
import DriverJobView from "./DriverJobView";

function CurrentJobDetails(props) {

    // Setting up our state
    const [ jobInfo, setJobInfo ] = useState({})
    const [ ready, setReady ] = useState(false)
    const [location, setLocation] = useState({})

    // Use Context gets information about the User from the provider
    const userData = useContext(UserProvider.context);

    useEffect(() => {

        // When the page loads we get the user's current location and save it to state
        navigator.geolocation.getCurrentPosition(result => {
            setLocation(result.coords)
        })

        // When the page loads we use the user context to search for the information of their assigned job
        // Once we get the job infomation back we save it to save and set the page as ready to load
        const getJobInfo = async (id) => {
            const jobDetails = await API.viewJobByID(id)
            await setJobInfo(jobDetails.data[0]);
            await setReady(true)
        }

        getJobInfo(userData.assignedJob)
    }, [])

    // When click the Start Job button, we are setting our location to the database
    const startJob = async (id, location) => {
        let userLat = location.latitude
        let userLng = location.longitude
        await API.pingLocation(id, userLat, userLng)
    }

    return(
        <React.Fragment>
            <div className="row">
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
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
                : (ready)
                    ? <React.Fragment>
                        <div className="col-12 heading">
                            <h1>Controls</h1>
                            <div className="jobBtnBar">
                                <button className="backBtn jobBtn" onClick={() => startJob(userData.id, location)}>Start Job</button>
                                <button className="backBtn jobBtn">Take a Break</button>
                                <button className="backBtn jobBtn">Complete Job</button>
                            </div>
                        </div>
                        <DriverJobView jobInfo={jobInfo}/>
                    </React.Fragment>
                    : <div>Loading</div>
                }
            </div>
        </React.Fragment>

        
    )
}

export default CurrentJobDetails