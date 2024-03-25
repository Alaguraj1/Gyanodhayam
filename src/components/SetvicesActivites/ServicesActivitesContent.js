import React from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import udal from "../../assets/images/Courses/education/course-1st-sem/img-1.jpg";
import udal_pathugapu from "../../assets/images/Courses/education/course-1st-sem/img-2.jpg";
import unavu from "../../assets/images/Courses/education/course-1st-sem/img-3.jpg";
import nalan from "../../assets/images/Courses/education/course-1st-sem/img-4.jpg";
import exam from "../../assets/images/Courses/education/course-1st-sem/img-5.jpg";
import kelvi from "../../assets/images/Courses/education/course-1st-sem/img-6.jpg";
import unmai from "../../assets/images/Courses/education/course-1st-sem/img-7.jpg";
import nalam_vazha from "../../assets/images/Courses/education/course-1st-sem/img-8.jpg";
import udal_payirchi from "../../assets/images/Courses/education/course-1st-sem/img-9.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesActivities from "../../pages/services-activites/ServicesActivites";

const ServicesActivitiesContent = () => {
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
              <h3 className="intro-title">Service Activities</h3>
              <p className="intro-content">
                Service plays a major part in spiritual practice and it is an
                integral culture of Gyanodhayam.
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container relative mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div>
          <img
            src={flower_1}
            alt="illustration"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="sem1-flower-image-1"
          />
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="first-sem-top " style={{ textAlign: "center" }}>
              Service plays a major part in spiritual practice and it is an
              integral culture of Gyanodhayam. we derive lot of things from our
              society and it is our responsibility to give it back and thank
              them through our service activities.
            </p>
            <p className="first-sem-top " style={{ textAlign: "center" }}>
              Services can be of different nature ,like introducing healthy food
              habits to the society , Creating opportunities for common people
              to explore various things by conducting book stalls, Servicing the
              needy people..etc.
            </p>
            <ul className="first-sem-list tick-icon">
              <li>Old age home services</li>
              <li>Food festival</li>
              <li>Cooking demo</li>
              <li>Conducting book stalls</li>
              <li>Gardening service</li>
              <li>Temple cleaning services</li>
              <li>Creating health awareness through Asanas program</li>
              <li>Conducting corporate yoga classes</li>
              <li>
                Educational guidance , counselling ,financial help for those who
                require it
              </li>
            </ul>
          </div>

          <h3
            className="first-sem-header text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Service Activities
          </h3>
          {/* <div>
            <div className="row">
              <div
                className="col-lg-9 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
              
                <div className="text-align" style={{ paddingBottom: "20px" }}>
                  <h5 className="first-side-subHeader">Family Day</h5>
                  <p className="first-sem-exam text-align">
                    The members of gyanodhayam along with their family members
                    celebrate the day with fun filled activities and games along
                    with a spiritual touch.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 order-lg-1 sem1-images"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={kelvi} alt="kelvi" className="width-100" />
              </div>
            </div>

            <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Convocation Day</h5>
                  <p className="first-sem-exam text-align">
                    At the end of each gyanodhayam batch, all the students who
                    have finished the classes are taken to trekking to give them
                    an experience which tests both their mental and physical
                    strengths.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={kelvi} alt="kelvi" className="width-100" />
                </div>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "20px" }}>
              <div
                className="col-lg-9 order-lg-2  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <div>
                  <h5 className="first-side-subHeader">Founders Day</h5>
                  <img
                    src={flower_2}
                    alt="illustration"
                    className="sem1-flower-image-2"
                  />
                  <p className="first-sem-content text-align">
                    A right guide to reach the destination of the lives on the
                    earth is Guru. Our Guide...Our Guru was born on an
                    auspicious full moon day. The purpose of his avathaar is to
                    enlighten the mankind .He summarizes the nectar of Four
                    vedas in the language of a common man and elevates the soul.
                  </p>
                  <p className="first-sem-content text-align">
                    His birth Anniversary is celebrated as Founder&#39;s Day
                    every year.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 sem1-images order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={kelvi} alt="kelvi" className="width-100" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServicesActivitiesContent;
