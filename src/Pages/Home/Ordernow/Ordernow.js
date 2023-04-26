import React from 'react';
import { Link } from 'react-router-dom';
import ordernow1 from "../../../image/ordarnow1.jpg"
import ordernow2 from "../../../image/ordernow2.jpg"

const Ordernow = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-6 mx-6 lg:mx-12 mt-32'>
            <div  className='border-solid-2 border-8 border-yellow-500'>
                <Link to="/shop"><img src={ordernow1} alt='' /></Link>
            </div>
            <div className='border-solid-2 border-8 border-yellow-500'>
                <Link to="/shop"><img src={ordernow2} alt='' /></Link></div>
        </div>
    );
};

export default Ordernow;