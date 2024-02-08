import React, { useState } from "react";
import "./App.css";
import HeightInput from "./Components/HeightInput";
import WeightInput from "./Components/WeightInput";
import CalculateButton from "./Components/CalculateButton";
import BMIDisplay from "./Components/BMIDisplay";

function App() {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    const heightInInches = feet * 12 + inches;
    const bmiValue = (
      (pounds / (heightInInches * heightInInches)) *
      703
    ).toFixed(2);
    setBMI(bmiValue);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <HeightInput setFeet={setFeet} setInches={setInches} />
      <WeightInput setPounds={setPounds} />
      <CalculateButton calculateBMI={calculateBMI} />
      <BMIDisplay bmi={bmi} />
    </div>
  );
}

export default App;
