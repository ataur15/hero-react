import React, { useReducer, useState } from 'react';
import { portalReducer } from '../reducers/portalReducer';
import { portalState } from '../store/portalStore';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer, portalState);
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Doctors Portal</h1>
            <h3>My Patients: {state.patients.length}</h3>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'add_patient', name: name })}>Add Patient</button>
            <h2>------------------------------</h2>
            {
                state.patients.map(patient => <p key={patient.id}>
                    {patient.name}
                </p>)
            }
        </div>
    );
};

export default Portal;