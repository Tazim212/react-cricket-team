import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/dollar.png'
const Navbar = () => {
    return (
        <div className="navbar bg-amber-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 cursor-pointer">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <img src={logo} className='w-[40px] h-[40px] ml-4' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-7 cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className="navbar-end flex justify-center items-center gap-2">
                <p>$ 6000000</p>
                <img src={coin} className='w-4 h-4' alt="" />
            </div>
        </div>
    );
};

export default Navbar;