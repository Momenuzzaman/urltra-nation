import React from 'react';

const Country = (props) => {
    const {name,popukation,region} = props.country;
    return (
        <div>
            <h2>This is a {props.country.name}</h2>
            <p>population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p>
        </div>
    );
};


export default Country;