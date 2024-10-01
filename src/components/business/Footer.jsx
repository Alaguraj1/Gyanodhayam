import React from "react";
import footerLogo from "../../assets/images/footer-logo.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import twiter from "../../assets/images/twiter.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);
  AOS.init();

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(248 225 207 / 15%)", paddingTop: "20px", position: "relative" }}
    >
      <div className="container mt-30 ">
        <div className="row footer-row">
          <div
            className="col-lg-4 col-md-6 footer-1"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div style={{ display: "flex" }}>
              <div className="footerLogo-outer">
                <img src={footerLogo} alt="footer-logo" />
              </div>
              <div className="quick-link-outer">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-list">
                  <li>
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    <Link to="/founder">Founder - Guru</Link>
                  </li>
                  <li>
                    <Link to="/course">Courses</Link>
                  </li>
                  <li>
                    <Link to="/testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/life-in-gyanodhayam">Life in Gyanodhayam</Link>
                  </li>
                  <li>
                    <Link to={"/gallery"}>Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 footer-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="footer-list-2">
              <h5 style={{ color: "white", visibility: "hidden" }}>empty</h5>
              <ul className="footer-list">
                <h5 style={{ color: "white", visibility: "hidden" }}>empty</h5>
                <li>
                  <Link to="/media">Media & Press</Link>
                </li>
                <li>Donate</li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-6 footer-3"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div>
              <h5 className="footer-title">Need Help?</h5>
              <ul className="footer-list">
                <li>About Us</li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>Free Literature</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 footer-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="footer-newsletter-outer">
              <h5 className="footer-title">Subscribe to newsletter</h5>
              <div className="footer-email-outer">
                <input
                  type="email"
                  placeholder="EMail"
                  className="footer-email"
                />
                <p className="footer-submit" style={{ cursor: "pointer" }}>
                  Submit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="social-main mt-30 mb-30 ">
          <div
            className="social-title-outer"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h5 className="connect-width" style={{ paddingBottom: "10px" }}>
              Connect With Us
            </h5>
            <div>
              <div className="social-icon-outer">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="social-icons"
                >
                  <img src={facebook} alt="facebook" className="social-icons" />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  className="social-icons"
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="social-icons"
                  />
                </Link>

                <Link
                  to="https://youtube.com/"
                  target="_blank"
                  className="social-icons"
                >
                  <img src={youtube} alt="youtube" className="social-icons" />
                </Link>

                <Link
                  to="https://x.com/"
                  target="_blank"
                  className="social-icons"
                >
                  <img src={twiter} alt="twiter" className="social-icons" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row copyright-main">
          <div className="col-md-6">
            <p className="footer-copy-content">
              Copyright 2023 @ Gyanodhayam Educational Trust. Concept By{" "}
              <a href="https://irepute.in/" target="blank">
                repute
              </a>
            </p>
          </div>

          <div className="col-md-3">
            <p className="footer-copy-content" style={{ textAlign: "end" }}>
              Privacy Policy
            </p>
          </div>

          <div className="col-md-3">
            <p className="footer-copy-content" style={{ textAlign: "end" }}>
              Terms and Contidions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
