import React from 'react';

const Accounts = () => {
    return (
        <div className='text-center pt-32'>
            <h4 className='font-bold'>Accounts</h4>
            <h1 className='text-7xl font-extrabold mb-4'>Choose your card.</h1>
            <p className='font-bold'>Senectus et netus et malesuada fames ac turpis.
            </p>
            <p className='font-bold'>Sagittis vitae et leo duis ut diam.</p>


            <div className='py-32 grid grid-flow-col grid-cols-3 justify-items-center'>
                <div className='w-[360px] h-[448px] '>
                    <p className='text-center text-xl pb-6'>Basic <span className='text-accent bg-secondary rounded px-2'>Popular</span></p>

                    <div>
                        <h3 className='text-4xl font-bold'>Free</h3>
                        <p className='text-lg mt-3 px-10 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card w-[360px] h-[225px] bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mt-6">
                        <div className="card-body   p-5 text-white  grid items-center ">
                            <div className='flex justify-between ml-4'>
                                <h2 className="card-title font-medium text-lg">banquee.</h2>
                                <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                            </div>
                            <div className="flex font-thin font-mono text-xl">
                                <p>1234</p>
                                <p>5678</p>
                                <p>9000</p>
                                <p>0000</p>
                            </div>
                            <div className='flex ml-4'>
                                <div className='mr-4'>
                                    <p className='text-[7px]'>Card holder</p>
                                    <p className='text-sm'>John Doe</p>
                                </div>
                                <div className='mr-12'>
                                    <p className='text-[7px]'>Expiry Date</p>
                                    <p className='text-sm'>9/28</p>
                                </div>
                                <h3 className='text-xl font-bold ml-16'>VISA</h3>
                            </div>

                        </div>

                    </div>
                    <button className='btn w-full bg-accent text-white mt-6 hover:text-accent hover:bg-secondary hover:font-extrabold border-none'>Get started</button>
                </div>
                <div className='w-[360px] h-[448px] '>
                    <p className='text-center text-xl pb-6'>Premium</p>

                    <div>
                        <h3 className='text-4xl font-bold'>$5 <span className='text-slate-400 text-base'>per month</span></h3>
                        <p className='text-lg mt-3 px-10 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card w-[360px] h-[225px] bg-gradient-to-r from-[#485563] to-[#29323C] mt-6">
                        <div className="card-body   p-5 text-white  grid items-center ">
                            <div className='flex justify-between ml-4'>
                                <h2 className="card-title font-medium text-lg">banquee.</h2>
                                <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                            </div>
                            <div className="flex font-thin font-mono text-xl">
                                <p>1234</p>
                                <p>5678</p>
                                <p>9000</p>
                                <p>0000</p>
                            </div>
                            <div className='flex ml-4'>
                                <div className='mr-4'>
                                    <p className='text-[7px]'>Card holder</p>
                                    <p className='text-sm'>John Doe</p>
                                </div>
                                <div className='mr-12'>
                                    <p className='text-[7px]'>Expiry Date</p>
                                    <p className='text-sm'>9/28</p>
                                </div>
                                <h3 className='text-xl font-bold ml-16'>VISA</h3>
                            </div>

                        </div>

                    </div>
                    <button className='btn w-full bg-accent text-white mt-6 hover:text-accent hover:bg-secondary hover:font-extrabold border-none'>Get started</button>
                </div>
                <div className='w-[360px] h-[448px] '>
                    <p className='text-center text-xl pb-6'>Gold</p>

                    <div>
                        <h3 className='text-4xl font-bold'>$10 <span className='text-slate-400 text-base'>per month</span></h3>
                        <p className='text-lg mt-3 px-10 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card w-[360px] h-[225px] bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] mt-6">
                        <div className="card-body   p-5 text-white  grid items-center ">
                            <div className='flex justify-between ml-4'>
                                <h2 className="card-title font-medium text-lg">banquee.</h2>
                                <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                            </div>
                            <div className="flex font-thin font-mono text-xl">
                                <p>1234</p>
                                <p>5678</p>
                                <p>9000</p>
                                <p>0000</p>
                            </div>
                            <div className='flex ml-4'>
                                <div className='mr-4'>
                                    <p className='text-[7px]'>Card holder</p>
                                    <p className='text-sm'>John Doe</p>
                                </div>
                                <div className='mr-12'>
                                    <p className='text-[7px]'>Expiry Date</p>
                                    <p className='text-sm'>9/28</p>
                                </div>
                                <h3 className='text-xl font-bold ml-16'>VISA</h3>
                            </div>

                        </div>

                    </div>
                    <button className='btn w-full bg-accent text-white mt-6 hover:text-accent hover:bg-secondary hover:font-extrabold border-none'>Get started</button>
                </div>
            </div>

        </div>
    );
};

export default Accounts;