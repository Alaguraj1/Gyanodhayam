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

  return (
    <>
      <div className="main-page-wrapper">
        <Seo title= {`${slug}`} />

        <Sidebar />

        <Header />

        <EventDetailsBannerMain title="Events" />

        <EventDetailsMain slug={slug} />

        <Footer />
      </div>
    </>
  );
};

export default ServicesActivitiesContent;
