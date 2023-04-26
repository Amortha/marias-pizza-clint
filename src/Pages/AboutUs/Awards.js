import React from 'react';
import clint1 from '../../image/client-1.png'
import clint2 from '../../image/client-2.png'
import clint3 from '../../image/client-3.png'
import clint4 from '../../image/client-4..png'
import { Link } from 'react-router-dom';
const Awards = () => {
    return (
        <div className='mt-24'>
            <h1 className='text-center text-black font-bold text-3xl lg:text-4xl Alkatra'>Our Awards</h1>
            <div className='grid lg:grid-cols-4 gap-2 lg:mx-32 mt-11'>
                <Link to = ""><img className=' mx-auto' src={clint1} alt='' /></Link>
                <Link to = ""><img className='lg:flex hidden' src={clint2} alt='' /></Link>
                <Link to = ""><img className='lg:flex hidden' src={clint3} alt='' /></Link>
                <Link to = ""> <img className='lg:flex hidden' src={clint4} alt='' /></Link>
            </div>
            <div className='bg-red-50 lg:py-32 w-full h-auto p-8 lg:p-24  mt-12 lg:mt-32'>
                <div className='border-4 w-full  h-72 lg:h-96   bg-white border-yellow-500  '>
                   <div  className='p-8 lg:p-28'>
                   <h1 className='lg:text-4xl text-2xl font-extrabold Alkatra text-yellow-500'>Join Us :</h1>
                <div className='flex justify-between my-6'>
                    <h2 className='text-2xl lg:text-4xl Alkatra font bold text-black'>Let's Make Launch Great</h2>
                    <button className=" mb-4 w-32 h-10 Alkatra  rounded-full border border-yellow-500  hover:bg-yellow-500">Shop Now</button>
                </div>
                <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec<br/> sodales sagittis magna.</p>
                   </div>
                </div>
            </div>

        </div> 
    );
};

export default Awards;