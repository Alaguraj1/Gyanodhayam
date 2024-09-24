import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
// import homeBanner from "../../assets/images/Banner.jpg";
// import bannerLogo from "../../assets/images/BannerLogo.png";
import Footer from "../../components/business/Footer";
// import FounderContent from "../../components/Founder/FounderContent";
import GalleryContent from "../../components/Gallery/GalleryContent";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";

const Gallery = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Gallery" />

      <Sidebar />

      <Header />

      <EventDetailsBannerMain title="Gallery" />

      <GalleryContent />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Gallery;
