import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                <h1 className="introduction">Select which use</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-5 managerIntro">
                    <Link to="/manager">
                    <h1>MANAGER</h1>
                    </Link>
                </div>
                <div className="col-2"></div>
                <div className="col-5 driverIntro">
                    <Link to="/driver">
                    <h1>DRIVER</h1>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home