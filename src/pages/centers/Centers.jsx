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

const Contact = () => {
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
  const filteredCentersCount = regions.reduce((total, { centers }) => total + centers.length, 0);
  const hasCenters = filteredCentersCount > 0;

  return (
    <div className="main-page-wrapper">
      <Seo title="Contact" />
      <Sidebar />
      <Header />
      <EventDetailsBannerMain title="Our Centers" />

      <div className="container mt-50 mb-100 lg-mt-50 lg-mb-50 text-align">
        <div className="row mb-3">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
            <div className="first-sem-list">
              {/* Display filtered centers count or 0 if none found */}
              Number Of Centers - {hasCenters ? filteredCentersCount : 0}
            </div>
            <input
              type="text"
              className="center-input mt-3 mt-md-0 custom-input"
              placeholder="Search by Center..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {hasCenters ? (
          regions.map(({ regionName, centers }) => (
            <div key={regionName} className="pt-25">
              {centers.length > 0 && (
                <div>
                  <h3 className="region-header">{`${capitalizeFLetter(regionName)} Zone`}</h3>
                  <div className="row">
                    {centers.map((center) => (
                      <div
                        key={center.id}
                        className="col-lg-4 pt-50"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        <div style={{ display: "flex" }}>
                          <div>
                            <h3 className="first-side-header">{center.center}</h3>
                            <ul className="first-sem-list" style={{ listStyle: "none" }}>
                              <div style={{ display: "flex", alignItems: "start" }}>
                                <i className="bi bi-geo-alt" style={{ marginRight: "5px", fontWeight: "bold" }}></i>
                                <li style={{ textTransform: "capitalize" }} dangerouslySetInnerHTML={{ __html: center.address }}></li>
                              </div>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <i className="bi bi-telephone" style={{ marginRight: "5px", fontWeight: "bold" }}></i>
                                <li>
                                  <Link to={`tel:${center.contactNumber}`}>
                                    {center.contactNumber}
                                  </Link>
                                </li>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="first-sem-list" style={{ display: "flex", justifyContent: "center" }}>
            No Center Found
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
