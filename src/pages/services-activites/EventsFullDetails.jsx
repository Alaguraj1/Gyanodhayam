import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/business/Footer";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import EventsFullDetailsMain from "../../components/SetvicesActivites/EventFullDetailsMain";

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
    <>
      <div className="main-page-wrapper">
        <Seo title="Events" />

        <Sidebar />

        <Header />

        <EventDetailsBannerMain title="Event Details" />

        <EventsFullDetailsMain postData={postData} />

        <Footer />
      </div>
    </>
  );
};

export default ServiceActivityPost;
