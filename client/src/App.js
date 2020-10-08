import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Manager from "./pages/Manager";
import Driver from "./pages/Driver";


function App() {

// here is the pathing for the whole app we use react router Switch and Routes to make it possible to navigate the site
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>

            <Route exact path="/">
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
  );
}


export default App;
