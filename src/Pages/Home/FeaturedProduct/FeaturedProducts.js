import React, { useEffect, useState } from 'react';
import titlelogo from "../../../image/titlelogo.png"
import FeaturedProduct from './FeaturedProduct.js';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
    const [featuredproduct, setFeaturedProduct] = useState([])
    useEffect(() => {
        fetch("/shop.json")
            .then(res => res.json())
            .then(data => setFeaturedProduct(data))
    })
    return (
        <div>
            <div>
                <div className='mt-28 mb-12'>
                    <h1 className="font-bold text-2xl lg:text-4xl text-center Alkatra">Featured <span className='text-red-600'>Products</span></h1>
                    <img className="mx-auto" src={titlelogo} alt="pic" />
                </div>
                <div className='grid lg:grid-cols-4 gap-8 mx-12 '>
                    {
                        featuredproduct.slice(0 - 8).map(featuredproduct => <FeaturedProduct

                            featuredproduct={featuredproduct}
                            key={featuredproduct}
                        ></FeaturedProduct>)
                    }
                </div>
                <div className='text-center mt-20'>
                <button className="Alkatra text-2xl  my-4  h-10 font-bold rounded-full   hover:text-yellow-500 "> <Link to="shop">More Products...</Link></button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;