import { useState } from "react";
import BillInput from "./components/BillInput";
import Output from "./components/Output";
import Reset from "./components/Reset";
import SelectPercentage from "./components/SelectPercentage";

function App() {
  const [bill, setBill] = useState();
  const [yourPer, setYourper] = useState(0);
  const [friPer, setFriper] = useState(0);
  const tip = bill * ((yourPer + friPer) / 2 / 100);
  function handleReset() {
    setBill("");
    yourPer(0);
    friPer(0);
  }
  return (
    <div className="App">
      <BillInput bill={bill} onSetbill={setBill} />
      <SelectPercentage percentage={yourPer} onSelect={setYourper}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={friPer} onSelect={setFriper}>
        How did your Friend like the service ?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
