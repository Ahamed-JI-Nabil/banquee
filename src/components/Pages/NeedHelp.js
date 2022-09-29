import React from 'react';

const NeedHelp = () => {
    return (
        <div>
            <div className='flex justify-center my-36'>
                <div className='w-96 mr-20'>
                    <h1 className='text-6xl'>Need help?</h1>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-phone text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1 mr-6"></i>
                        <div>
                            <p>Support Hotline</p>
                            <p>+49 176 123 456</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-envelope text-base text-accent  w-8 h-8 rounded-full bg-[#e8f2ee] text-center p-1 mr-6"></i>
                        <div>
                            <p>Support Email</p>
                            <p>help@banquee.com</p>
                        </div>
                    </div>
                    <p className='text-accent'>Support <i className="fa-solid fa-arrow-right pl-2"></i></p>
                </div>
                <div className='w-[500px] '>
                    <div tabIndex="0" class="collapse collapse-plus rounded-box  ">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl font-medium text-accent">
                            <span className='text-black'>How do I open an Banko account?</span>
                        </div>
                        <div class="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                        <div class="divider mt-2"></div>
                    </div>
                    <div tabIndex="0" class="collapse collapse-plus rounded-box ">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl font-medium text-accent">
                            <span className='text-black'>How do I order a new card?</span>
                        </div>
                        <div class="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                        <div class="divider mt-2"></div>
                    </div>
                    <div tabIndex="0" class="collapse collapse-plus rounded-box ">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl font-medium text-accent">
                            <span className='text-black'>How to change my account limits?</span>
                        </div>
                        <div class="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                        <div class="divider mt-2"></div>
                    </div>
                    <div tabIndex="0" class="collapse collapse-open collapse-plus rounded-box ">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl font-medium text-accent">
                            <span className='text-black'>How does Banko premium works?</span>
                        </div>
                        <div class="collapse-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                        </div>
                    </div>
                    <div tabIndex="0" class="collapse collapse-plus rounded-box ">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title text-xl font-medium text-accent">
                            <span className='text-black'>Can I have two Banko accounts?</span>
                        </div>
                        <div class="collapse-content">
                            <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
        </div>
    );
};

export default NeedHelp;