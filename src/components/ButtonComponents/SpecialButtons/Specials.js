import React, { useState } from "react";
import { specials } from "../../../data";

const Specials = props => {
  const [numberState, setNumberState] = useState(specials);
  console.log(props);
  return (
    <div className="specialsBox">
      {specials.map(e => (
        <button key={specials} className="button specials">
          {e}
        </button>
      ))}
    </div>
  );
};
export default Specials;
