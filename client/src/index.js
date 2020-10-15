import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Component from "./TestApp";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Component />, document.getElementById("root"));
registerServiceWorker();
