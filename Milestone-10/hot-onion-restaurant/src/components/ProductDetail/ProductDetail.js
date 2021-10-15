import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';

const ProductDetail = (props) => {
    const { id } = useParams();
    const [foods, setFoods] = useFoods();

    const single = foods.find(food => food.id === id);
    const count = props.count;
    const totalaPrice = single?.price * count;

    return (
        <div className="max-w-screen-lg m-auto px-4 py-10 md:py-20 md:flex justify-between">
            <div className="max-w-lg"><img src={single?.image} alt="" /></div>
            <div className="max-w-lg md:pl-14 pt-10">
                <h2 className="text-4xl font-semibold mb-6">{single?.name}</h2>
                <p className="mb-4">{single?.desc}</p>
                <h2 className="text-3xl font-semibold mb-4">${totalaPrice.toFixed(2)}</h2>
                <div className="mb-2">Quantity:</div>
                <div className="w-28 mb-8 flex flex-row items-center justify-center h-10 rounded-3xl border border-gray-300">
                    <button onClick={props.minus} className="text-gray-600 h-full w-20 cursor-pointer">
                        <span className="pb-1 block text-2xl font-thin">−</span>
                    </button>
                    <input type="text" className="focus:outline-none text-center w-full font-semibold" value={count}></input>
                    <button onClick={props.plus} className="text-gray-600 h-full w-20 cursor-pointer">
                        <span className="pb-1 block text-2xl font-thin">+</span>
                    </button>
                </div>
                <div>
                    <Link to={`/cart/${id}`}><button className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4">Add to cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;