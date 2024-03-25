import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import ServicesActivitesContent from "../../components/SetvicesActivites/ServicesActivitesContent";


const ServicesActivities = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Special Days" />

      <Sidebar />

      <Header />
      
      <ServicesActivitesContent />

      <Footer />

    </div>
  );
};

export default ServicesActivities;
