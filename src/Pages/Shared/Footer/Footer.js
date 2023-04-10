import React from 'react';
import logo from '../../../image/footer-logo.png'
import foterimg from '../../../image/footer logo.jpeg'
import logo2 from '../../../image/logo2.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaHome } from 'react-icons/fa';
import {BsPinterest } from 'react-icons/bs';
import {FaGooglePlusG } from 'react-icons/fa';
import {IoMdCall} from 'react-icons/io';
import {MdMarkEmailRead} from 'react-icons/md';
const Footer = () => {
    return (
        <div className='mt-24'>
            <div className='grid place-content-center '>
                <img className="mb-[-70px]" src={logo} alt=''></img>
            </div>
            <div style={{
                background: `url(${foterimg})`,
            }} className='w-full h-42 '>
                <div className='px-24 py-16 grid lg:grid-cols-2'>
                  <div>
                        <h1 className='text-white font-bold text-3xl'>Newseltter</h1>
                        <p className='mt-4 roboto text-white'>lorem insum dolor sit amet,consectetur adipiscing elit</p>
                    </div>
                    <div className='flex  place-content-end lg:mt-0 mt-10'>
                        <input type="text" placeholder="Your Email Address" className="input input-bordered rounded-none input-md w-full max-w-xs" />
                        <input type="submit" value="SignUp" className='font-bold bg-yellow-400 w-16 cursor-pointer h-12 hover:bg-yellow-600' />

                        {/* <h1 className='mx-4 text text-white'>Sign up</h1> */}
                    </div>
                </div>
            </div>

            <div style={{
                background: `url(${logo2})`,

            }}
                className='w-full  bg-cover'>
                <div className='w-full  bg-black/80'>

                    <footer className="footer p-10 text-white font-bold ">
                        <div>
                            <p>
                                Get the best Pizza made to taste <br />
                                better and linger the memories in your<br />
                                mouth. Create a menu and serve<br />
                                yourself the best pizza in your area.
                            </p>
                        </div>
                        <div>
                            <span className="footer-title">Services</span>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                            <span className="footer-title">Company</span>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                            <span className="footer-title">Legal</span>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                        <div>
                            <span className="footer-title">Contact Us</span>
                        <p className='flex '><FaHome  size={20}/><span className='mx-2'>No: 58 A, East Madison Street,<br/>
                         Baltimore, MD, USA 4508 </span></p>
                        <p className='flex '><IoMdCall size={20}/><span className='mx-2'>01829704087</span></p>
                        <p className='flex'><MdMarkEmailRead size={20}/><span className='mx-2'>amitsharma1998k@gmail.com</span></p>
                        </div>
                    </footer>
                    <footer className="footer px-20 py-4 border-t bg-base-200 text-base-content border-base-300">
                        <div className="items-center grid-flow-col text-black font-bold">
                            <p>© 2023 Pizza Home Powered by Developer Amortha</p>
                        </div>
                        <div className="md:place-self-center md:justify-self-end">
                            <div className="grid grid-flow-col gap-4">
                                <Link to="/"><AiOutlineTwitter size={20} /></Link>
                                <Link to="/"><FaFacebookF size={20} /></Link>
                                <Link to="/"><BsPinterest size={20}/></Link>
                                <Link to="/"><FaGooglePlusG size={25}/></Link>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    );
};

export default Footer;