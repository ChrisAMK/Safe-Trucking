import axios from "axios";

export default {
    // Returns the result of a get request to the Google Books API
    getBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // Function that sends a post request to the server to sign up a user
    UserSignUp: (email, password, isManager) => {
        console.log("PoST " + email+ password + isManager )
        return axios.post("/api/signup", {
            email: email,
            password: password,
            isManager: isManager
        })
            .then(() => {
                window.location.replace("/members");
            })
            .catch(err => console.log(err))
    },

    // Performs a post request to the server to save the data of a book you want to save
    UserSignIn: (email, password) => {
        console.log("PoST " + email+ password )
        return axios.post("/api/login", {
            email: email,
            password: password
        }).then(() => {
            window.location.replace("/members");
        })
        .catch(err => {
            console.log(err)
        });
    },

    // Performs a get request to the server to get all the saved books in the database
    getSavedBooks: () => {
        return axios.get("/api/books").then(result => result.data);
    }

}