import React, { useEffect, useState } from 'react';
import titlelogo  from "../../../image/titlelogo.png";
import Blog from "./Blog"
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blog,setBlog] = useState([])
   useEffect(() => {
    fetch('/Blogs.json')
    .then(res => res.json())
    .then(data => setBlog(data))
   })

    return (
        <div className='mt-32'>
           <div>
           <h1 className="font-bold text-2xl lg:text-4xl text-center Alkatra">Blog <span className='text-red-600'>Post</span></h1>
           <img className="mx-auto" src={titlelogo} alt="pic" />
           </div>
           <div className='grid lg:grid-cols-3 gap-8 mx-4 lg:mx-20 mt-12'>
            {
                blog.slice(0 - 3).map(blog =><Blog
                key={blog._id}
                blog ={blog}
                ></Blog>)
            }
           </div>
           <div className='text-center mt-4'>
            <Link to ="blogings">  <button className="Alkatra text-2xl  my-4 w-36 h-10 font-bold   hover:text-yellow-500">More Blogs...</button></Link>
           </div>
        </div>
    );
};

export default Blogs;