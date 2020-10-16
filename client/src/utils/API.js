import axios from "axios";

export default {
    // Returns the result of a get request to the Google Books API
    userLogOut: () => {
        return axios.get("/logout")
        .then(result => console.log(result))
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
            worker: worker,
            deliveryDate: deliveryDate,
            lat: lat,
            lng: lng
        })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    },
    // creates a get request to fetch all the availiable data for jobs
    viewAllJobs: () => {
        return axios.get("/api/jobs")
        .catch(error => console.log(error))
    },

    viewCompletedJobs: () => {
        return axios.get("/api/completed")
        .catch(error => console.log(error))
    },

    viewActiveJobs: () => {
        return axios.get("/api/active")
        .catch(error => console.log(error))
    },

    viewScheduledJobs: () => {
        return axios.get("/api/scheduled")
        .catch(error => console.log(error))
    },

    updateProfile: (firstname, lastname, dob) => {
        return axios.put("/api/user_data", {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
        })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    },

    getUserList: () => {
        return axios.get("/api/users")
        .catch(error => console.log(error))
    }
}


