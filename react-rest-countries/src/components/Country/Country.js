import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const { name, flag, capital, population } = props.country;
    return (
        <div className="countryStyle">
            <img width="80px" src={flag} alt="" />
            <h2>Country: {name}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;