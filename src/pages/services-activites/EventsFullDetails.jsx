import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ServiceActivityPost = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams(); // This will be 'february-2017' based on your URL

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://file.gyanodhayam.org/wp-json/wp/v2/posts/?slug=" + slug
        );

        console.log("response", response);

        if (response.data.length > 0) {
          setPostData(response.data[0]);
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        console.error("Error fetching post data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!postData) return <div>No data found for this post.</div>;

  return (
    <div className="container mt-5">
      <h1>{postData.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
      <p>Date: {new Date(postData.date).toLocaleDateString()}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ServiceActivityPost;
