import React, { useEffect, useState } from "react";
import API from '../../utils/API';

import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { GoogleMap, useLoadScript, Marker,
    // InfoWindow,
  } from "@react-google-maps/api";

// use style hook for Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function DriverLocation(props) {

    // declaring our state and using the style declared above
    const classes = useStyles();
    const [ employees, setEmployees ] = useState([])
    const [ worker, setWorker ] = useState("");
    const [ selectedWorkerLat, setSelectedWorkerLat ] = useState("");
    const [ selectedWorkerLng, setSelectedWorkerLng ] = useState("");
    const [ ready, setReady ] = useState(false)

    // Function that gets the ID of the worker that matches the first and last name and once it gets the data back we set ready to true
    const getSelectedWorkersID = async (firstname, lastname) => {
        console.log("Checking again")
        const worker = await API.getWorkerID(firstname, lastname)
        await setSelectedWorkerLat(worker.data[0].userLat)
        await setSelectedWorkerLng(worker.data[0].userLng)
        await setReady(true)
    }

    // When there is change on the page in the way of a list, we have to separate the full name string and pass in the first and last name
    const handleChange = (event) => {
        setWorker(event.target.value);
        const workerString = event.target.value;
        const splitworker = workerString.split(' ');
        let firstname = splitworker[0];
        let lastname = splitworker[splitworker.length - 1];
        getSelectedWorkersID(firstname, lastname);
        
    };

    // When the component loads we call the getUserList function that queries the database and sets the employee state to the users
    useEffect(() => {
        const getUserList = async () => {
            let employeeList = [];
            const users = await API.getUserList()
            await users.data.forEach(name => {
                employeeList.push(`${name.firstname} ${name.lastname}`)
            });
            await setEmployees(employeeList)
        }

        getUserList()
    }, [worker])

    const libraries = ["places"];
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GoogleAPIKey,
        libraries,
      });    
    
      if (loadError) return "Error";
      if (!isLoaded) return "Loading...";

    return(
        <React.Fragment>
            <div className="row">
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
                <div className="col-12 heading">
                    <div className="form-group">
                    <h2 style={{textAlign: "center"}}>Choose a driver to Locate</h2>
                    <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Choose a worker for the Job</InputLabel>
                        <Select value={worker} defaultValue="Choose a Worker" onChange={handleChange}>
                        {employees.map((employee, key) => {
                            return <option value={employee} key={key}>{employee}</option>
                        })}
                        </Select>
                    </FormControl>
                    </div>
                </div>
            </div>
            
            <div className="row">
            <h3 className="col-12 heading">Last Known Location</h3>
                <div className="col-12 driverMap">
                    

                    {(ready === true)
                    ? <GoogleMap
                        mapContainerStyle={{ height: "100%", width: "100%"}}
                        zoom={8}
                        center={{ lat: selectedWorkerLat, lng: selectedWorkerLng}}
                        >
                        <Marker position={{ lat: selectedWorkerLat, lng: selectedWorkerLng}} />
                    </GoogleMap>
                    : <h6 style={{textAlign: "center"}}>Waiting on Selection...</h6>}

                </div>
            </div>
            
    
        </React.Fragment>
        
    )
}

export default DriverLocation