import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButtons/NumberButton";
import SpecialButton from "./components/ButtonComponents/SpecialButtons/SpecialButton";
import OperatorsButton from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import Display from "./components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  return (
    <div className="container">
      <Logo />
      <div className="displayBox">
        <Display number={0} />
      </div>
      <div className="numContainer">
        <div className="left">
          <SpecialButton />
          <NumberButton />
        </div>
        <div className="right">
          <OperatorsButton />
        </div>
      </div>
    </div>
  );
}

export default App;
