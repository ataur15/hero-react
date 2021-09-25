import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const { name, capital, flag, languages } = props.country;
    // console.log(languages);
    return (
        <div className="country-div">
            <img width="100px" src={flag} alt="" />
            <h1>{name}</h1>
            <h3>Capital: {capital}</h3>
            <p>
                Language: <span>{languages[0].name}</span>
                {
                    // languages.forEach(ele => console.log(ele.name))
                }
            </p>
        </div>
    );
};


export default Country;