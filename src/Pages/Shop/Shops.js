import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Shop from './Shop';


const Shops = () => {
    const [shops, setShops] = useState([])
    useEffect(() => {
        fetch('/shop.json')
            .then(res => res.json())
            .then(data => setShops(data))
    })
    return (
        <div className=''>
            <div className='w-full h-40 bg-zinc-300 text-center'>
                <h1 className='pt-16 text-2xl Alkatra font-bold'>COLLECTION</h1>
                <h1 className='text-2xl Alkatra'><Link to="/">Home</Link> /Products</h1>
            </div>
            <div className='flex mx-4 lg:mt-20 '>
               <Sidebar></Sidebar>
                <div className='w-full mx-4 grid lg:grid-cols-3 gap-7'>
                    {
                        shops.map(shop => <Shop
                            shop={shop}
                            key={shop._id}
                        ></Shop>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shops;


