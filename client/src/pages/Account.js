import React, {useContext, useEffect, useRef, useState} from "react";
import UserProvider from '../utils/UserContext';
import API from "../utils/API";
import JobAutoComplete from "../components/managerComponents/JobAutoComplete";


import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function Account() {

const classes = useStyles();
const userData = useContext(UserProvider.context);

const firstNameRef = useRef("");
const lastNameRef = useRef("");
const genderRef = useRef("");
const dobRef = useRef("");
const emailRef = useRef("");
const phoneRef = useRef("");
// eslint-disable-next-line
const [ latRef, setLatRef ] = useState("");
// eslint-disable-next-line
const [ lngRef, setLngRef ] = useState("");
const [ address, setAddress ] = useState("");

const setGeoLocation = (lat, lng) => {
    setLatRef(lat);
    setLngRef(lng);
}

const setFilledAddress = (address) => {
    setAddress(address)
}

const updateProfileInfo = async (id, firstname, lastname, dob, gender) => {
    const result = await API.updateProfile(id, firstname, lastname, dob, gender)
    await console.log(result)
}

const updateContactInfo = async (id, address, email, phonenumber) => {
    const result = await API.updateContact(id, address, email, phonenumber)
    await console.log(result)
}

const handlePersonSubmit = () => {
    console.log(genderRef.current.value)
    updateProfileInfo(userData.id ,firstNameRef.current.value, lastNameRef.current.value, dobRef.current.value, genderRef.current.value)
}

const handleContactSubmit = () => {
    updateContactInfo(userData.id, address, emailRef.current.value, phoneRef.current.value)
}
useEffect(() => {
    console.log(userData)
})

  return (
    <div className="row">
        <div className="col-12 updateHeading">
            <h2>Personal Information</h2>
            {(userData.firstname === undefined) ? <h6>Sign in to View your Profile</h6> : <h6>Welcome {userData.firstname}</h6>}
        </div>
            
        <div className="col-12">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 updateCards">
                    <h3>Profile</h3>
                    <hr></hr>
                    <div className="row">
                        <div className="col-6">
                            <TextField required inputRef={firstNameRef} label="First Name" width="100%" defaultValue={userData.firstname}/>
                        </div>
                        <div className="col-6">
                            <TextField required inputRef={lastNameRef} label="Last Name" width="100%" defaultValue={userData.lastname}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <TextField required inputRef={dobRef} id="date" label="Birthday" type="date" defaultValue={userData.dob} className={classes.textField} InputLabelProps={{ shrink: true, }}/>
                        </div>
                        <div className="col-6">
                            <Select required labelId="demo-simple-select-label" style={{height:50, width:"100%"}} inputRef={genderRef} defaultValue={userData.gender}>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Unspecified"}>Unspecified</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <br></br>
                    <Button type="submit" variant="contained" color="primary" style={{marginBottom: "10px"}} className={classes.submit} onClick={handlePersonSubmit}>
                        Update
                    </Button>
                </div>
                <div className="col-lg-1" />
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 updateCards">
                    <h3>Profile</h3>
                    <hr></hr>
                    <div className="row">
                        <div className="col-6">
                            <TextField required inputRef={emailRef} label="Email Address" width="100%" defaultValue={userData.email}/>
                        </div>
                        <div className="col-6">
                            <TextField required inputRef={phoneRef} label="Phone Number" width="100%" defaultValue={userData.phonenumber}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <TextField label="Current Address" defaultValue={userData.address} InputProps={{ readOnly: true, }}/>
                        </div>
                        <div className="col-6 autoSearch">
                            <JobAutoComplete setGeoLocation={setGeoLocation} setFilledAddress={setFilledAddress}/>
                        </div>
                    </div>
                    <br></br>
                    <Button type="submit" variant="contained" color="primary" style={{marginBottom: "10px"}} className={classes.submit} onClick={handleContactSubmit}>
                        Update
                    </Button>
                </div>
            </div>
        </div>
    </div>
)}
export default Account;