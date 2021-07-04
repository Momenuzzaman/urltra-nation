import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect (()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>  setCountries(data));
  }, []);

  const  handleAddCountry = (country) => {console.log(country)};
  return (
    <div className="App">
     <h1>country loaded: {countries.length}</h1>
     <h1>Country Add:</h1>
     
       {
         countries.map(country => <Country country ={country}
           key={country.alpha3Code}
           handleAddCountry = {handleAddCountry}
          >

          </Country>)
       }
    </div>
  );
}

export default App;
