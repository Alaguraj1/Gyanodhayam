import React, { useRef, useState } from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import nanneri from "../../assets/images/Courses/Imgs/img-1.jpg";
import trust from "../../assets/images/Courses/Imgs/img-2.jpg";
import motivation from "../../assets/images/Courses/Imgs/img-3.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const LifeInGyanodhayamContent = () => {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Service Activities");

  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);
  AOS.init();

  const handleTabClick = (tabName) => {
    // Calculate the offset for the selected section
    setActiveTab(tabName);
  };

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title">Life In Gyanodhayam</h3>
              <p className="intro-content">
                Gyanodhayam creates an opportunity to understand about us, like
                what is life? and how to lead a real life as a human being
                achieving its full potential? It’s a wonderful experience and we
                wish everyone to experience the truth.
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-100 mb-50 lg-mt-50 lg-mb-20">
        <div className="relative">
          <div className="row mt-50 sticky-container">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <h3 className="course2-top-content">
                This understanding of life acts as a basic ignition to awaken
                our wisdom.
                <br />
                (Gyanodhayam = Gyan( Wisdom) + Udayam (rise) )
              </h3>

              <p className="course2-content" style={{ textAlign: "center" }}>
                As part of Gyanodhayam society, we not only get to practice
                disciplined life style every day but also get lot of chances to
                involve in variety of activities to serve the mankind and help
                them to lead a healthy and happier life.
              </p>
            </div>
            <div className="col-lg-3 course2-syllabus">
              <div className="sticky">
                <ul
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    fontSize: "14px",
                    width: "100%",
                    lineHeight: "20px",
                  }}
                >
                  <li
                    onClick={() => handleTabClick("Service Activities")}
                    className={
                      activeTab === "Service Activities"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Service Activities" ? (
                      <i
                        className="services-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#service">Service Activities</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Special Days")}
                    className={`course2-list ${
                      activeTab === "Special Days"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Special Days" ? (
                      <i
                        className="specialDays-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#special-days">Special Days</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Group Activities")}
                    className={`course2-list ${
                      activeTab === "Group Activities"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Group Activities" ? (
                      <i
                        className="group-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#group">Group Activities</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" ref={contentRef}>
              <div id="service"></div>
              <div className="course2-outer">
                <img
                  src={flower_1}
                  alt="illustration"
                  className="lifeGyanodhayam-image-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="course2-title">Service Activities</h4>
                  <p className="course2-content">
                    Service plays a major part in spiritual practice and it is
                    an integral culture of Gyanodhayam. we derive lot of things
                    from our society and it is our responsibility to give it
                    back and thank them through our service activities.
                  </p>
                </div>
                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nanneri} alt="nanneri" />
                </div>
                <p
                  className="guru-read text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <Link to="/services-activites">Learn More</Link>
                </p>
              </div>

              <div id="special-days"></div>
              <div className="course2-outer">
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={flower_2}
                    alt="illustration"
                    className="lifeGyanodhayam-image-2"
                  />
                  <h4 className="course2-title">Special Days</h4>
                  <p className="course2-content">
                    In Gyanodhayam, we dedicate each Saturday for a special
                    purpose to improve and equip our self against all
                    possibilities.
                  </p>
                </div>
                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={trust} alt="illustration" />
                </div>

                <p
                  className="guru-read-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <Link to="/special-days">Learn More</Link>
                </p>
              </div>

              <div id="group"></div>
              <div className="course2-outer">
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={flower_3}
                    alt="illustration"
                    className="lifeGyanodhayam-image-3"
                  />
                  <h4 className="course2-title">Group Activities</h4>
                  <p className="course2-content">
                    The members of gyanodhayam along with their family members
                    celebrate the day with fun filled activities and games along
                    with a spiritual touch.
                  </p>
                </div>
                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={motivation} alt="illustration" />
                </div>
                <div
                  className="course-links text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <p className="guru-read-3" style={{ paddingRight: "20px" }}>
                    <Link to="/group-activities">Learn More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 empty-div">{/* empty div */}</div>
          </div>
        </div>
      </div>
      {/* End container */}
    </>
  );
};

export default LifeInGyanodhayamContent;
