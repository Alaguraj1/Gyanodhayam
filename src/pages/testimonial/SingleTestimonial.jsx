import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import SingleTestimonialContent from "../../components/testimonial/SingleTestimonialContent";
import { useParams } from "react-router-dom";

const SingleTestimonial = () => {
  const { slug } = useParams();

  return (
    <div className="main-page-wrapper">
      <Seo title="Single Testimonial" />

      <Sidebar />

      <Header />

      <SingleTestimonialContent slug={slug} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default SingleTestimonial;
