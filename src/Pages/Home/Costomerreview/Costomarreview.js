import React from 'react';

const Costomarreview = (props) => {
const {img,name,address,post,text} = props.customerreview

    return (
        <div data-aos="zoom-in-up" className='mx-auto text-center w-96 mt-12 mb-12 '>
           <p className='text-lg Alkatra'>{text}</p>
           <img className='rounded-full  mx-auto ' src={img} alt=''/>
           <h1 className='text-2xl Alkatra font-bold'>{name}</h1>
           <h1 className='font-bold Alkatra'>{address}</h1>
           <h1 className='font-bold Alkatra'>{post}</h1>
        </div>
    );
};

export default Costomarreview;