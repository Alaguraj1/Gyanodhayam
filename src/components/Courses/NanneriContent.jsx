import React from "react";
import jai_guruji1 from "../../assets/images/Courses/nanneri/banner.jpg";
import nanneri from "../../assets/images/Courses/nanneri/img.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Nanneri = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);
  AOS.init();
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title" style={{ paddingRight: "50px" }}>
                Nanneri
              </h3>
              <p className="intro-content">
                “By Understanding the Ultimate Truth by realizing the Soul, We
                will attain the Ultimate Joy in Life”-
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30 relative">
        <img
          src={flower_1}
          alt="illustration"
          className="nanneri-flower-image-1"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        />
        <div className="row pb-40 lg-pb-10">
          <div className="col-lg-2 empty-div"></div>
          <div className="col-lg-8">
            <h3
              className="nanneri-header"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Nanneri
            </h3>
          </div>
          <div className="col-lg-2 empty-div"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 empty-div">{/* empty div */}</div>

          <div className="col-lg-8">
            <div className="nanneri-contents" style={{ paddingBottom: "40px" }}>
              <div
                className="nanneri-image-outer"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img
                  src={nanneri}
                  alt="nanneri"
                  className="nanneri-nanneri-image"
                />
              </div>
              <div
                className="text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h4 className="nanneri-header-1">Course Syllabus</h4>
                <ul className="nanneri-list">
                  <li>Simple exercises</li>
                  <li>Surya Namaskaram</li>
                  <li>Proper food habits</li>
                  <li>Discipline and ethics to lead a healthy life</li>
                  <li>Key points for healthy body</li>
                  <li>Meditation practices</li>
                </ul>
              </div>
            </div>
            <div className="text-align">
              <img
                src={flower_2}
                alt="illustration"
                className="nanneri-flower-image-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              />
              <h4
                className="nanneri-header-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                Rules for students:
              </h4>

              <ul
                className="nanneri-rules-list"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <li>People of all ages can participate.</li>
                <li>Classes take place on Saturdays or Sundays.</li>
                <li>
                  Classes are held for two hours in the morning or evening.
                </li>
                <li>
                  There is no specific time period for this class. Students may
                  continuously come to the class.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 empty-div">{/* empty div */}</div>
        </div>
      </div>
    </>
  );
};

export default Nanneri;
