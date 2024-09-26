import React, { useRef, useState } from "react";
import nanneri from "../../assets/images/Courses/nanneri.jpg";
import trust from "../../assets/images/Courses/gyanodhayam-educational-trust-certificate-course.jpg";
import motivation from "../../assets/images/Courses/gyanodhayam-educational-trust-motivation-class.jpg";
import teachers from "../../assets/images/Courses/teachers-practice-course.jpg";
import guru from "../../assets/images/Courses/guru-practice-course.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
// import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import homeBanner from "../../assets/images/Banner.jpg";
import bannerLogo from "../../assets/images/BannerLogo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseContent = () => {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Nanneri");

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
        <div
          style={{
            backgroundImage: `url(${homeBanner})`,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="banner-content-outer">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={bannerLogo}
                alt="banner-logo"
                style={{ width: "20%" }}
              />
            </div>
            <h2 className="banner-header">
              {" "}
              "Faith on Guru never goes in vain"
            </h2>
            <h4 className="banner-subHeader">- Jai Guruji </h4>
          </div>
        </div>
      </div>

      <div className="container mt-50  lg-mt-50 ">
        <div className="relative">
          <div className="row mt-50 sticky-container">
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
                    width: "75%",
                    lineHeight: "20px",
                  }}
                >
                  <li
                    onClick={() => handleTabClick("Nanneri")}
                    className={
                      activeTab === "Nanneri"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Nanneri" ? (
                      <i
                        className="nanneri-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#nanneri">Nanneri</a>
                  </li>

                  <li
                    onClick={() =>
                      handleTabClick(
                        "Gyanodhayam Educational Trust Certificate Course"
                      )
                    }
                    className={`course2-list ${
                      activeTab ===
                      "Gyanodhayam Educational Trust Certificate Course"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab ===
                    "Gyanodhayam Educational Trust Certificate Course" ? (
                      <i
                        className="trust-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#educational-trust">
                      {" "}
                      Gyanodhayam Educational Trust Certificate Course
                    </a>
                  </li>

                  <li
                    onClick={() =>
                      handleTabClick(
                        "Gyanodhayam Educational Trust Motivation Class (Degree)"
                      )
                    }
                    className={`course2-list ${
                      activeTab ===
                      "Gyanodhayam Educational Trust Motivation Class (Degree)"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab ===
                    "Gyanodhayam Educational Trust Motivation Class (Degree)" ? (
                      <i
                        className="Motivation-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#motivation">
                      Gyanodhayam Educational Trust Motivation Class (Degree)
                    </a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Teachers Practice Course")}
                    className={`course2-list ${
                      activeTab === "Teachers Practice Course"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Teachers Practice Course" ? (
                      <i
                        className="Teachers-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#teachers">Teachers Practice Course</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Guru Practice Course")}
                    className={`course2-list ${
                      activeTab === "Guru Practice Course"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Guru Practice Course" ? (
                      <i
                        className="Guru-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#guru"> Guru Practice Course</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" ref={contentRef}>
              <div id="nanneri"></div>
              <div className="course2-outer">
                <img
                  src={flower_1}
                  alt="illustration"
                  className="courses-image-1"
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
                  <h4 className="course2-title">Nanneri</h4>
                  <p className="course2-content">
                    Basic practices for healthy lifestyle.
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
                  <Link to="/nanneri">Learn More</Link>
                </p>
              </div>

              <div id="educational-trust"></div>
              <div className="course2-outer">
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="course2-title">
                    Gyanodhayam Educational Trust Certificate Course
                  </h4>
                  <p className="course2-content">
                    We are helping client to create WordPress websites with our
                    talented expert We are helping client to create WordPress
                    websites with our talented expert.
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
                <img
                  src={flower_2}
                  alt="illustration"
                  className="courses-image-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <p
                  className="guru-read-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <Link to="/trust-course">Learn More</Link>
                </p>
              </div>

              <div id="motivation"></div>
              <div className="course2-outer">
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="course2-title">
                    Gyanodhayam Educational Trust Motivation Class (Degree)
                  </h4>
                  <p className="course2-content">
                    The Gyanodhayam Educational Trust syllabus is systematically
                    divided into 10 subjects with their set of practical’s and
                    is combined into a graduation course.
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
                    <Link to="/first-sem">First Semester</Link>
                  </p>
                  <p className="guru-read-3">
                    <Link to="/second-sem">Second Semester</Link>
                  </p>
                </div>
              </div>
              <div id="teachers"></div>
              <div className="course2-outer">
                <div
                  className="text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="course2-title">Teachers Practice Course</h4>
                  <p className="course2-content">
                    There are certain rules to be followed to continue as a
                    Gyanodhayam Educational Trust teacher.
                  </p>
                </div>
                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={teachers} alt="illustration" />
                </div>
                <p
                  className="guru-read-3 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <Link to="/teachers-practice-course">Learn More</Link>
                </p>
              </div>

              <div id="guru"></div>
              <div className="course2-outer">
                <div className="text-align">
                  <h4
                    className="course2-title"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Guru Practice Course
                  </h4>
                  <img
                    src={flower_4}
                    alt="illustration"
                    className="courses-image-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  />

                  <p
                    className="course2-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    The aim of Gyanodhayam Educational Trust is to serve society
                    by assisting spiritualy interested souls to become Gurus.
                  </p>
                </div>
                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={guru} alt="illustration" />
                </div>
                <p
                  className="guru-read-3 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <Link to="/guru-practice-course">Learn More</Link>
                </p>
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

export default CourseContent;
