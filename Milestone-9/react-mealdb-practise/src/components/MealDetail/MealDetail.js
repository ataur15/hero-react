import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const MealDetail = () => {
    // console.log(useParams());
    const { id } = useParams();

    const [detail, setDetail] = useState({});
    // console.log(meal);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.meals[0]))
    }, []);

    return (
        <div className="shadow-md mx-auto max-w-md mb-5 transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div className="max-h-50 overflow-hidden">
                <img className="w-full h-auto" src={detail.strMealThumb} alt="" />
            </div>
            <div className="p-5 my-auto">
                <h1 className="text-2xl font-semibold text-gray-700 mb-3">{detail.strMeal}</h1>
                <p className="mb-3 text-gray-600">
                    {detail.strInstructions}
                </p>
            </div>
        </div>
    );
};

export default MealDetail;