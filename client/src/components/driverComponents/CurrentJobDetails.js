import React, { useContext, useEffect, useState } from "react";
import UserProvider from '../../utils/UserContext';
import API from "../../utils/API";
import DriverJobView from "./DriverJobView";

function CurrentJobDetails(props) {

    const [ jobInfo, setJobInfo ] = useState({})
    const [ ready, setReady ] = useState(false)
    const [location, setLocation] = useState({})

    const userData = useContext(UserProvider.context);

    console.log(userData)

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(result => {
            setLocation(result.coords)
        })

        const getJobInfo = async (id) => {
            const jobDetails = await API.viewJobByID(id)
            await setJobInfo(jobDetails.data[0]);
            await setReady(true)
        }

    
        getJobInfo(userData.assignedJob)
    }, [])

    const startJob = async (id, location) => {
        let userLat = location.latitude
        let userLng = location.longitude
        console.log("START JOB FUNCTION", userLat, userLng)
        const locationPing = await API.pingLocation(id, userLat, userLng)
        console.log(locationPing)
    }

    

   
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
                : (ready)
                    ? <React.Fragment>
                        <div className="row">
                            <div className="col-12 controls">
                                <h1>Controls</h1>
                                <div className="jobBtnBar">
                                    <button className="backBtn jobBtn" onClick={() => startJob(userData.id, location)}>Start Job</button>
                                    <button className="backBtn jobBtn">Take a Break</button>
                                    <button className="backBtn jobBtn">Complete Job</button>
                                </div>
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