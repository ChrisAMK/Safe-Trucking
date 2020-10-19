import React, { useEffect, useState } from "react";
import BigMap from "./BigMap";
import MapWrapped from "./MapWrapped";
import API from '../../utils/API';


import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function DriverLocation(props) {

    const classes = useStyles();

    const [ employees, setEmployees ] = useState([])
    const [ selectedWorker, setSelectedWorker ] = useState("");
    const [ selectedWorkerLat, setSelectedWorkerLat ] = useState("");
    const [ selectedWorkerLng, setSelectedWorkerLng ] = useState("");
    const [ ready, setReady ] = useState(false)

    const getSelectedWorkersID = async (firstname, lastname) => {
        const worker = await API.getWorkerID(firstname, lastname)
        await console.log(worker.data)
        await setSelectedWorkerLat(worker.data[0].userLat)
        await setSelectedWorkerLng(worker.data[0].userLng)
        await setReady(true)
    }

    const handleChange = (event) => {
        setSelectedWorker(event.target.value);
        const workerString = event.target.value;
        const splitworker = workerString.split(' ');
        let firstname = splitworker[0];
        let lastname = splitworker[splitworker.length - 1];
        getSelectedWorkersID(firstname, lastname);
        
    };

    useEffect(() => {

        const getUserList = async () => {
            let employeeList = [];
            const users = await API.getUserList()
            await users.data.forEach(name => {
                employeeList.push(`${name.firstname} ${name.lastname}`)
            });
            await setEmployees(employeeList)
            await console.log(employeeList)
            return employeeList;
        }

        getUserList()

    }, [])


    return(
        <React.Fragment>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            <div className="form-group">
                <h2 style={{textAlign: "center"}}>Choose a driver to Locate</h2>
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel fullWidth htmlFor="age-native-simple">Choose a worker for the Job</InputLabel>
                    <Select fullWidth value={selectedWorker} onChange={handleChange}>
                    {employees.map((employee) => {
                        return <option value={employee}>{employee}</option>
                    })}
                    </Select>
                </FormControl>
            </div>
            <div className="row">
                <div className="col-12 driverMap">
                    <h3>Last Known Location</h3>


                    {(ready === true)
                    ? <BigMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + process.env.REACT_APP_GoogleAPIKey}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        area={{ lat: selectedWorkerLat,
                                lng: selectedWorkerLng}}
                        />
                    : <h6 style={{textAlign: "center"}}>Waiting on Selection...</h6>}


                    {/* <BigMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=` + process.env.REACT_APP_GoogleAPIKey}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    area={{ lat: selectedWorkerLat | 31,
                            lng: selectedWorkerLng | 31 }}
                    /> */}

                </div>
            </div>
            
    
        </React.Fragment>
        
    )
}

export default DriverLocation