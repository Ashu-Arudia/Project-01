import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
    console.log("Clicked " + count);
  };
  const decreaseValue = () => {
    if (count <= 0) console.log("Value can't be lower than 0");
    else {
      setCount(count - 1);
      console.log("Clicked " + count);
    }
  };
  return (
    <>
      <h1>Hello world !!</h1>
      <button onClick={addValue}>Increase Value {count}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {count}</button>
    </>
  );
}

export default App;
