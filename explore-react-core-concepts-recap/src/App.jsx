import { useState } from "react";
import "./App.css";
import Posts from "./Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React core concepts recap</h1>
      <ol>
        <p>Components</p>
        <p>JSX</p>
        <p>Props</p>
        <p>Event Handler</p>
        <p>State</p>
        <p>load Data</p>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  );
}

export default App;
