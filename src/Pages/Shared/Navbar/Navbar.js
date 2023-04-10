import React from 'react';
import logo from '../../../image/logo.png'
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className="text-white font-bold mx-3 cursor-pointer hover:text-amber-400"> <Link to="/">HOME</Link></li>
        <li className="text-white font-bold  mx-3 cursor-pointer hover:text-amber-400"><Link to="shop">SHOP</Link></li>
        <li className="text-white font-bold mx-3 cursor-pointer  hover:text-amber-400"><Link to="/">ABOUT US</Link></li>
        <li className="text-white font-bold mx-3 cursor-pointer  hover:text-amber-400"><Link to="/">CONTACT US</Link></li>
        <li className="text-white font-bold mx-3 cursor-pointer hover:text-amber-400"> <Link to="/">BLOG</Link></li>
    </React.Fragment>
    return (
        <div className=" bg-black sticky top-0 z-50">
            <div className='navbar lg:px-10'>
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-black  w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to = "/" className="pinter normal-case text-xl w-20 lg:w-30 "><img src={logo} alt='logo' /></Link>
                </div>
              {/* Mobile device show */}
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                {/* login */}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost  avatar">
                            <h1 className='text-white text-3xl '><FaUsers /></h1>
                        </label>
                        <ul tabIndex={0} className="cursor-pointer  menu-compact dropdown-content text-white font-bold p-2 shadow bg-black  w-52">
                            <li className=' p-1 hover:text-amber-400'>
                                <Link to = "" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li className='p-1 hover:text-amber-400'><Link to ="">Settings</Link></li>
                            <li className='p-1 hover:text-amber-400'><Link to ="login">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;