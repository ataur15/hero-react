import React from 'react';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer';
import MangoContainer from './MangoContainer';
import NewMangoContainer from './NewMangoContainer';

const HomeContainer = () => {
    return (
        <div>
            <HooksCakeContainer />
            <IceCreamContainer />
            <MangoContainer />
            <NewMangoContainer />
        </div>
    );
};

export default HomeContainer;