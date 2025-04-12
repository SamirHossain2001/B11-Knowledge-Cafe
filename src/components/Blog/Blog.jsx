import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    const { title, author, cover, author_img, hashtags } = blog;
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={`${cover}`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div className="author flex items-center gap-3 mb-4 justify-around">
                <img className="w-16" src={`${author_img}`} alt={author} />
                <p className="text-left font-bold">{author}</p>
              </div>
              <div>
                <FaBookmark size={25} />
              </div>
            </div>

            <h2 className="card-title text-left">{title}</h2>
            <div className="flex my-4">
              {hashtags.map((hashtag, index) => (
                <p className="text-left flex-grow-0 mr-3" key={index}>
                  #{hashtag}
                </p>
              ))}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Mark as Read</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;