import React, { useEffect, useRef, useState } from "react";
import API from "../../utils/API";
import JobAutoComplete from "./JobAutoComplete";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// Use styles for Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function JobCreation(props) {

    // Declaring State and making use of our style for Material UI
    const classes = useStyles();
    const [ latRef, setLatRef ] = useState("");
    const [ lngRef, setLngRef ] = useState("");
    const clientRef = useRef("");
    const contactNameRef = useRef("");
    const contactNumberRef = useRef("");
    const backupContactNameRef = useRef("");
    const backupContactNumberRef = useRef("");
    const detailsRef = useRef("");
    const [ address, setAddress ] = useState("");
    const [ employees, setEmployees ] = useState([]);
    const [ selectedDate, setSelectedDate] = useState(Date.now());
    const [ selectedWorker, setSelectedWorker ] = useState("");
    const [ selectedWorkerID, setSelectedWorkerID ] = useState("");
    const [ jobCount, setJobCount ] = useState("");

    // Get selected workers ID gets the ID of the worker who matches the first and last name parsed in
    const getSelectedWorkersID = async (firstname, lastname) => {
        const worker = await API.getWorkerID(firstname, lastname);
        setSelectedWorkerID(worker.data[0].id);
    };

    // Handle change listens for the change in the list of workers and once one is chosen we set the state and trigger the get selected worker ID Function
    const handleChange = (event) => {
        setSelectedWorker(event.target.value);
        const workerString = event.target.value;
        const splitworker = workerString.split(' ');
        let firstname = splitworker[0];
        let lastname = splitworker[splitworker.length - 1];
        getSelectedWorkersID(firstname, lastname);
    };
    
    // Handle date change is for the Date Picker Material UI
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Set Geo Location is a function that is passed in to the map component as a prop so we can trigger it with values from the map
    const setGeoLocation = (lat, lng) => {
        setLatRef(lat);
        setLngRef(lng);
    };

    // Set Filled Address is a function that is passed as a prop into the map to save state of a value filled inside of the map
    const setFilledAddress = (address) => {
        setAddress(address);
    };

    // When the component loads we get fetch all the users from the database and push the results to an array
    useEffect(() => {

        // Making an array of employees to be used in a selection list
        const getUserList = async () => {
            let employeeList = [];
            const users = await API.getUserList();
            await users.data.forEach(name => {
                employeeList.push(`${name.firstname} ${name.lastname}`);
            });
            await setEmployees(employeeList);
        };

        // Counting how many jobs are in the database already so we know what id this job will become
        const getLastJobID = async () => {
            let jobs = await API.viewAllJobs()
            await setJobCount(jobs.data.length + 1)
        }

        getLastJobID()
        getUserList()
    }, [latRef, lngRef, address])

    // Post Job is the function that sends the form data and state data to the API function
    const postJob = async (client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng) => {
        const postedJob = await API.createJob(client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng)
        await postJobID(jobCount, selectedWorkerID)
        await console.log(postedJob)
    }

    // postJobID assigns this new job to the chosen worker
    const postJobID = async (jobCount, worker_id) => {
        const postID = await API.updateAssignedJobID(jobCount, worker_id)
        await console.log(postID)
    }

    // Submit handler is a function that is triggered when the submit button is pressed, we then invoke the post job and post job id functions and reset the value
    const submitHandler = (event) => {
        event.preventDefault();
        postJob(clientRef.current.value, address, contactNameRef.current.value, contactNumberRef.current.value, backupContactNameRef.current.value, backupContactNumberRef.current.value, detailsRef.current.value, selectedWorkerID, selectedDate, latRef, lngRef);
        // postJobID(jobCount, selectedWorkerID)
        clientRef.current.value = "";
        contactNameRef.current.value = "";
        contactNumberRef.current.value = "";
        backupContactNameRef.current.value = "";
        backupContactNumberRef.current.value = "";
        detailsRef.current.value = "";
    }

    return(
        <React.Fragment>
            <div className="row">
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
                <div className="col-12 loginForm">
                    <h2 className="jobCtitle">Job Creation Sheet</h2>
                    <hr></hr>
                    <form className="login">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="form-group">
                                    <TextField fullWidth required inputRef={clientRef} label="Enter an Client/Job Name" width="100%"/>
                                </div>
                                <div className="form-group autoSearchJob">
                                    <JobAutoComplete setGeoLocation={setGeoLocation} setFilledAddress={setFilledAddress}/>
                                </div>
                                <div className="form-group">
                                    <TextField fullWidth required inputRef={contactNameRef} label="Enter Contact Name" width="100%"/>
                                </div>
                                <div className="form-group">
                                    <TextField fullWidth required inputRef={contactNumberRef} label="Enter Contact Number" width="100%"/>
                                </div>
                                <div className="form-group">
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Choose a worker for the Job</InputLabel>
                                        <Select fullWidth value={selectedWorker} onChange={handleChange}>
                                        {employees.map((employee, key) => {
                                            return <option value={employee} key={key}>{employee}</option>
                                        })}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="form-group" style={{width:"100%"}}>
                                    <KeyboardDatePicker fullWidth required label="Please enter the date you want delivery" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                                </div>
                                <div className="form-group">
                                    <TextField fullWidth required inputRef={backupContactNameRef} label="Enter a Back up Contact Name" width="100%"/>
                                </div>
                                <div className="form-group">
                                    <TextField fullWidth required inputRef={backupContactNumberRef} label="Enter a Back up contact Number" width="100%"/>
                                </div>
                                <div className="form-group">
                                    <TextField fullWidth label="Enter any needed information including Exact time" multiline rows={4} inputRef={detailsRef}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={submitHandler} className="submitBtn jobForm">Submit Job</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default JobCreation