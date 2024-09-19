import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryPosts = ({ slug }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // First, we need to get the category ID for the given slug
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${slug}`
        );

        if (categoryResponse.data.length === 0) {
          throw new Error("Category not found");
        }

        const categoryId = categoryResponse.data[0].id;

        // Now we can fetch posts for this category
        const postsResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100`
        );

        setPosts(postsResponse.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ marginTop: "100px" }}>
      <h3 style={{ textAlign: "center" }}> {slug}</h3>
      {posts.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <p>Date: {new Date(post.date).toLocaleDateString()}</p>
              <a href={`/services-activites-events-details/${post.slug}`} >
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPosts;
