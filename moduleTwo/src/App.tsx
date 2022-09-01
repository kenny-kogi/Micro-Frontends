import React from "react";
import ReactDOM from "react-dom";
import Timer from "../components/Timer";
import "./index.css";

const App = () => (
  <div className="container">
  Hello, This is Module Two Header
  <Timer/>
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
