import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";

function App() {
  const [count, setCount] = useState(0);


function handelarClick(){
  alert("button clicked");
}

const buttonClicked =() =>{
  alert("clicket 2")
}

const Five = (num)=>{
  alert(num + 5)
}

  return (
    <>
      <h3> React core concepts part2</h3>
       <Counter></Counter>
      <button onClick={handelarClick}>Click me</button>
      <button onClick={buttonClicked}>Clicked</button>
      <button onClick={() =>{alert('third clicked')}}>Third Clicked</button>
      <button onClick={() => {Five(5)}}>Five</button>
    </>
  );
}

export default App;
