import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AllInOne = () => {
    return (
        <div className='text-center mt-32'>

            <h4 className='font-bold'>Features</h4>
            <h1 className='text-7xl font-extrabold mb-4'>All in one card.<FontAwesomeIcon icon="fa-solid fa-arrow-right" /></h1>
            <p className='font-bold'>Senectus et netus et malesuada fames ac turpis.
            </p>
            <p className='font-bold'>Sagittis vitae et leo duis ut diam.</p>
            <div class=" mt-6">
                <a href='/' class="btn btn-sm bg-accent border-none text-white normal-case px-4 py-2 font-normal mr-4 hover:text-accent hover:bg-white hover:font-extrabold">Open Account</a>
                <a className='mr-5 text-accent' href="/">Compare Cards <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></a>
            </div>
        </div>
    );
};

export default AllInOne;