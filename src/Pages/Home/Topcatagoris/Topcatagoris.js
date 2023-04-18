import React from 'react'
import img from "../../../image/titlelogo.png"
import topph1 from "../../../image/topph1.PNG"
import topph2 from "../../../image/topph2.PNG"
import topph3 from "../../../image/topph3.PNG"
import top1 from "../../../image/top1.PNG"
import top2 from "../../../image/top2.PNG"
import top3 from "../../../image/top3.PNG"
import { Link } from 'react-router-dom'
const Topcatagoris = () => {
    return (
        <div className='mt-12 mx-12 lg:mx-32'>
            <div className='text-center'>
                <h1 className='font-bold  text-2xl lg:text-4xl Alkatra'>Top <span className='text-red-600'>Categories</span></h1>
                <img className='mx-auto' src={img} alt='img' />
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-20'>
                <Link to = "/shop">
                <div className='w-full  h-auto shadow-2xl hover:-translate-y-1 hover:scale-110 hover:duration-500 '>
                    <img className='mb-[-60px] ' src={topph1} alt="" />
                    <div className='flex justify-end pr-8'>
                        <img className='rounded-full ' src={top1} alt="" />
                    </div>
                    <div className='mt-12 mx-12 '>
                        <h1 className='font-bold text-2xl Alkatra '>Chicken Pepperoni</h1>
                        <ul className='list-disc Alkatra mt-5 pb-5'>
                            <li className='hover:text-red-500'>Margherita</li>
                            <li className='hover:text-red-500'>Chicken Sausage</li>
                            <li className='hover:text-red-500'>Paneer</li>
                            <li className='hover:text-red-500'>Veggie</li>
                            <li className='hover:text-red-500'>Spice</li>
                            <li className='hover:text-red-500'>Spicy Chicken</li>
                            <li className='hover:text-red-500'>Lebanese Chicken</li>
                            <li className='hover:text-red-500'>Soya Masala</li>
                        </ul>
                    </div>
                </div>
                </Link>
                <Link to = "/shop">
                <div className='w-full  h-auto shadow-2xl hover:-translate-y-1 hover:scale-110 hover:duration-500 '>
                    <img className='mb-[-60px] ' src={topph2} alt="" />
                    <div className='flex justify-end pr-8'>
                        <img className='rounded-full ' src={top2} alt="" />
                    </div>
                    <div className='mt-12 mx-12 '>
                        <h1 className='font-bold text-2xl Alkatra '>Red Paprika</h1>
                        <ul className='list-disc Alkatra mt-5 pb-5'>
                            <li className='hover:text-red-500'>Chickeroni (Chicken Pepperoni)</li>
                            <li className='hover:text-red-500'>Spiced Paneer</li>
                            <li className='hover:text-red-500'>Veggie Feast</li>
                            <li className='hover:text-red-500'>Spiced Paneer</li>
                            <li className='hover:text-red-500'>Double Cheese</li>
                            <li className='hover:text-red-500'>Chicken Tikka</li>
                            <li className='hover:text-red-500'>Chicken Sausage N Tikka</li>
                            <li className='hover:text-red-500'>Smoked Chicken</li>
                        </ul>
                    </div>
                </div>
                </Link>
                <Link to = "/shop">
                <div className='w-full  h-auto shadow-2xl hover:-translate-y-1 hover:scale-110 hover:duration-500 '>
                    <img className='mb-[-60px] ' src={topph3} alt="" />
                    <div className='flex justify-end pr-8'>
                        <img className='rounded-full ' src={top3} alt="" />
                    </div>
                    <div className='mt-12 mx-12 '>
                        <h1 className='font-bold text-2xl Alkatra '>Red Capsicum</h1>
                        <ul className='list-disc Alkatra mt-5 pb-5'>
                            <li className='hover:text-red-500'>Chicken Tikka</li>
                            <li className='hover:text-red-500'>Veggie Lover</li>
                            <li className='hover:text-red-500'>Tandoori Paneer</li>
                            <li className='hover:text-red-500'>Country Feast</li>
                            <li className='hover:text-red-500'>Chicken Exotica</li>
                            <li className='hover:text-red-500'>Chicken Italiano</li>
                            <li className='hover:text-red-500'>Veggie Italiano</li>
                            <li className='hover:text-red-500'>Veg Exotica</li>
                        </ul>
                    </div>
                </div>
                </Link>
                
            </div>
        </div>
    )
}
export default Topcatagoris;