import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneForwardFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import {MdLocationPin } from 'react-icons/md';

const ContectUs = () => {
    return (
        <div>
            <div className='w-full h-40 bg-zinc-300 text-center'>
                <h1 className='pt-16 text-2xl Alkatra font-bold'>CONTECT US</h1>
                <h1 className='text-2xl Alkatra'><Link to="/">Home</Link> /Contect Us</h1>
            </div>
            <div className='mb-8 p-12'>
                <iframe style={{ width: "100%", height: "500px" }} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 mx-20'>
                <div className='text-center border-r border-inherit'>
                   <div className='hover:bg-yellow-400 w-12 h-12 p-3 mx-auto my-2'  > <BsTelephoneForwardFill className='' size={25} /></div>
                    <h1 className='Alkatra text-2xl font-bold'>Phone</h1>
                    <h1 className='Alkatra my-2 font-bold text-xl'>Toll-Free: <span className='font-normal'>0123 - 456 - 789</span></h1>
                    <h1 className='Alkatra font-bold text-xl'>Fax:<span className='font-normal'>0123 - 456 - 789</span></h1>
                   
                </div>
                <div className='text-center border-r border-inherit'>
                   <div className='hover:bg-yellow-400 w-12 h-12 p-3 mx-auto my-2'  > <MdMarkEmailRead className='' size={25} /></div>
                    <h1 className='Alkatra text-2xl font-bold'>Email</h1>
                    <h1 className='Alkatra text-xl'>chondrika@gmail.com</h1>
                    <h1 className='Alkatra text-xl'>amitsharma1998k@gmail.com</h1>
                </div>
                <div className='text-center border-r border-inherit'>
                   <div className='hover:bg-yellow-400 w-12 h-12 p-3 mx-auto my-2'  > <MdLocationPin className='' size={25} /></div>
                    <h1 className='Alkatra text-2xl font-bold'>Address</h1>
                    <h1 className='Alkatra my-2  text-xl'>No: 58 A, East Madison Street,</h1>
                    <h1 className='Alkatra  text-xl'>Baltimore, MD, USA 4508</h1>
                   
                </div>
            </div>
            <div className='text-center mt-20  lg:mx-10'>
                <input placeholder=' Name' className=' input input-bordered hover:border-yellow-400 max-w-2xl w-full' type='text'/><br/>
                <input placeholder='Email' className='mt-6 input input-bordered max-w-2xl w-full' type='text'/><br/>
                <input placeholder='Phone' className='mt-6 input input-bordered max-w-2xl w-full' type='text'/><br/>
               <textarea placeholder='Message' className=' mt-6 input input-bordered max-w-2xl w-full h-52' type='text'/><br/>
               <input placeholder='Phone' className='mt-6 input input-bordered max-w-2xl w-full border-yellow-400 hover:bg-yellow-400 cursor-pointer rounded-full'   type='submit'/><br/>          
            </div>
        </div>
    );
};

export default ContectUs;