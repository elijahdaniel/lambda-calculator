import React, { useState } from "react";
import { operators } from "../../../data";

const Operators = () => {
  const [operatorState, setOperator] = useState(operators);
  return (
    <div>
      {operatorState.map(operators => (
        <button key={operators}>{operators.char}</button>
      ))}
    </div>
  );
};

export default Operators;
