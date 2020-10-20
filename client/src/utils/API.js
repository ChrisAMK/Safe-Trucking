import axios from "axios";

export default {
    // USER FUNCTIONS
    // Returns the result of a get request to the Google Books API
    userLogOut: () => {
        return axios.get("/logout")
        .then(() => {
            window.location.replace("/")
        })
        .catch(err => console.log(err))
    },

    // Function that sends a post request to the server to sign up a user
    UserSignUp: (email, password, isManager, firstname, lastname) => {
        return axios.post("/api/signup", {
            email: email,
            password: password,
            isManager: isManager,
            firstname: firstname,
            lastname: lastname
        })
            .then(() => {
                window.location.replace("/home");
            })
            .catch(err => console.log(err))
    },

    // Performs a post request to the server to save the data of a book you want to save
    UserSignIn: (email, password) => {
        return axios.post("/api/login", {
            email: email,
            password: password
        }).then(() => {
            window.location.replace("/home");
        })
        .catch(err => {
            console.log(err)
        });
    },

    // Performs a put request that updates the users personal Details
    updateProfile: (id, firstname, lastname, dob, gender) => {
        return axios.put("/api/userprofile", {
            id: id,
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            gender: gender
        })
        .catch(error => console.log(error))
    },

    // Performs a put request to update the user's Contact details
    updateContact: (id, address, email, phonenumber) => {
        return axios.put("/api/usercontact", {
            id: id,
            address: address,
            email: email,
            phonenumber: phonenumber
        })
        .catch(error => console.log(error))
    },

    // Performs a get request that receives all information in the User collumn
    getUserList: () => {
        return axios.get("/api/users")
        .catch(error => console.log(error))
    },

    // Performs a post request that searches for a id that matches the first and last name parsed in
    getWorkerID: (firstname, lastname) => {
        return axios.post("/api/workerid", {
            firstname: firstname,
            lastname: lastname
        })
        .catch(error => console.log(error))
    },

    // Performs a post Request that gets information of a worker who matches id
    getNamefromID: (id) => {
        return axios.post("/api/workername", {
            id: id
        })
        .catch(error => console.log(error))
    },

    // Performs a put request that updates the last known location of a user
    pingLocation: (id, userLat, userLng) => {
        return axios.put("/api/location", {
            id: id,
            userLat: userLat,
            userLng: userLng
        })
        .catch(error => console.log(error))
    },

    // creates a get request to fetch all the availiable data for jobs
    viewAllJobs: () => {
        return axios.get("/api/jobs")
        .catch(error => console.log(error))
    },

    // retrieve all jobs that have a completion data
    viewCompletedJobs: () => {
        return axios.get("/api/completed")
        .catch(error => console.log(error))
    },

    // Gets all jobs that are currently active
    viewActiveJobs: () => {
        return axios.get("/api/active")
        .catch(error => console.log(error))
    },

    // Gets all jobs that are not complete and not in progress
    viewScheduledJobs: () => {
        return axios.get("/api/scheduled")
        .catch(error => console.log(error))
    },

    // Get job information that matches the given id
    viewJobByID: (id) => {
        return axios.post("/api/jobByID", {
            id: id
        })
        .catch(error => console.log(error))
    },

    // creates a post request with all the job information for the server to handle
    createJob: (client, address, contactName, contactNumber, backupContactName, backupContactNumber, details, worker, deliveryDate, lat, lng) => {
        return axios.post("/api/job", {
            client: client,
            address: address,
            contactName: contactName,
            contactNumber: contactNumber,
            backupContactName: backupContactName,
            backupContactNumber: backupContactNumber,
            details: details,
            worker_id: worker,
            deliveryDate: deliveryDate,
            lat: lat,
            lng: lng
        })
        .catch(error => console.log(error))
    },

    // Performs a put request that updates a workers assigned job to the new job created
    updateAssignedJobID: (jobCount, worker_id) => {
        return axios.put("/api/assignedJob" , {
            jobCount: jobCount,
            worker_id: worker_id
        })
    }

}


