import { useState } from "react";
import "./Country.css";
import CountryDetail from "../Country-Detail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3} = country;
  const [visited, setVisited] = useState(false) 

  const handleClick = () => {
    setVisited(!visited);
  }


  return (
    <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
      <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population {population}</p>
      <p>area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br/>
      <button onClick={handleClick}>{visited ? 'Visited' : 'going'}</button>
      {visited ? 'I have visited this country.' : 'I am going to this country.'} 
      <hr />
      <CountryDetail
      country={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
