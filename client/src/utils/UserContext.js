import React, { createContext, useState, useEffect } from "react";
const context = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});


    useEffect(() => {
        fetch("/api/user_data")
            .then(res => res.json())
            .then(res => setUser(res))
            .then(console.log(user))
            .catch(err => console.log(err))
// eslint-disable-next-line
    }, []);

    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
};

UserProvider.context = context;

export default UserProvider;