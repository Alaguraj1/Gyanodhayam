import React, { useState } from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import Header from "../../components/business/Header";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";
import { OurCenters, capitalizeFLetter } from "../../utils/constant.utils";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PrivacyCopyright from "../../components/privacy/PrivayCopyright";

const Privacy = () => {
  AOS.init();

  const [searchTerm, setSearchTerm] = useState("");

  // Count total centers before filtering
  const totalCentersCount = Object.values(OurCenters).flat().length;

  // Filter regions and centers based on search term
  const regions = Object.keys(OurCenters).map((region) => {
    const searchTermLower = searchTerm.toLowerCase();
    const regionNameLower = region.toLowerCase();

    const isRegionMatch = regionNameLower.includes(searchTermLower);

    const filteredCenters = OurCenters[region].filter((center) => {
      if (isRegionMatch) {
        return true; // Include all centers if region matches
      }
      return (
        center.center?.toLowerCase()?.includes(searchTermLower) ||
        center.zone?.toLowerCase()?.includes(searchTermLower)
      );
    });

    return {
      regionName: region,
      centers: filteredCenters,
    };
  });

  // Count the number of filtered centers
  const filteredCentersCount = regions.reduce(
    (total, { centers }) => total + centers.length,
    0
  );
  const hasCenters = filteredCentersCount > 0;

  return (
    <div className="main-page-wrapper">
      <Seo title="Contact" />
      <Sidebar />
      <Header />
      <EventDetailsBannerMain title="Copyright & Privacy Policy" />
<PrivacyCopyright />

      <Footer />
    </div>
  );
};

export default Privacy;
