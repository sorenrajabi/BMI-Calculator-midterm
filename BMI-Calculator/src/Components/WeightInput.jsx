import React from "react";

function WeightInput({ setPounds }) {
  const handleChange = (e) => {
    setPounds(e.target.value);
  };

  return (
    <div>
      <label>Weight (lbs):</label>
      <input type="number" onChange={handleChange} />
    </div>
  );
}

export default WeightInput;
