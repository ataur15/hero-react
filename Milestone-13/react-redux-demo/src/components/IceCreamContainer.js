import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function IceCreamContainer() {
    // useSelector(state) method receives the state as its arguments
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Ice Cream - {numOfIceCreams} </h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
        </div>
    )
}

export default IceCreamContainer
