import React from "react";
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

const Gallery = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Founder" />

      <Sidebar />

      <Header />

      <SingleGalleryBanner />

      <SingleGalleryContent />
      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Gallery;
