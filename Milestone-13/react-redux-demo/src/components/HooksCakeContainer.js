import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    // useSelector(state) method receives the state as its arguments
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
