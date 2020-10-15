import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Logout from "./pages/logout";
import Account from "./pages/Account";
import UserProvider from "./utils/UserContext";


function App() {

// here is the pathing for the whole app we use react router Switch and Routes to make it possible to navigate the site
  return (

    <React.Fragment>
      <UserProvider>
        <Router>
          <Navigation />
          <div className="container">
            <Switch>

              <Route exact path="/">
                <Signin />
              </Route>

              <Route exact path="/signup" >
                <Signup />
              </Route>

              <Route exact path="/home" >
                <Home />
              </Route>

              <Route exact path="/account">
                <Account />
              </Route>

              <Route exact path="/logout" >
                <Logout />
              </Route>

            
            </Switch>
          </div>
        
        </Router>
      </UserProvider>
    </React.Fragment>
  );
}


export default App;
