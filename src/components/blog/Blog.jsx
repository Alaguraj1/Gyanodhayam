import React from "react";
import blog_data from "../../data/blog-data";
import { Link } from "react-router-dom";


const Blog = () => {
  const blogContent = blog_data.filter(b => b.blog_1);
  return (
    <>
      {blogContent.map((item) => (
        <article className="blog-meta-four" >
          <div className="img-meta position-relative">
            <img src={item.img} alt="blog post" className="w-100" />
            <Link to={`/blog-details/${item.id}`} className="tag">
              Soltuion
            </Link>
          </div>
          <div className="post-info">
            {item.featured} - <span className="date">{item.date}</span>
          </div>
          <Link to={`/blog-details/${item.id}`} className="title">
            {item.title}
          </Link>
          
        </article>
      ))}
    </>
  );
};

export default Blog;
