import React from "react";
import jai_guruji1 from "../../assets/images/life-in-gyanodhayam/group-activites/banner.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import FamilyDay from "../../assets/images/life-in-gyanodhayam/group-activites/family.jpg";
import Convocation from "../../assets/images/life-in-gyanodhayam/group-activites/convation.jpg";
import FoundersDay from "../../assets/images/life-in-gyanodhayam/group-activites/founders.jpg";
const GroupActivitiesContent = () => {
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
              <h3 className="intro-title">Group Activities</h3>
              <p className="intro-content">
                In Gyanodhayam Educational Trust, we dedicate each Saturday for a special purpose
                to improve and equip our self against all possibilities.
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container relative mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30">
        <div>
          <img
            src={flower_1}
            alt="illustration"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="sem1-flower-image-1"
          />

          <h3
            className="first-sem-header text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Group Activities
          </h3>
          <div>
            <div className="row">
              <div
                className="col-lg-9 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <h4 className="first-side-header text-align">
                  Udal Gyanam (Body)
                </h4>
                <p className="first-sem-exam text-align">
                  <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                  Udal + Udal Pathugapu
                </p> */}
                <div className="text-align" style={{ paddingBottom: "20px" }}>
                  <h5 className="first-side-subHeader">Family Day:</h5>
                  <p className="first-sem-exam text-align">
                    The members of Gyanodhayam Educational Trust along with their family members
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
                <img src={FamilyDay} alt="family" className="width-100" />
              </div>
            </div>

            <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <h5 className="first-side-subHeader">Convocation Day:</h5>
                    <p className="first-sem-exam text-align">
                      At the end of each Gyanodhayam Educational Trust batch, all the students who
                      have finished the classes are taken to trekking to give
                      them an experience which tests both their mental and
                      physical strengths.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={Convocation}
                    alt="convocation"
                    className="width-100"
                  />
                </div>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "20px" }}>
              <div
                className="col-lg-9 order-lg-2  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{display:"flex", alignItems:"center"}}
              >
                <div>
                  <h5 className="first-side-subHeader">Founders Day:</h5>
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
                <img src={FoundersDay} alt="founders" className="width-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupActivitiesContent;
