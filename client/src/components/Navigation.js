// Navigation is a consistent component that is always rendered to the top of the app
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserProvider from '../utils/UserContext';

function Navigation() {
  // Accessing the user Information to display a greeting with the user's name
  const userData = useContext(UserProvider.context);

  // let firstName = userData.fullname.split(" ").splice(0)

  // (userData.fullname === true) ?  firstName = userData.fullname.split(" ").splice(0) :  firstName = "Did not work"
  // console.log(firstName)

  // We are conditionally rendering a link to sign in or log out depending on the user's sign-in status
  // also condionally displaying the user's name in a greeting or telling the user that they are not logged in
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/home">
        Trucking Safe
      </Link>
      <div>
        <ul className="navbar-nav nav-links signInStatus">
          <li className="nav-item">
            {(userData.fullname === undefined) ? "You are not Signed in" : `Welcome ${userData.fullname}`}
          </li>
          
          {(userData.fullname === undefined) ? 
            <li className="nav-item">
            <Link to="/">
              Sign in
            </Link>
          </li>
          :
          <li className="nav-item">
            <Link to="/logout">
              Log out
            </Link>
          </li>
        }
        </ul>
      </div>
    </nav>
  )
}

export default Navigation