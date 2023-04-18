import React from 'react';
import discontimg from "../../../image/discountimg.jpg"
import { Link } from 'react-router-dom';
const Discount = () => {
    return (
        <div className='mt-32'>
            <div style={{
                background: `url(${discontimg})`,
                backgroundSize: 'cover',
                backgroundrRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',

            }} className='w-full max-h-96 '>
                <div className='h-96 w-full  bg-red-600/80'>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='Alkatra text-white pt-24 text-center'>
                        <h1 className='text-2xl lg:text-4xl font-bold '>Discount For All Orders Over $100</h1>
                        <p className='text-2xl p-4'>We're at71% of our goal</p>
                        <p className='text-xl'>that's $56,715.00 USD pledged of our $79,600.00 USD target<br />Estimated delivery:April 14-24</p>
                        <Link to="/shop"> <button className=" mt-4 w-28 h-10 mb-4  rounded-full border border-white text-white hover:bg-yellow-500 hover:text-black">View More</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Discount;