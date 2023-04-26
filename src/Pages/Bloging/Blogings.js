import React from 'react';
import { Link } from 'react-router-dom';

const Blogings = () => {
    return (
        <div>
              <div className='w-full h-40 bg-zinc-300 text-center'>
                <h1 className='pt-16 text-2xl Alkatra font-bold'>NEWS</h1>
                <h1 className='text-2xl Alkatra'><Link to="/">Home</Link> /News</h1>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Blogings;