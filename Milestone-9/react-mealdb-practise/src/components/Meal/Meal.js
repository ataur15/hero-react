import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    // console.log(props);
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;

    const history = useHistory();
    const handleClick = () => {
        history.push(`/meal/${idMeal}`);
    }

    return (
        <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div className="max-h-50 overflow-hidden">
                <img className="w-full h-auto" src={strMealThumb} alt="" />
            </div>
            <div className="p-5 my-auto">
                <h1 className="text-2xl font-semibold text-gray-700 mb-3">{strMeal}</h1>
                <p className="mb-5 text-gray-600">
                    {strInstructions.slice(0, 50)}
                </p>
                <div>
                    <Link className="hover:text-yellow-600 mr-2" to={`/meal/${idMeal}`}>View Detail</Link>
                    <button onClick={handleClick} className="border border-gray-300 py-1 px-2 hover:border-gray-500">Click More</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;