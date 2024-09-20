import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import SingleTestimonialContent from "../../components/testimonial/SingleTestimonialContent";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTestimonial = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  console.log("postData", postData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!postData) return <div>No data found for this post.</div>;
  return (
    <div className="main-page-wrapper">
      <Seo title="Single Testimonial" />

      <Sidebar />

      <Header />

      <SingleTestimonialContent postData={postData} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default SingleTestimonial;
