import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/business/Footer";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import AnnouncementDetailsMain from "../../components/announcements/AnnouncementDetailsMain";

const AnnouncementDetails = () => {

  const {slug} = useParams();

  return (
    <>
      <div className="main-page-wrapper">
        <Seo title={`${slug}`} />

        <Sidebar />

        <Header />

        <EventDetailsBannerMain title="Event Details" />

        <AnnouncementDetailsMain slug={slug}  />

        <Footer />
      </div>
    </>
  );
};

export default AnnouncementDetails;
