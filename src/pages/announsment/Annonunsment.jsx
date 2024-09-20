import React from "react";
import Seo from "../../components/common/seo/Seo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Footer from "../../components/business/Footer";
import TestimonialContent from "../../components/testimonial/TestimonialContent";
import AnnouncementMain from "../../components/announcements/AnnouncementMain";

const Announcement = () => {
  return (
    <>
      <Seo title="Announcements & Events" />

      <Sidebar />

      <Header />

      <AnnouncementMain />

      <Footer />
    </>
  );
};

export default Announcement;
