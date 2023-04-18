import React from 'react';

const MostLoved = ({ mostloved }) => {
    return (
        <div>
            <div className='text-center'>
                <img className='mx-auto' src={mostloved.img} alt='pic' />
                <h1 className='  font-bold my-4 text-2xl Alkatra'>{mostloved.name}</h1>
                <div className='mx-auto w-32 border-b-4 border-yellow-500'>

                </div>
                <h1 className='mt-4'>{mostloved.text}</h1>
            </div>
        </div>
    );
};

export default MostLoved;