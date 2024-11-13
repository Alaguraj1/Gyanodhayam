import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import SingleGalleryContent from "../../components/Gallery/SingleGalleryContent";
import { useParams } from "react-router-dom";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
import axios from "axios";

const Gallery = () => {
  const { slug } = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"gallery"}`
        );

        if (categoryResponse.data.length === 0) {
          throw new Error("Category not found");
        }

        const categoryId = categoryResponse.data[0].id;

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

  console.log("posts", posts);

  return (
    <div className="main-page-wrapper">
      <Seo title={`Gallery - ${slug}`} />

      <Sidebar />

      <Header />

      <EventDetailsBannerMain title="Gallery"  />

      <SingleGalleryContent slug={slug} posts={posts} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Gallery;
