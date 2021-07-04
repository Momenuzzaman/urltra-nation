import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;

    const flagStyle = {height:"50px"}
    const countryStyle = {border: "2px solid black", margin:"10px",padding: "5px"}
    const handleAddCountry = props.handleAddCountry;
   
    return (
        <div style={countryStyle}>
            <h2>This is a {name}</h2>
           <img style= {flagStyle} src={flag}></img>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;