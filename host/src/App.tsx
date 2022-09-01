import React from "react";
import ReactDOM from "react-dom";
import Counter from 'moduleOne/Counter';
import Timer from 'moduleTwo/Timer';



const App = () => (
  <div className="container">
    <h2> This is Host Page </h2>
    <Counter/>
    <Timer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));