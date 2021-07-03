import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;

    const flagStyle = {height:"50px"}
   
    return (
        <div>
            <h2>This is a {name}</h2>
           <img style= {flagStyle} src={flag}></img>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;