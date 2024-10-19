import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countris = () => {
  const [contries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data.slice(0,50)))
  }, []);

  return (
    <div>
      <h3>Countries: {contries.length}</h3>
      {
       contries.map((country => <Country key={country.cca3} country={country}></Country>))
      }
    </div>
  );
};

export default Countris;
