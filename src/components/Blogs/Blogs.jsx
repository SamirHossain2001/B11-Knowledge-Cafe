import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    }
    ,[])
    // console.log(blogs);
    
    return (
      <div>
        <h1 className='text-3xl'>Total: {blogs.length}</h1>
        <div className="all-blogs grid md:grid-cols-2 gap-4 mt-4 place-items-center">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
      </div>
    );
};

export default Blogs;