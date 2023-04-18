import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shops from './Shops';

const Shop = () => {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch('/shop.json')
            .then(res => res.json())
            .then(data => setShop(data))
    })
    return (
        <div className=''>
            <div className='w-full h-40 bg-zinc-300 text-center'>
                <h1 className='pt-16 text-2xl Alkatra font-bold'>COLLECTION</h1>
                <h1 className='text-2xl Alkatra'><Link to="/">Home</Link> /Products</h1>
            </div>
            <div className='flex mx-4 lg:mt-20 '>
                <div className=' w-96 h-48 hidden lg:flex  '>

                    {/* catagoris */}
                    <section className=''>
                        <div className='w-72 h-12 bg-yellow-400 rounded-full'>
                            <h1 className='Alkatra text-2xl px-6 font-bold pt-2'>Categories</h1>
                        </div>


                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Soft Drinks
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Sada</li>
                                    <li>Mlik Shake</li>
                                    <li>Tea</li>
                                </ul>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Pizza
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Margherita</li>
                                    <li>Cheese Pizza</li>
                                    <li>Chicken Cheesa</li>
                                </ul>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Burger
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Sada</li>
                                    <li>Mlik Shake</li>
                                    <li>Tea</li>
                                </ul>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Snacks
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Sada</li>
                                    <li>Mlik Shake</li>
                                    <li>Tea</li>
                                </ul>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Hot Drinks
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Sada</li>
                                    <li>Mlik Shake</li>
                                    <li>Tea</li>
                                </ul>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus Alkatra">
                            <div className="collapse-title text-xl font-medium">
                                Sandwich
                            </div>
                            <div className="collapse-content list-disc">
                                <ul className='list-disc'>
                                    <li>Sada</li>
                                    <li>Mlik Shake</li>
                                    <li>Tea</li>
                                </ul>
                            </div>
                        </div>
                        {/* Dish */}
                        <div className='mt-10'>
                            <div className='w-72 h-12 bg-yellow-400 rounded-full'>
                                <h1 className='Alkatra text-2xl px-6 font-bold pt-2'>Dish</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>Non-Veg (2)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    Veg (2)</h1>
                            </div>
                            <div className='flex'>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10  rounded-full border border-yellow-500  hover:bg-yellow-500 ">Clear</button>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10 mx-4 rounded-full border border-yellow-500  hover:bg-yellow-500 ">Apply</button>
                            </div>
                        </div>
                        {/* size */}
                        <div className='mt-10'>
                            <div className='w-72 h-12 bg-yellow-400 rounded-full'>
                                <h1 className='Alkatra text-2xl px-6 font-bold pt-2'>Size</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>S (25)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    M (37)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    L (42)</h1>
                            </div>
                            <div className='flex'>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10  rounded-full border border-yellow-500  hover:bg-yellow-500 ">Clear</button>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10 mx-4 rounded-full border border-yellow-500  hover:bg-yellow-500 ">Apply</button>
                            </div>
                        </div>
                        {/* prize */}
                        <div className='mt-10'>
                        <div className='w-72 h-12 bg-yellow-400 rounded-full'>
                                <h1 className='Alkatra text-2xl px-6 font-bold pt-2'>Size</h1>
                            </div>
                            <h1 className='mt-2 Alkatra'>The highest price is $899.00</h1>
                            <h1 className='Alkatra text-xl mt-2'>From $</h1>
                            <input type='number' className='w-full h-12 border-2 border-slate-200 rounded-full p-4'/>
                            <h1 className='Alkatra text-xl mt-2'>To $</h1>
                            <input type='number' className='w-full h-12 border-2 border-slate-200 rounded-full p-4'/>
                            <div className='flex'>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10  rounded-full border border-yellow-400  hover:bg-yellow-400 ">Clear</button>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10 mx-4 rounded-full border border-yellow-400  hover:bg-yellow-400 ">Apply</button>
                            </div>
                        
                        </div>
                        {/* Crust */}
                        <div className='mt-10'>
                            <div className='w-72 h-12 bg-yellow-400 rounded-full'>
                                <h1 className='Alkatra text-2xl px-6 font-bold pt-2'>Crust</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>Cheese(1)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    Cheese Burst (7)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    Classic Tossed (42)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                   Hand Tossed (12)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                   Pan Pizza (6)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    Pan Pizza (1)</h1>
                            </div>
                            <div className='flex mt-4'>
                                <input type="checkbox" className="checkbox checkbox-warning" />
                                <h1 className='mx-4 Alkatra '>
                                    wheat Thin (6)</h1>
                            </div>
                            <div className='flex'>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10  rounded-full border border-yellow-400  hover:bg-yellow-400 ">Clear</button>
                                <button className="Alkatra text-xl mb-4 mt-4 w-20 h-10 mx-4 rounded-full border border-yellow-400  hover:bg-yellow-400 ">Apply</button>
                            </div>

                            <button className="Alkatra text-xl mb-4 mt-4 w-full h-10  rounded-full border border-yellow-400  hover:bg-yellow-400  ">Clear All</button>
                      
                        </div>
                    </section>


                </div>
                <div className='w-full mx-4 grid lg:grid-cols-3 gap-7'>
                    {
                        shop.map(shop => <Shops
                            shop={shop}
                            key={shop._id}
                        ></Shops>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;