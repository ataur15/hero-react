import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = (props) => {
    // console.log(props.searchValue);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchValue}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [props.searchValue]);

    if (meals === null) {
        return false;
    }

    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 transform duration-500 mb-6">
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </section>
    );
};

export default Restaurant;