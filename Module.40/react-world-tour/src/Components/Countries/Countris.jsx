import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countris = () => {
  const [contries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 50)));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited Countries");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  return (
    <div>
      <h3>Countries: {contries.length}</h3>
      <div>
        <h5>visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li style={{ textAlign: "center" }} key={country.cca3}>
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>
      <div className="Country-container">
        {contries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countris;
