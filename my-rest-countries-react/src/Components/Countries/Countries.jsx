import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [flags, setFlags] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 10)))
      .catch((error) => console.log(error));
  }, []);

  const handleClickFlags = (flag) => {
    setFlags([...flags, flag]);
  };
  const handleClickVisited=(visit)=>{
    setVisited([...visited,visit]);
  }

  return (
    <div>
      <h2 className="font-bold text-2xl">Countries:{countries.length} </h2>
      <h4>Visited Countries: {visited.length}</h4>

      <div>
           {
            visited.map((visit,index)=>(
                <li className="font-semibold" key={index} >{visit}</li> 
            ))
           } 
        </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
            flags.map((flag, index) =>(
             <img className="object-cover  rounded-lg h-[150px]" src={flag} alt={flag} key={index} />  
            ))
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {countries.map((country, index) => (
          <Country key={index} country={country}  handleClickFlags={handleClickFlags} handleClickVisited={handleClickVisited}>
          </Country>
        ))}
      </div>
    </div>
  );
}
