import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start lg:flex lg:justify-center">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a href='/'>Features</a></li>
                            <li tabindex="0">
                                <a href='/' className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a href='/'>Submenu 1</a></li>
                                    <li><a href='/'>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href='/'>Item 3</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-2xl normal-case text-accent hover:text-white hover:bg-accent">banquee.</a>
                </div>
                <div className="navbar-center hidden lg:flex lg:justify-center">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/'>Features</a></li>
                        <li tabindex="0">
                            <a href='/'>
                                Compare
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href='/'>Submenu 1</a></li>
                                <li><a href='/'>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a href='/'>Support</a></li>
                        <li tabindex="0">
                            <a href='/'>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a href='/'>Submenu 1</a></li>
                                <li><a href='/'>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end lg:flex lg:justify-center">
                    <a className='mr-5 text-accent' href="/">Login</a>
                    <a href='/' className="btn btn-sm bg-accent border-none text-white normal-case px-4 py-2 font-normal hover:text-accent hover:bg-white hover:font-extrabold">Open Account</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;