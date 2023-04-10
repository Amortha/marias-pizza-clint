import React from 'react';
import pizza from '../../../image/pizza.jpg'
import "../../fontfamily.css"
import { GiFullPizza } from 'react-icons/gi';
import {CiBurger } from 'react-icons/ci';
import {CiPizza } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Pizzahouse = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 bg-slate-50 mx-4'>
                <div>
                    <img src={pizza} alt='' />
                </div>
                <div className='grid place-content-center lg:place-content-start'>
                    <h1 className='mt-24 Alkatra font-bold text-black text-4xl'>welcome to Pizza House</h1>
                    <div className='flex my-10'>
                        <div className='hover:bg-yellow-400 hover:border-yellow-400 grid mr-5  place-content-center w-20 h-20  lg:w-28  lg:h-28 rounded-full border-solid border-2 border-black' >
                           <GiFullPizza size={60}/>
                        </div>
                        <div className='hover:bg-yellow-400 hover:border-yellow-400 grid mr-5  place-content-center w-20 h-20  lg:w-28  lg:h-28 rounded-full border-solid border-2 border-black' >
                           <CiBurger size={60}/>
                        </div>
                        <div className='hover:bg-yellow-400 hover:border-yellow-400 grid mr-5  place-content-center w-20 h-20  lg:w-28  lg:h-28 rounded-full border-solid border-2 border-black' >
                           <CiPizza size={60}/>
                        </div>
                       

                    </div>
                    <p className=' text-xl'>Our chefs are Working 24/7 and are ready to accept visitors and at any time of the day and night</p>
                    <button className=" w-36 h-10 mt-6 Alkatra  rounded-full border border-yellow-500 text-black hover:bg-yellow-500 hover:text-white"><Link to="/shop">View All Collection</Link></button>    
                </div>
            </div>
        </div>
    );
};

export default Pizzahouse;