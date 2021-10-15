import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';

const Cart = (props) => {
    // Get dynamic id
    const { id } = useParams();
    const [foods, setFoods] = useFoods();

    // Get single item by id
    const single = foods.find(food => food.id === id);
    const count = props.count;
    const quantityPrice = single?.price * count;
    const shipping = 10;
    const tax = quantityPrice * 0.05;
    const totalPrice = quantityPrice + shipping + tax;

    return (
        <div className="max-w-screen-xl overflow-x-auto m-auto px-4 py-10">
            <h1 className="text-center text-2xl pb-14">Your Cart List</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">
                <div className="md:col-span-9 inline-block mb-5 md:mb-0">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Item
                                    </th>
                                    <th scope="col" className="px-6 pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="w-24" src={single?.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium text-gray-600">
                                                    {single?.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className=" text-gray-900">${single?.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="w-28 flex flex-row items-center justify-center h-10 rounded-3xl border border-gray-300">
                                            <button onClick={props.minus} className="text-gray-600 h-full w-20 cursor-pointer">
                                                <span className="pb-1 block text-2xl font-thin">−</span>
                                            </button>
                                            <input type="text" className="focus:outline-none text-center w-full font-semibold" value={count}></input>
                                            <button onClick={props.plus} className="text-gray-600 h-full w-20 cursor-pointer">
                                                <span className="pb-1 block text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        ${quantityPrice.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                                        <a href="#" className="text-red-500 hover:text-red-600">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:col-span-3 p-4 border border-gray-200">
                    <div>
                        <div className="border-b border-gray-200 pb-2 mb-2 flex justify-between">
                            <span>Subtotal:</span>
                            <span>${quantityPrice.toFixed(2)}</span>
                        </div>
                        <div className="border-b border-gray-200 pb-2 mb-2 flex justify-between">
                            <span>Shipping:</span>
                            <span>${quantityPrice ? shipping : 0}</span>
                        </div>
                        <div className="border-b border-gray-200 pb-2 mb-2 flex justify-between">
                            <span>Tax:</span>
                            <span>{quantityPrice ? 5 : 0}%</span>
                        </div>
                        <div className="pb-2 mb-2 flex justify-between">
                            <span className="text-xl">Total:</span>
                            <span className="text-xl">{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-5"><Link to="/shipping"><button className="w-full bg-red-500 hover:bg-red-600 text-white rounded py-2 px-3">Checkout</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;