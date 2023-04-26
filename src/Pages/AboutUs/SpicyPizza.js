import React from 'react';
import Aboutus1 from "../../image/Aboutus1.PNG"
import Aboutus2 from "../../image/Aboutus2.PNG"
import Aboutus3 from "../../image/Aboutus3.PNG"
import Aboutus4 from "../../image/Aboutus4.PNG"

const SpicyPizza = () => {
    return (
        <div className='text-center mt-10 lg:mt-32'>
           <h1 className='text-2xl lg:text-4xl Alkatra font-bold'>Hot and Spicy <span className='text-red-600'>Pizza House</span></h1>
                <p className='Alkatra text-xl font-bold mb-20'>With Best Hospitality</p>
                <div className=' mx-4 lg:mx-40 grid lg:grid-cols-2 gap-16'>
                    <div className='w-full h-96  hover:-translate-y-1 hover:scale-110  duration-300' style={{
                        background: `url(${Aboutus1})`,
                        backgroundSize: 'cover',
                    }}>
                        <div className='w-72 h-full  bg-white/80 m-6'>
                            <h1 className='font-bold Alkatra text-3xl pt-40'>Veg Exotica <br /> Pizza</h1>
                        </div>

                    </div>
                    <div className='w-full h-96  hover:-translate-y-1 hover:scale-110  duration-300' style={{
                        background: `url(${Aboutus2})`,
                        backgroundSize: 'cover',
                    }}>
                        <div className='w-72 h-full  bg-white/80 m-6'>
                            <h1 className='font-bold Alkatra text-3xl pt-40'>Paneer Soya  <br /> Supreme</h1>
                        </div>

                    </div>
                    <div className='w-full h-96 flex justify-end hover:-translate-y-1 hover:scale-110  duration-300' style={{
                        background: `url(${Aboutus3})`,
                        backgroundSize: 'cover',
                    }}>
                        <div className='w-72 h-full  bg-white/80 m-6'>
                            <h1 className='font-bold Alkatra text-3xl pt-40'>Chicken   <br /> Supreme</h1>
                        </div>

                    </div>
                    <div className='w-full h-96 flex justify-end  hover:-translate-y-1 hover:scale-110  duration-300' style={{
                        background: `url(${Aboutus4})`,
                        backgroundSize: 'cover',
                    }}>
                        <div className='w-72 h-full  bg-white/80 m-6'>
                            <h1 className='font-bold Alkatra text-3xl pt-40'>Country Feast <br /> Pizza</h1>
                        </div>

                    </div>


                </div>  
        </div>
    );
};

export default SpicyPizza;