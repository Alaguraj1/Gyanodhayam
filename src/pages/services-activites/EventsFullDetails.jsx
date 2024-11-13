import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/business/Footer";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import EventsFullDetailsMain from "../../components/SetvicesActivites/EventFullDetailsMain";
import axios from "axios";

const ServiceActivityPost = () => {

  const {slug} = useParams();
console.log('✌️slug --->', slug);

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchChildCategories();
  }, []);
  const fetchChildCategories = async () => {
    try {
      const parentSlug = "service-activity"; // Replace with your parent category slug

      // First, fetch the parent category to get its ID
      const parentRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${parentSlug}`
      );

      if (parentRes.data.length === 0) {
        throw new Error("Parent category not found");
      }

      const parentId = parentRes.data[0].id;

      // Now fetch the child categories
      const childrenRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?parent=${parentId}`
      );

      setCategory(childrenRes.data); // This will be an array of child categories
    } catch (err) {
      console.error("Error fetching child categories: ", err);
    }
  };

  return (
    <>
      <div className="main-page-wrapper">
        <Seo title={`${slug}`} />

        <Sidebar />

        <Header />

        <EventDetailsBannerMain title="Event Details" />

        <EventsFullDetailsMain slug={slug} categories={category}  />

        <Footer />
      </div>
    </>
  );
};

export default ServiceActivityPost;
