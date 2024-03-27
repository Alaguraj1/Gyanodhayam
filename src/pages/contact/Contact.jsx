import React from "react";
import banner from "../../assets/images/media/img_63.jpg";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Header from "../../components/business/Header";
// import Address from "../../components/common/address/Address";
import FromStyleThree from "../../components/common/contact/FromStyleThree";
import Seo from "../../components/common/seo/Seo";
import Footer from "../../components/business/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  return (
    <div className="main-page-wrapper">
      <Seo title="Contact V2" />

      <Sidebar />

      <Header />

      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Contact Us</h2>
          <p>Get our all info and also can message us directly from here</p>
        </div>
        <img
          src={require("../../assets/images/shape/shape_24.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
      </div>

      <div className="container mt-100 mb-100 lg-mt-50 lg-mb-50 text-align">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">South Zone:</h3>
                <ul className="first-sem-list">
                  <li>
                    <b>Karur</b> - 93612 12566
                  </li>
                  <li>
                    <b>Madurai</b> - 96777 87500
                  </li>
                  <li>
                    <b>Ramanathapuram</b> - 90928 00990
                  </li>
                  <li>
                    <b>Virudhunagar</b> - 86952 99599
                  </li>
                  <li>
                    <b>Tirunelveli</b> - 98655 76659
                  </li>
                  <li>
                    <b>Palani</b> - 99526 44196
                  </li>
                  <li>
                    <b>Kulithalai</b> - 99444 99507
                  </li>
                  <li>
                    <b>Dindigul</b> - 93459 95555
                  </li>
                  <li>
                    <b>Kamuthi</b> - 90928 00990
                  </li>
                  <li>
                    <b>Gyana Guru Peedam (Anjur)</b> - 94420 1383
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">East Zone:</h3>
                <ul className="first-sem-list">
                  <li>
                    <b>Trichy</b> - 96000 18154
                  </li>
                  <li>
                    <b>Thanjavur</b> - 99524 33503
                  </li>
                  <li>
                    <b>Kumbakonam</b> - 95005 65384
                  </li>
                  <li>
                    <b>Mayavaram</b> - 95009 54563
                  </li>
                  <li>
                    <b>Thiruvaiyar</b> - 97912 54346
                  </li>
                  <li>
                    <b>Tiruvarur</b> - 73589 29886
                  </li>
                  <li>
                    <b>Pattukottai</b> - 97503 58564
                  </li>
                  <li>
                    <b>Pudukottai</b> - 99942 89195
                  </li>
                  <li>
                    <b>Karanthai</b> - 87547 38366
                  </li>
                  <li>
                    <b>Vishnupuram</b> - 88389 56740
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-50 lg-mt-30">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">West Zone:</h3>
                <ul className="first-sem-list">
                  <li>
                    <b>Erode</b> - 99444 99508
                  </li>
                  <li>
                    <b>Pollachi</b> - 97881 18819
                  </li>
                  <li>
                    <b>Coimbatore</b> - 97914 50956
                  </li>
                  <li>
                    <b>Tirupur</b> - 99449 21422
                  </li>
                  <li>
                    <b>Avinasi</b> - 95009 89006
                  </li>
                  <li>
                    <b>Bhavani</b> - 99444 99508.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">North Zone:</h3>
                <ul className="first-sem-list">
                  <li>
                    <b>Mogappair</b> - 90877 31973
                  </li>
                  <li>
                    <b>Chitlapakkam</b> - 98403 14238
                  </li>
                  <li>
                    <b>Mughalivakam</b> - 99401 75614
                  </li>
                  <li>
                    <b>Thiruvallur</b> - 73585 95199
                  </li>
                  <li>
                    <b>Cuddalore</b> - 89734 45087
                  </li>
                  <li>
                    <b>Pondicherry</b> - 93454 50218
                  </li>
                  <li>
                    <b>Thiruvannamalai</b> - 70106 22567
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-50 lg-mt-30">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">Singapore:</h3>
                <ul className="first-sem-list">
                  <li>+65 8430 7024</li>
                  <li>+65 9451 0671</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <h3 className="first-side-header">Malaysia:</h3>
                <ul className="first-sem-list">
                  <li>+65 8797 8623</li>
                </ul>
              </div>
            </div>
          </div>
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
