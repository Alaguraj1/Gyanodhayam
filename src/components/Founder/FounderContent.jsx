import React, { useRef, useState } from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import founder from "../../assets/images/founder/Founder.jpg";
import journey from "../../assets/images/founder/img-2.jpg";
import book from "../../assets/images/founder/img-3.jpg";
import article from "../../assets/images/founder/img-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FounderListOfEnglishSpeach,
  FounderListOfMusicCD,
  FounderListOfTamilSpeach,
  FounderListTamilBook,
} from "../../utils/constant.utils";

const FounderContent = () => {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Our Founder");

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
              <h3 className="intro-title">Founder</h3>
              <p className="intro-content">
                Sri N. Jayakichenin (5 April 1977 – 28 November 2021), also
                known as Jai Guruji born in a simple middle-class family to Mrs.
                Punitha and Mr. Narayanasamy, in Pondicherry
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="container mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div className="relative">
          <div className="row mt-50 sticky-container">
            <div className="col-lg-3 course2-syllabus">
              <div className="sticky">
                <ul
                  className="founder-nav-list"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <li
                    onClick={() => handleTabClick("Our Founder")}
                    className={
                      activeTab === "Our Founder"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Our Founder" ? (
                      <i
                        className="founder-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#founder">Our Founder</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("His Life Journey")}
                    className={`course2-list ${
                      activeTab === "His Life Journey"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "His Life Journey" ? (
                      <i
                        className="life-journey"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#journey">His Life Journey</a>
                  </li>

                  <li
                    onClick={() => handleTabClick(" Books & Speech")}
                    className={`course2-list ${
                      activeTab === " Books & Speech"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === " Books & Speech" ? (
                      <i
                        className="book"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#book">Books & Speech</a>
                  </li>

                  {/* <li
                    onClick={() => handleTabClick("Article")}
                    className={`course2-list ${
                      activeTab === "Article"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                  >
                    {
                      activeTab === "Article" ? <i className="article" style={{ backgroundColor: "#f58635" }}></i> : null
                    }
                    <a href="#article">Article</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-6" ref={contentRef}>
              <div id="founder"></div>
              <div className="course2-outer">
                <img
                  src={flower_1}
                  alt="flower"
                  className="founder-image-1"
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
                  <h4 className="course2-title">Our Founder</h4>
                  <p className="course2-content">
                    Sri N. Jayakichenin (5 April 1977 – 28 November 2021), also
                    known as Jai Guruji born in a simple middle-class family to
                    Mrs. Punitha and Mr. Narayanasamy, in Pondicherry. His birth
                    took place on an auspicious full moon day, in Mahara Laknam.
                  </p>
                </div>

                <div
                  style={{
                    margin: "20px 0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={founder} alt="nanneri" />
                </div>
                {/* <p className="guru-read">
                  <Link to="/introduction">Learn More</Link>
                </p> */}
              </div>

              <div id="journey"></div>
              <div className="course2-outer">
                <img
                  src={flower_2}
                  alt="flower"
                  className="founder-image-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <div className="text-align">
                  <h4
                    className="course2-title"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    His Life Journey
                  </h4>
                  <p
                    className="course2-content"
                    style={{ paddingBottom: "8px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Jai Guruji completed his schooling at Jeevanandham Govt
                    Higher Secondary School and obtained a diploma from
                    Ezhumalai Engineering College, later completed his higher
                    education at the Indian Institute of Engineering Technology,
                    Kodambakkam, Chennai. Some are incarnated after birth, often
                    their birth becomes their own incarnation, and the birth of
                    Jai Guruji is no exception to this.
                  </p>
                  <p
                    className="course2-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Though he led an ordinary life, his intention was always to
                    reach the highest, his mind continued to ponder about the
                    puzzles of the world and the mysterious knots of creation.
                    His thoughts have indeed been fruitful. On the day of March
                    21st, 1990, his quest and indomitable persistence resulted
                    in sweet fruit of success in the form of ‘Englightenment’
                    when he was at Kailasanadhar temple at Koot Road,
                    Pondicherry.
                  </p>

                  <p
                    className="course2-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Despite the people who try to set their own identity on this
                    earth, he preferred to ride on the road not much taken. He
                    chose the noble path of dedicating his life to the benefit
                    of society. He figured out serving humanity is the right
                    platform to give whatever he got.
                  </p>
                  <p
                    className="course2-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    It is easy to claim that a person could not hurt himself or
                    others if he was all alone in a deep forest, mountain, or
                    lonely spot. But managing his emotional characters becomes
                    very difficult as he encounters challenges being in ordinary
                    social life. For that reason, Guruji put himself in ordinary
                    social life and gives solutions to the challenges and
                    problems we face in our day to day life. He has taught
                    himself to confront all the inequalities and difficulties of
                    everyday life. In order to lead others by being in ordinary
                    social life, he did go to work like everybody else.
                  </p>
                  <p
                    className="course2-content"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    He was a technician at the Indian Institute of Technology in
                    Adayar, Chennai. He has worked as a manager, technical
                    director, and professional consultant for many private media
                    and multimedia firms.
                    <br /> He got married in 2007 and fathered two sons.
                  </p>
                  <img
                    src={flower_4}
                    alt="illustration"
                    className="founder-image-3"
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
                    From the beginning till the end, our Guruji has devoted his
                    entire life to serving mankind. Indeed, the disparate
                    community serves the true beginning of the quest for God.
                    Jai Guru Ji imparts knowledge in a spiritual way, has
                    published many spiritual books and CDs for the good cause of
                    society. Naturally, he is very simple and practical. He
                    emphasizes that an individual&#39;s disciplinary action will
                    make a disciplined society. Guruji’s every thought helps us
                    to - self-introspect, comprehend, and to correct ourselves
                    to become a truly mature human being.
                  </p>
                </div>

                <div
                  style={{ margin: "20px 0px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={journey} alt="illustration" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              <div id="book"></div>
              <div>
                <img
                  src={flower_3}
                  alt="illustration"
                  className="founder-image-4"
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
                  <h4 className="course2-title">Books & Speech</h4>
                  {/* <p className="course2-content">
                    Sri N. Jayakichenin (5 April 1977 – 28 November 2021), also
                    known as Jai Guruji born in a simple middle-class family to
                    Mrs. Punitha and Mr. Narayanasamy, in Pondicherry. His birth
                    took place on an auspicious full moon day, in Mahara Laknam.
                  </p> */}
                  <div>
                    <div style={{ paddingRight: "30px" }}>
                      <h5 className="founder-booksec-subhead">
                        List of Books in Tamil
                      </h5>
                      <ul
                        className="first-sem-list tick-icon"
                        style={{
                          paddingLeft: "0px",
                        }}
                      ><div className="row" >
                        {FounderListTamilBook?.map((book) => (
                          <li className="col-lg-6 col-md-6 col-12" style={{ fontSize: "16px" }} key={book?.id}>
                            {book.title}
                          </li>
                        ))}
                        </div>
                      </ul>
                    </div>
                    <div style={{ paddingRight: "30px", marginTop: "30px" }}>
                      <div>
                        <h5 className="founder-booksec-subhead">
                          List of Speech (Tamil)
                        </h5>
                        <ul
                          className="first-sem-list tick-icon"
                          style={{
                            paddingLeft: "0px",
                          }}
                        >
                          <div className="row" >
                          {FounderListOfTamilSpeach?.map((book) => (
                            <li className="col-lg-4 col-md-4 col-6" style={{ fontSize: "16px" }} key={book?.id}>
                              {book.title}
                            </li>
                          ))}</div>
                        </ul>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                      <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="founder-booksec-subhead">
                          List of Speech (English)
                        </h5>
                        <ul
                          className="first-sem-list tick-icon"
                          style={{
                            paddingLeft: "0px",
                          }}
                        >
                          {FounderListOfEnglishSpeach?.map((book) => (
                            <li style={{ fontSize: "16px" }} key={book?.id}>
                              {book.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="founder-booksec-subhead">
                          List of Music CD
                        </h5>
                        <ul
                          className="first-sem-list tick-icon"
                          style={{
                            paddingLeft: "0px",
                          }}
                        >
                          {FounderListOfMusicCD?.map((book) => (
                            <li style={{ fontSize: "16px" }} key={book?.id}>
                              {book.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "10px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={book} alt="illustration" />
                </div>

                {/* <p className="guru-read-2">
                  <Link to="/founders">Learn More</Link>
                </p> */}
              </div>

              {/* <div id="article"></div>
              <div>
                <img
                  src={flower_1}
                  alt="illustration"
                  className="founder-image-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
                />{" "}
                <div className="text-align"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                  <h4 className="course2-title">Article</h4>
                  <p className="course2-content">
                    Sri N. Jayakichenin (5 April 1977 – 28 November 2021), also
                    known as Jai Guruji born in a simple middle-class family to
                    Mrs. Punitha and Mr. Narayanasamy, in Pondicherry. His birth
                    took place on an auspicious full moon day, in Mahara Laknam.
                  </p>
                </div>
                <div style={{ margin: "20px 0px" }}  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                  <img src={article} alt="illustration" />
                </div>
                
              </div> */}
            </div>

            <div className="col-lg-3 empty-div">{/* empty div */}</div>
          </div>
        </div>
      </div>
      {/* End container */}
    </>
  );
};

export default FounderContent;
