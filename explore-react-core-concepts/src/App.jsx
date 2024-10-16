import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task=' :Learn React' isDone={true}></Todo>
      <Todo task=' :Explore Core concept' isDone={false}></Todo>
      <Todo task=' : try jsx' isDone={true}></Todo>
    </>
  );
}

export default App;
