import React from 'react';


const Shop = (props) => {
    const  {img,name,price} = props.shop
    return (
       
        
                <div className='mt-20'>
                   <button>
                        <div className='shadow-2xl hover:-translate-y-1 hover:scale-110  duration-300'>
                            <img className='w-72' src={img} alt='pic' />
                            <h1 className='font-bold text-xl Alkatra'>{name}</h1>
                            <h1 className='pb-4 text-xl text-red-500 Alkatra'>$ {price}</h1>
                        </div>
                    </button>
                </div>

    );
};

export default Shop;