import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect (()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data);
    //  const names =  data.map(country => country.name);
    //  console.log(names);
    });
  }, []);
  return (
    <div className="App">
     <h1>country loaded: {countries.length}</h1>
     
       {
         countries.map(country => <Country country =
          {country}></Country>)
       }
    </div>
  );
}

export default App;
