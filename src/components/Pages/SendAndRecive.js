import React from 'react';

const SendAndRecive = () => {
    return (
        <div className='flex justify-center items-center px-60 pt-40'>
            <div className='pr-5 max-w-lg min-h-72 leading-loose'>
                <p>Transactions</p>
                <h1 className='text-6xl font-bold mb-4'>Send &amp; receive money instantly</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <ul className='mt-5'>
                    <li><i class="fa-regular fa-circle-check text-accent mr-2"></i> Malesuada Ipsum</li>
                    <li><i class="fa-regular fa-circle-check text-accent mr-2"></i> Vestibulum</li>
                    <li><i class="fa-regular fa-circle-check text-accent mr-2"></i> Parturient Lorem</li>
                </ul>
            </div>
            <div className=''>
                <div class="mockup-phone">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard-demo w-[330px] h-[620px] pl-4 justify-start pt-12 phone-1 text-black">
                            <div className='flex pb-4'>
                                <p className='pr-12'>current balance</p>
                                <p className='font-bold text-xl mr-8'>$4220.00</p>
                            </div>
                            <div class="card w-64 h-36  mr-7 bg-gradient-to-r from-[#485563] to-[#29323C]">
                                <div class="card-body p-5 text-white">
                                    <div className='flex justify-between'>
                                        <h2 class="card-title font-medium text-lg">banquee.</h2>
                                        <i class="fa-solid fa-wifi rotate-90 mr-4"></i>
                                    </div>
                                    <div class="flex font-thin font-mono text-xl">
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
                            <div className='flex pt-5 pr-6'>
                                <p className='text-sm pr-3'><i className="fa-solid fa-user-plus text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1" ></i> Send Money</p>
                                <p className='text-sm pr-3'><i className="fa-solid fa-user-minus text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1" ></i> Receive Money</p>
                            </div>
                            <div className='flex text-lg mt-4'>
                                <h6 className='pr-16'>Transaction</h6>
                                <p className='text-accent pr-8'>View all <i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                            <div className='w-80 h-16 px-5 mb-2'>
                                <div className='flex flex-row justify-between items-center  bg-[#F8F8F8] p-3 rounded-md mr-6'>
                                    <i class="fa-brands fa-apple w-8 h-8 rounded-md bg-accent text-slate-50 p-2"></i>
                                    <div className='basis-2/4'>
                                        <h6 >Apple</h6>
                                        <h6 className='text-sm'>Electronic</h6>
                                    </div>
                                    <p className='basis-1/4'>-799$</p>
                                </div>
                            </div>
                            <div className='w-80 h-16 px-5 mb-2'>
                                <div className='flex flex-row justify-between items-center  bg-[#F8F8F8] p-3 rounded-md mr-6'>
                                    <i class="fa-brands fa-apple w-8 h-8 rounded-md bg-accent text-slate-50 p-2"></i>
                                    <div className='basis-2/4'>
                                        <h6 >Apple</h6>
                                        <h6 className='text-sm'>Electronic</h6>
                                    </div>
                                    <p className='basis-1/4'>-799$</p>
                                </div>
                            </div>
                            <div className='w-80 h-16 px-5 mb-2'>
                                <div className='flex flex-row justify-between items-center  bg-[#F8F8F8] p-3 rounded-md mr-6'>
                                    <i class="fa-brands fa-apple w-8 h-8 rounded-md bg-accent text-slate-50 p-2"></i>
                                    <div className='basis-2/4'>
                                        <h6 >Apple</h6>
                                        <h6 className='text-sm'>Electronic</h6>
                                    </div>
                                    <p className='basis-1/4'>-799$</p>
                                </div>
                            </div>
                            <div className='grid grid-flow-col gap-8 mt-4 pr-5'>
                                <div className='flex flex-col items-center text-accent'>
                                    <i class="fa-solid fa-house"></i>
                                    <p className='text-sm mt-2'>Home</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-solid fa-dollar-sign"></i>
                                    <p className='text-sm mt-2'>Savings</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-regular fa-credit-card"></i>
                                    <p className='text-sm mt-2'>Cards</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <i class="fa-regular fa-user"></i>
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

export default SendAndRecive;