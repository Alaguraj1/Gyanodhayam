import React from "react";
import CounterUp from "../../components/business/CounterUp";
import Header from "../../components/business/Header";
import Hero from "../../components/business/Hero";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import homeBanner from "../../assets/images/home/banner.jpg";
// import bannerLogo from "../../assets/images/BannerLogo.png";
import Footer from "../../components/business/Footer";

const Business = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Home" />
      {/* End Seo Related data */}

      <Sidebar />

      <div>
        <div
          className="home-page-main-banner"
          style={{
            backgroundImage: `url(${homeBanner})`,
          }}
        >
          <div className="banner-content-outer">
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={bannerLogo}
                alt="banner-logo"
                style={{ width: "20%" }}
              />
            </div> */}
            <h2 className="banner-header">
              {" "}
              "What do you live for? To love, to be
              <br /> ecstatic and to be spiritual "
            </h2>
            <h4 className="banner-subHeader">- Jai Guruji </h4>
          </div>
        </div>
      </div>

      <Header />

      <div className="hero-banner-one ">
        <Hero />
      </div>
      {/* <!-- /.hero-banner-one --> */}

      {/* <!--
				Counter Section One
			--> */}
      <div className="counter-section-one ">
        <div className="inner-container">
          <CounterUp />
        </div>
      </div>
      {/* End .counter-section-one */}

      {/* footer section */}
      <Footer />
    </div>
    // End .main-page-wrapper
  );
};

export default Business;
