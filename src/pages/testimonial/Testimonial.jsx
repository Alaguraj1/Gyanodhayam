import React from "react";
import Seo from "../../components/common/seo/Seo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Footer from "../../components/business/Footer";
import TestimonialContent from "../../components/testimonial/TestimonialContent";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";

const Testimonial = () => {
  return (
    <>
      <Seo title="Testimonial" />

      <Sidebar />

      <Header />

      <EventDetailsBannerMain title="Testimonial" />

      <TestimonialContent />

      <Footer />
    </>
  );
};

export default Testimonial;
