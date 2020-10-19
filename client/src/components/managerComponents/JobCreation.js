import React, { useEffect, useRef, useState } from "react";
import API from "../../utils/API";
import JobAutoComplete from "./JobAutoComplete";

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


function JobCreation(props) {

    const classes = useStyles();

    const [ latRef, setLatRef ] = useState("")
    const [ lngRef, setLngRef ] = useState("")
    const clientRef = useRef("");
    const contactNameRef = useRef("");
    const contactNumberRef = useRef("");
    const backupContactNameRef = useRef("");
    const backupContactNumberRef = useRef("");
    const detailsRef = useRef("");
    const [ address, setAddress ] = useState("")
    const [ employees, setEmployees ] = useState([])
    const [ selectedDate, setSelectedDate] = useState(Date.now());
    const [ selectedWorker, setSelectedWorker ] = useState("");
    const [ selectedWorkerID, setSelectedWorkerID ] = useState("");
    const [ jobCount, setJobCount ] = useState("")

    const getSelectedWorkersID = async (firstname, lastname) => {
        const worker = await API.getWorkerID(firstname, lastname)
        setSelectedWorkerID(worker.data[0].id)
    }

    const handleChange = (event) => {
        setSelectedWorker(event.target.value);
        const workerString = event.target.value;
        const splitworker = workerString.split(' ');
        let firstname = splitworker[0];
        let lastname = splitworker[splitworker.length - 1];
        getSelectedWorkersID(firstname, lastname);
        
    };
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const setGeoLocation = (lat, lng) => {
        setLatRef(lat);
        setLngRef(lng);
    }

    const setFilledAddress = (address) => {
        setAddress(address)
    }

    useEffect(() => {

        const getUserList = async () => {
            let employeeList = [];
            const users = await API.getUserList()
            await users.data.forEach(name => {
                employeeList.push(`${name.firstname} ${name.lastname}`)
            });
            await setEmployees(employeeList)
            return employeeList;
        }

        const getLastJobID = async () => {
            let jobs = await API.viewAllJobs()
            await console.log(jobs.data.length + 1)
            await setJobCount(jobs.data.length + 1)
        }

        getLastJobID()
        getUserList()
    }, [latRef, lngRef, address])

    const postJob = async (client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng) => {
        const postedJob = await API.createJob(client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng)
        await console.log(postedJob)
    }

    const postJobID = async (jobCount, worker_id) => {
        const postID = await API.updateAssignedJobID(jobCount, worker_id)
        await console.log(postID)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        postJob(clientRef.current.value, address, contactNameRef.current.value, contactNumberRef.current.value, backupContactNameRef.current.value, backupContactNumberRef.current.value, detailsRef.current.value, selectedWorkerID, selectedDate, latRef, lngRef);
        postJobID(jobCount, selectedWorkerID)
        clientRef.current.value = "";
        contactNameRef.current.value = "";
        contactNumberRef.current.value = "";
        backupContactNameRef.current.value = "";
        backupContactNumberRef.current.value = "";
        detailsRef.current.value = "";
    }

    
    return(
        <React.Fragment>
            <button onClick={() => props.handlePageChange("")} className="backBtn">Back</button>
            <div className="row">
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
                                        <InputLabel fullWidth htmlFor="age-native-simple">Choose a worker for the Job</InputLabel>
                                        <Select fullWidth value={selectedWorker} onChange={handleChange}>
                                        {employees.map((employee) => {
                                            return <option value={employee}>{employee}</option>
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