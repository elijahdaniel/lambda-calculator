import React, { useState } from "react";
import { numbers } from "../../../data";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbersBox">
      {numberState.map(num => (
        <button className="button numbers">{num}</button>
      ))}
    </div>
  );
};
export default Numbers;
