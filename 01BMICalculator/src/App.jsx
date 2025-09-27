import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let bmiCal = weight / (height * height);
    setBmi(bmiCal.toFixed(2));

    if (bmiCal <= 18.5) {
      setMessage("You are Underweight");
    } else if (bmiCal >= 18 && bmiCal <= 24.9) {
      setMessage("You are perfect");
    } else {
      setMessage("You Big Fat Ass Motherfucker");
    }
  }

  const reload = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <>
      <h2>BMI Calculator</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Weight</label>
          <input
            type="number"
            placeholder="Enter your wieght in KG"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Height</label>
          <input
            type="number"
            placeholder="Enter your height in Meter"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={reload} type="button">Reload</button>
        <div>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </>
  );
}

export default App;
