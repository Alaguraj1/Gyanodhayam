import React, { useEffect, useState } from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { singleSlugData } from "../../utils/function.utils";
import axios from "axios";
import Footer from "../../components/business/Footer";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import EventDetailsMain from "../../components/SetvicesActivites/EventDetailsMain";
import { useParams } from "react-router-dom";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
const ServicesActivitiesContent = () => {
  const { slug } = useParams();
  console.log("✌️slug --->", slug);

  
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
        <Seo title= {`${slug}`} />

        <Sidebar />

        <Header />

        <EventDetailsBannerMain title="Events" />

        <EventDetailsMain slug={slug} categorys={category} />

        <Footer />
      </div>
    </>
  );
};

export default ServicesActivitiesContent;
