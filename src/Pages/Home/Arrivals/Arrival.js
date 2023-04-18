import React from 'react';
import shop2 from "../../../image/shop2.PNG"
import shop3 from "../../../image/shop3.PNG"
import shop21 from "../../../image/shop21.PNG"
import { Link } from 'react-router-dom';
import titlelogo from "../../../image/titlelogo.png"

const Arrival = () => {
    return (
        <div>
            <div className='mt-20 mb-12'>
                <h1 className="font-bold text-2xl lg:text-4xl text-center Alkatra">New <span className='text-red-600'>Arrivals</span></h1>
                <img className="mx-auto" src={titlelogo} alt="pic" />
            </div>

            <div className='grid lg:grid-cols-3 gap-10 mx-6 lg:mx-20'>
                <button>
                    <div className='text-center shadow-2xl'>
                        <img className='w-full' src={shop2} alt='' />
                        <h1 className='font-bold text-3xl Alkatra'>Veg Exatica</h1>
                        <h1 className='pb-4 text-2xl text-red-500'>$ 123.00</h1>
                    </div>
                </button>
                <button>
                    <div className='text-center shadow-2xl'>
                        <img className='w-full' src={shop3} alt='' />
                        <h1 className='font-bold text-3xl Alkatra'>Bella Italia Pizza</h1>
                        <h1 className='pb-4 text-2xl text-red-500'>$ 115.00</h1>
                    </div>
                </button>

                <button><div className='text-center shadow-2xl'>
                    <img className='w-full' src={shop21} alt='' />
                    <h1 className='font-bold text-3xl Alkatra'>Lebanese Chicken</h1>
                    <h1 className='pb-4 text-2xl text-red-500'>$ 251.00</h1>
                </div></button>

            </div>
            <div className='text-center mt-12'>
               <button className="Alkatra text-2xl  my-4  h-10 font-bold rounded-full   hover:text-yellow-500 "> <Link to="shop">More Arrivals...</Link></button>
            </div>
        </div>
    );
};

export default Arrival;