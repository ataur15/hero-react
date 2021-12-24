import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import buyMango from '../redux/mango/mangoActions';

function MangoContainer() {
    const numOfMangos = useSelector(state => state.mango.numOfMangos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of mangos - {numOfMangos} </h2>
            <button onClick={() => dispatch(buyMango())}>Buy Mango</button>
        </div>
    )
}

export default MangoContainer
