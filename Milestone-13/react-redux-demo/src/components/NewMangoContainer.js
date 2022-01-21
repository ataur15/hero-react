import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import buyMango from '../redux/mango/mangoActions';

function NewMangoContainer() {
    const [number, setNumber] = useState(1);
    const numOfMangos = useSelector(state => state.mango.numOfMangos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of mangos - {numOfMangos} </h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyMango(number))}>Buy Mango</button>
        </div>
    )
}

export default NewMangoContainer
