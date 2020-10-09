import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import NoMatch from "../pages/NoMatch";
import Landing from "../pages/Landing";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Manager from "../components/Manager";
import Driver from "../components/Driver";
import API from "../utils/API";

function Home() {

    const [ isManager, setIsManager ] = useState(Boolean);

    const managerChecker = async () => {
     
      await API.managerCheck()
      .then(result => setIsManager(result))
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
      managerChecker()
      console.log(isManager);
    });



    return(
        <React.Fragment>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>

            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/driver">
              <Driver />
            </Route>

            <Route exact path="/manager">
              <Manager />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/signin">
              <Signin />
            </Route>

            <Route path="/">
              <NoMatch />
            </Route>

          </Switch>
        </div>
      
      </Router>
    </React.Fragment>
    )
}

export default Home