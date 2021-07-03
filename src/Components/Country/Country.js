import React from 'react';

const Country = (props) => {
    const {name,population,region} = props.country;
    return (
        <div>
            <h2>This is a {name}</h2>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};


export default Country;