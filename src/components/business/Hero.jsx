import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import jai_guruji1 from "../../assets/images/home/gyanodham.jpg";
import jai_guruji2 from "../../assets/images/home/courses.jpg";
import jai_guruji3 from "../../assets/images/home/our-centers.jpg";
import jai_guruji4 from "../../assets/images/home/our-initivatie.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import events from "../../assets/images/home/event-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);

  AOS.init();

  return (
    <>
      <div className="container">
        {/* row - 1 */}

        <div className="row content-1 flex-column-reverse flex-lg-row ">
          <div
            className="col-lg-6 col-md-12 jai-guru-main"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="jai-guru-1">
              <h3 className="hero-heading-1  theme-mb-0">Gyanodhayam</h3>
              <p className="hero-sub-heading-1">
                “By Understanding the Ultimate Truth by realizing the Soul, We
                will attain the Ultimate Joy in Life”. Gyanodhayam Educational
                Trust was created for mankind to attain nobleness and to
                experience eternal bliss by leading a normal life in society!
              </p>
              <p className="guru-read">
                {" "}
                <Link
                  to="/life-in-gyanodhayam"
                  style={{ textDecoration: "underline" }}
                >
                  Read More
                </Link>
              </p>
            </div>
            <div className="flower-image-outer">
              <img src={flower_1} alt="illustration" className="flower-image" />
            </div>
          </div>
          {/* End .col */}

          <div
            className="col-lg-6 col-md-12 "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <i className="line-1" style={{ backgroundColor: "#ff8000" }}></i>
            <div className="image-container">
              <i className="line-1" style={{ backgroundColor: "#ff8000" }}></i>
              <img src={jai_guruji1} alt="illustration" className="m-auto" />
            </div>
          </div>
          {/* End .col */}
        </div>

        {/* row - 2 */}

        <div className="row mt-100 lg-mt-50 content-1 ">
          <div
            className="col-lg-6 col-md-12 "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <i className="line-2" style={{ backgroundColor: "#052856" }}></i>
            <div className="image-container">
              <i className="line-2" style={{ backgroundColor: "#052856" }}></i>
              <img src={jai_guruji2} alt="illustration" className="m-auto" />
            </div>
          </div>
          {/* End .col */}

          <div
            className="col-lg-6 col-md-12 jai-guru-main-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="jai-guru-2">
              <h3 className="hero-heading-2 font-recoleta theme-mb-0">
                Our Course
              </h3>
              <p className="hero-sub-heading-2">
                Experience the ancient and deep-rooted techniques of yoga,
                beginners and advanved kriya meditation, art, science, and
                spirituality.
              </p>
              <p className="guru-read-2">
                <Link to="/course" style={{ textDecoration: "underline" }}>
                  Read About All Courses
                </Link>
              </p>
              <div className="flower-image-outer-2">
                <img
                  src={flower_2}
                  alt="illustration"
                  className="flower-image"
                />
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>

        {/* row - 3 */}

        <div className="row  mt-100 lg-mt-50 content-1 flex-column-reverse flex-lg-row">
          <div
            className="col-lg-6 col-md-12 jai-guru-main-3"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="jai-guru-3">
              <h3 className="hero-heading-3 font-recoleta theme-mb-0">
                Our Centers
              </h3>
              <p className="hero-sub-heading-3">
                Built around the purpose of good health, happiness and joy of
                living, our members go through a journey of fulfillment in the
                areas of healthy and happy living. In light of this objective
                and to reach the masses, our centre is available in India and
                Singapore.
              </p>
              <p className="guru-read-3">
              <Link to="/our-centers" style={{ textDecoration: "underline" }}>Know More</Link></p>

              <div className="flower-image-outer-3">
                <img
                  src={flower_3}
                  alt="illustration"
                  className="flower-image"
                />
              </div>
            </div>
          </div>
          {/* End .col */}

          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <i className="line-1" style={{ backgroundColor: "#dbbd2b" }}></i>
            <div className="image-container">
              <i className="line-1" style={{ backgroundColor: "#dbbd2b" }}></i>
              <img src={jai_guruji3} alt="illustration" className="m-auto" />
            </div>
          </div>
          {/* End .col */}
        </div>

        {/* row - 4 */}

        <div className="row mt-100 lg-mt-50 content-1 ">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <i className="line-2" style={{ backgroundColor: "#ff8000" }}></i>
            <div className="image-container">
              <i className="line-2" style={{ backgroundColor: "#ff8000" }}></i>
              <img src={jai_guruji4} alt="illustration" className="m-auto" />
            </div>
          </div>
          {/* End .col */}

          <div
            className="col-lg-6 col-md-12 jai-guru-main-4"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="jai-guru-4">
              <h3 className="hero-heading-4 font-recoleta theme-mb-0">
                Our Initiatives
              </h3>
              <p className="hero-sub-heading-4">
                Service of mankind is service to God
              </p>
              <p className="guru-read-4">
                <Link
                  to="/services-activites"
                  style={{ textDecoration: "underline" }}
                >
                  Know More
                </Link>
              </p>
              <div className="flower-image-outer-4">
                <img
                  src={flower_4}
                  alt="illustration"
                  className="flower-image"
                />
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>

        {/* events */}

        <div
          className="row mt-100 lg-mt-50"
          style={{ overflow: "hidden" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <div
            className="col-12 event-main"
            style={{ backgroundImage: `url(${events})` }}
          >
            <div className="hover-effect">
              <h3 className="event-title">
                <Link to="/announcements-events">Announcements & Events</Link>
              </h3>
              <p className="event-content">
                Seeking the power of prayer throw events <br />
                and programs.
              </p>
            </div>
            <button className="event-participate">Participate With Us</button>
          </div>
        </div>
      </div>
      {/* End container */}
    </>
  );
};

export default Hero;
