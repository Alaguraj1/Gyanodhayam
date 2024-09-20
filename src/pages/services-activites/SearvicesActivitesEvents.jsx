import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import EventContent from "../../components/SetvicesActivites/EventContent";

const ServicesActivitiesEvents = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Special Days" />

      <Sidebar />

      <Header />

      <EventContent />

      <Footer />
    </div>
  );
};

export default ServicesActivitiesEvents;
