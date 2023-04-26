import React from 'react';

const ChiefTeams = (props) => {
    const { img, name, location } = props.chieteam
    return (
        <div className='mx-12 lg:mx-0 lg:w-60'>
            <img className='w-48 mx-auto' src={img} alt='pic' />
            <div className='text-center h-16 p-2 bg-yellow-400'>
                <h1 className='Alkatra text-xl'>{name}</h1>
                <h1 className='Alkatra'>{location}</h1>
            </div>
        </div>
    );
};

export default ChiefTeams;