import React from 'react';
import Accounts from './Accounts';
import AllInOne from './AllInOne';
import Cards from './Cards';
import Features from './Features'
import Transactions from './Transactions';

const Home = () => {
    return (
        <div className=''>
            <Features></Features>
            <Transactions></Transactions>
            <Cards></Cards>
            <AllInOne></AllInOne>
            <Accounts></Accounts>
        </div>
    );
};

export default Home;