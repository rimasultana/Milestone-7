import { useEffect } from "react";
import { useState } from "react"
import Bottle from "../Bottle/Bottle";

export default function Bottles() {

const [bottles, setBottles] = useState([]);

useEffect(()=>{
    fetch('Bottle.json')
    .then((res) => res.json())
    .then((data) => setBottles(data))
},[])


  return (
    <div>
        <h2 className="text-2xl">Bottles: {bottles.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {
            bottles.map((bottle)=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
        }
        </div>
    </div>
  )
}
