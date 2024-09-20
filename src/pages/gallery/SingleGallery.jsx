import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
// import homeBanner from "../../assets/images/Banner.jpg";
// import bannerLogo from "../../assets/images/BannerLogo.png";
import Footer from "../../components/business/Footer";
// import FounderContent from "../../components/Founder/FounderContent";
// import GalleryContent from "../../components/Gallery/GalleryContent";
// import GalleryBanner from "../../components/Gallery/GalleryBanner";
import SingleGalleryContent from "../../components/Gallery/SingleGalleryContent";
import SingleGalleryBanner from "../../components/Gallery/SingleGalleryBanner";
import axios from "axios";
import { useParams } from "react-router-dom";

const Gallery = () => {
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
      <Seo title="Gallery Details" />

      <Sidebar />

      <Header />

      <SingleGalleryBanner />

      <SingleGalleryContent postData={postData} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Gallery;
