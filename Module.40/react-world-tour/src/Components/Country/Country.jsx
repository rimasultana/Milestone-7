import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry}) => {
  const { name, flags, population, area, cca3 } = country;


  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };



  return (
    <div className={`country ${visited ? 'visited' :'visit'}`}>
      <h3 style={{color: visited ? 'purple' : "black"}}>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited" : "I want to visit"}
    </div>
  );
};

export default Country;
