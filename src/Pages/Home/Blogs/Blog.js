
import React from 'react';

const Blog = (props) => {
    const {img,name,text} = props.blog
    return (
        <div>
            <div className='text-center'>
                <img src={img} alt=''/>
                <h1 className='text-2xl Alkatra my-4 font-bold'>{name}</h1>
                <p className='Alkatra text-lg'>{text}</p>
                <button className=" my-4 w-28 h-10  rounded-full border border-yellow-500  hover:bg-yellow-500 hover:text-black">Read more</button>
            </div>
        </div>
    );
};

export default Blog;