import React from 'react';
import about5 from "../../image/about5.jpg"

const HomeOffers = () => {
    return (
        <div>
             <div style={{
                    background: `url(${about5})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat'
                }}
                    className='w-full h-96 mt-32'>
                    <div className='bg-black/60 w-full h-96 text-center'>
                        <h1 className='pt-28 text-4xl font-extrabold  Alkatra text-white'>Pizza Home <span className='text-4xl font-bold Alkatra text-red-700'>Offers</span></h1>
                        <p className='my-4 text-yellow-400 Alkatra font-bold'>Our Latest Offers</p>
                        <p  className='mb-6 font-bold  text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent<br/> per conubia nostra, per inceptos himenaeos.</p>
                        <button className=" mb-4 w-32 h-10 Alkatra rounded-full border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black">Read More</button>
                    </div>

                </div>

        </div>
    );
};

export default HomeOffers;