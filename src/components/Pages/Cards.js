import React from 'react';

const Cards = () => {
    return (
        <div className='flex justify-center items-center px-60 pt-40 mb-40'>
            <div className='pr-5 max-w-lg min-h-72 leading-loose'>
                <p>Cards</p>
                <h1 className='text-6xl font-bold mb-4 w-80'>Manage your cards</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <ul className='mt-5'>
                    <li><i className="fa-regular fa-circle-check text-accent mr-2"></i> Malesuada Ipsum</li>
                    <li><i className="fa-regular fa-circle-check text-accent mr-2"></i> Vestibulum</li>
                    <li><i className="fa-regular fa-circle-check text-accent mr-2"></i> Parturient Lorem</li>
                </ul>
            </div>
            <div className=''>
                <div className="mockup-phone border-none">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard-demo w-[330px] h-[620px] pl-4 justify-start pt-10 phone-1 text-black">
                            <div className='w-96 flex justify-evenly items-center  pb-4 mr-8'>
                                <p><i class="fa-solid fa-arrow-left"></i></p>
                                <p>Cards</p>
                                <p><i class="fa-regular fa-circle-question"></i></p>
                            </div>
                            <div className="card w-64 h-36  mr-7 bg-gradient-to-r from-[#485563] to-[#29323C]">
                                <div className="card-body p-5 text-white">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title font-medium text-lg">banquee.</h2>
                                        <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                                    </div>
                                    <div className="flex font-thin font-mono text-xl">
                                        <p>1234</p>
                                        <p>5678</p>
                                        <p>9000</p>
                                        <p>0000</p>
                                    </div>
                                    <div className='flex'>
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
                            <div className='flex items-center justify-between w-64 pt-5 pr-6'>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-sharp fa-solid fa-circle-info text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1"></i>
                                    <p className='text-sm'>Details</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-solid fa-lock text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1"></i>
                                    <p>Lock Card</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-solid fa-gear text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1"></i>
                                    <p className='text-sm'>Settings</p>
                                </div>
                            </div>
                            <h6 className='text-start text-lg font-semibold w-72 my-4 pr-16'>All Cards</h6>

                            <div className='relative'>
                                <div className="card w-64 h-36  mr-7 bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] absolute">
                                    <div className="card-body p-5 text-white">
                                        <div className='flex justify-between'>
                                            <h2 className="card-title font-medium text-lg">banquee.</h2>
                                            <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                                        </div>
                                        <div className="flex font-thin font-mono text-xl">
                                            <p>1234</p>
                                            <p>5678</p>
                                            <p>9000</p>
                                            <p>0000</p>
                                        </div>
                                        <div className='flex'>
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
                                <div className="card w-64 h-36  mr-7 bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mt-14">
                                    <div className="card-body p-5 text-white">
                                        <div className='flex justify-between'>
                                            <h2 className="card-title font-medium text-lg">banquee.</h2>
                                            <i className="fa-solid fa-wifi rotate-90 mr-4"></i>
                                        </div>
                                        <div className="flex font-thin font-mono text-xl">
                                            <p>1234</p>
                                            <p>5678</p>
                                            <p>9000</p>
                                            <p>0000</p>
                                        </div>
                                        <div className='flex'>
                                            <div className='mr-4'>
                                                <p className='text-[7px]'>Card holder</p>
                                                <p className='text-sm'>John Doe</p>
                                            </div>
                                            <div className='mr-12'>
                                                <p className='text-[7px]'>Expiry Date</p>
                                                <p className='text-sm'>9/28</p>
                                            </div>
                                            <div className='flex relative'>
                                                <p className='w-5 h-5 rounded-full bg-gray-300 opacity-60'></p>
                                                <p className='w-5 h-5 rounded-full bg-slate-100 ml-3 absolute opacity-60'></p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className='grid grid-flow-col gap-8 mt-4 pr-5 pb-2'>
                                <div className='flex flex-col items-center'>
                                    <i className="fa-solid fa-house"></i>
                                    <p className='text-sm mt-2'>Home</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i className="fa-solid fa-dollar-sign"></i>
                                    <p className='text-sm mt-2'>Savings</p>
                                </div>
                                <div className='flex flex-col items-center text-accent'>
                                    <i className="fa-regular fa-credit-card"></i>
                                    <p className='text-sm mt-2'>Cards</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i className="fa-regular fa-user"></i>
                                    <p className='text-sm mt-2'>Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;