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

  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // First, we need to get the category ID for the given slug
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"testimonials"}`
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
  }, []);

  console.log("testimonials", posts);


  return (
    <div className="main-page-wrapper">
      <Seo title={`${slug}`} />

      <Sidebar />

      <Header />

      <SingleTestimonialContent slug={slug} posts={posts} Isloading={isLoading} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default SingleTestimonial;
