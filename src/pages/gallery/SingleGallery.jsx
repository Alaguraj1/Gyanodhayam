import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import SingleGalleryContent from "../../components/Gallery/SingleGalleryContent";
import SingleGalleryBanner from "../../components/Gallery/SingleGalleryBanner";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const { slug } = useParams();

  return (
    <div className="main-page-wrapper">
      <Seo title="Gallery Details" />

      <Sidebar />

      <Header />

      <SingleGalleryBanner />

      <SingleGalleryContent slug={slug} />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Gallery;
