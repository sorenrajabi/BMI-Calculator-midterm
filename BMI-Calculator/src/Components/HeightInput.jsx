import React from "react";

function HeightInput({ setFeet, setInches }) {
  const handleFeetChange = (e) => {
    setFeet(e.target.value);
  };

  const handleInchesChange = (e) => {
    setInches(e.target.value);
  };

  return (
    <div>
      <label>Height (feet):</label>
      <input type="number" onChange={handleFeetChange} />
      <label>Height (inches):</label>
      <input type="number" onChange={handleInchesChange} />
    </div>
  );
}

export default HeightInput;
