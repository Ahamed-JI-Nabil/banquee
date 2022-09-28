import React from 'react';
import Cards from './Cards';
import Features from './Features'
import Transactions from './Transactions';

const Home = () => {
    return (
        <div className=''>
            <Features></Features>
            <Transactions></Transactions>
            <Cards></Cards>
        </div>
    );
};

export default Home;