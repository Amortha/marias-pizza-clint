import React from 'react';
import ChiefTeams from './ChiefTeams';

const ChiefTeam = () => {
    const chieteam = [
        {
            _id:1,
            img:"https://i.ibb.co/J7JBghd/Chief4.jpg",
            name:'Tasmia Islam',
            location:"American"
          
        },
        {
            _id:2,
            img:"https://i.ibb.co/4drR9qF/Chief3.jpg",
            name:'Joy Borua',
            location:"Italian"
          
        },
        {
            _id:3,
            img:"https://i.ibb.co/H7DQyPp/Chief1.jpg",
            name:'Amortha kumar',
            location:"Chinese"
          
        },
        {
            _id:4,
            img:"https://i.ibb.co/VqHkB6r/Chief2.jpg",
            name:'Shill Pal',
            location:"American"
          
        },
    ]
    return (
        <div>
            <div className=' text-center mt-24'>
                <h1 className='text-2xl lg:text-4xl Alkatra font-bold'>Our Chief<span className='text-red-600'>Team</span></h1>
                <p className='Alkatra text-xl font-bold mb-20'>Meet our chef makes tasty and spicy pizza</p>
                </div>

                <div  className='grid lg:grid-cols-4 lg:mx-12 '>
                    {
                     chieteam.map(chieteam =><ChiefTeams
                        key={chieteam._id}
                        chieteam = {chieteam}
                     ></ChiefTeams>)   
                    }
                </div>
        </div>
    );
};

export default ChiefTeam;