import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import GroupActivitiesContent from "../../components/GroupActivites/GroupActivitiesContent";


const GroupActivities = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Special Days" />

      <Sidebar />

      <Header />
      
      <GroupActivitiesContent />

      <Footer />

    </div>
  );
};

export default GroupActivities;
