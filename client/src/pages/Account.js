import React, { useContext, useEffect, useRef } from "react";
import UserProvider from '../utils/UserContext';


function Account() {

    const userData = useContext(UserProvider.context);
    const addressRef = useRef("")

    useEffect(() => {
        console.log(userData)

    })

    return(
        <React.Fragment>
            <div className="row">
                <div className="col-12 heading">
                {(userData.firstname === undefined) ? <h2>Sign in to View your Profile</h2> : <h2>Welcome {userData.firstname}</h2>}
                <h6>Update your Details Below!</h6>
                </div>
                <div className="col-12 jobCard">
                    <div className="col-4">
                        <h6>Current Address:</h6>
                        {(userData.address === null) ? <h6>No Address Avaliable</h6> : <h6>{userData.address}</h6>}
                        <br />
                        <div>
                            <ul className="updates">
                                <li>
                                    <label>Updated Address</label>
                                </li>
                                <li>
                                    <input type="text" className="form-control" placeholder="Enter an Address" ref={addressRef}></input><button>Update</button>
                                </li>
                                <li>
                                    <button>Update</button>
                                </li>
                            </ul>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Account;