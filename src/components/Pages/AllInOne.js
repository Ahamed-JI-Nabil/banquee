import React from 'react';

const AllInOne = () => {
    return (
        <div className='text-center pt-40 mb-24'>
            <h1 className='text-7xl font-extrabold mb-4'>All in one bank. Really.</h1>
            <p className='font-bold'>Senectus et netus et malesuada fames ac turpis.
            </p>
            <p className='font-bold mb-24'>Sagittis vitae et leo duis ut diam.</p>
            <div className='flex items-center justify-center overflow-hidden '>
                <div className='w-[584px] h-[500px] bg-secondary mr-8 text-center rounded-3xl'>
                    <h2 className='text-4xl font-semibold  mt-16'>Statistics</h2>
                    <p className='text-lg mt-3 px-20 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                    <div className="mockup-phone border-none mt-16">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard-demo w-[330px] h-[620px] pl-4 justify-start pt-10 phone-1 text-black">
                                <div className='w-96 flex justify-evenly items-center  pb-4 mr-8'>
                                    <p><i class="fa-solid fa-arrow-left"></i></p>
                                    <p className='text-xl'>Statistics</p>
                                    <p><i class="fa-regular fa-circle-question"></i></p>
                                </div>

                                <div className='flex justify-center mt-8'>
                                    <div className='w-[147px] h-[77px] bg-secondary mr-4 pt-3 rounded-2xl'>
                                        <p className=''>Earnings</p>
                                        <h6 className='text-xl font-medium'>$ 85.222,00</h6>
                                    </div>
                                    <div className='w-[147px] h-[77px] bg-secondary mr-4 pt-3 rounded-2xl'>
                                        <p className=''>Expenses</p>
                                        <h6 className='text-xl font-medium'>- $52.150,50</h6>
                                    </div>
                                </div>
                                <div className='flex items-center mt-5 w-80 pl-2'>
                                    <p className='w-3 h-3 bg-accent rounded-full mr-2'></p>
                                    <p className='mr-2'>Earnings</p>
                                    <p className='w-3 h-3 bg-pink-400 rounded-full mr-2'></p>
                                    <p className='mr-8'>Expenses</p>
                                    <p className='border rounded px-2 py-1'>Year <i class="fa-sharp fa-solid fa-chevron-down"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[584px] h-[500px] bg-secondary rounded-3xl overflow-hidden'>
                    <p className='text-4xl font-semibold  mt-16'>Cards</p>
                    <p className='text-lg mt-3 px-20 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <div className='grid grid-flow-col justify-items-center grid-cols-3 gap-36'>
                        <div className="card w-[250px] h-[200px] bg-gradient-to-r from-[#485563] to-[#29323C] rotate-90 mt-44 ">
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
                                    <h3 className='text-xl font-bold'>VISA</h3>
                                </div>

                            </div>

                        </div>
                        <div className="card w-[300px] h-[250px] bg-gradient-to-r from-[#5BB5A2] to-[#53A191] rotate-90 mt-24">
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
                        <div className="card w-[250px] h-[200px] bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] rotate-90 mt-44">
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
                                    <h3 className='text-xl font-bold'>VISA</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInOne;