import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
  const [countries, setCountries] = useState([]); 

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0,50))) 
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Countries:{countries.length} </h2>
   
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
       {countries.map((country, index) => (
        <Country key={index} country={country}></Country>
        ))}
       </div>
      
    </div>
  );
}
