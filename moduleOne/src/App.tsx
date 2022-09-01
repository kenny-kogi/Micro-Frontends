import React from "react";
import ReactDOM from "react-dom";
import Counter from "../components/Counter";

import "./index.css";

const App = () => (
 
  <div className="container">
    This is module one header, Hello!
    <Counter/>
  </div>

);
ReactDOM.render(<App />, document.getElementById("app"));
