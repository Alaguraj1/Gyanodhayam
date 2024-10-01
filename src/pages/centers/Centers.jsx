import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";
import Header from "../../components/business/Header";
import homeBanner from "../../assets/images/Banner.jpg";
import bannerLogo from "../../assets/images/BannerLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { OurCenters } from "../../utils/constant.utils";
import { Link } from "react-router-dom";
import EventDetailsBannerMain from "../../components/SetvicesActivites/EventDetailsBannerMain";

const Contact = () => {
  AOS.init();

  return (
    <div className="main-page-wrapper">
      <Seo title="Contact" />

      <Sidebar />

      <Header />

      <EventDetailsBannerMain title="Our Centers" />

      <div className="container mt-50 mb-100 lg-mt-50 lg-mb-50 text-align">
        <div className="row">
          {OurCenters?.map((item, index) => (
            <div
              className="col-lg-4 pt-50"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div style={{ display: "flex" }}>
                <div>
                  <h3 className="first-side-header ">{item.center}</h3>
                  <ul className="first-sem-list" style={{ listStyle: "none" }}>
                    <div style={{ display: "flex", alignItems: "start " }}>
                      <i
                        className="bi bi-geo-alt"
                        style={{ marginRight: "5px", fontWeight: "bold" }}
                      ></i>
                      <li
                        style={{ textTransform: "capitalize" }}
                        dangerouslySetInnerHTML={{ __html: item.address }}
                      ></li>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i
                        className="bi bi-telephone"
                        style={{ marginRight: "5px", fontWeight: "bold" }}
                      ></i>
                      <li>
                        <Link to={`tel:${item.contactNumber}`}>
                          {item.contactNumber}
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

      {/* <div className="contact-section-six mt-100 mb-60 lg-mt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="form-style-three light-bg ps-0 sm-pb-80">
                <FromStyleThree />
              </div>
            </div>
          
          </div>
        </div>

        <div className="map-area-one mt-100 lg-mt-50">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map"
                className="gmap_iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359537.0372323226!2d-75.8002569!3d45.25015655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1660284753489!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Contact;
