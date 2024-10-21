import { useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";
import { useEffect } from "react";

function App() {

  const [watches, setWatches] = useState([]);

/*   useEffect(()=>{
    fetch('Watches.json')
    .then((res)=> res.json())
    .then((data)=> setWatches(data))
  },[]) */
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/rimasultana/watches-data/refs/heads/main/Watches.json')
    .then((res)=> res.json())
    .then((data)=> setWatches(data))
  },[])

 /*  const  watches = [
    { id: 1, name: "Apple Watch Series 8", price: 399 },
    { id: 2, name: "Samsung Galaxy Watch 5", price: 329 },
    { id: 3, name: "Fitbit Sense 2", price: 299 },
    { id: 4, name: "Garmin Venu 2", price: 399 },
    { id: 5, name: "Fossil Gen 6", price: 299 }
  ]; */
  
  return (
    <>
      <h1 className="font-bold text-3xl">Hello React</h1>
      {
        watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  );
}

export default App;
