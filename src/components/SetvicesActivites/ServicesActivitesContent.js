import React, { useEffect, useState } from "react";
import jai_guruji1 from "../../assets/images/life-in-gyanodhayam/services-activity/banner.jpg";
// import udal from "../../assets/images/Courses/education/course-1st-sem/img-1.jpg";
// import udal_pathugapu from "../../assets/images/Courses/education/course-1st-sem/img-2.jpg";
// import unavu from "../../assets/images/Courses/education/course-1st-sem/img-3.jpg";
// import nalan from "../../assets/images/Courses/education/course-1st-sem/img-4.jpg";
// import exam from "../../assets/images/Courses/education/course-1st-sem/img-5.jpg";
// import unmai from "../../assets/images/Courses/education/course-1st-sem/img-7.jpg";
// import nalam_vazha from "../../assets/images/Courses/education/course-1st-sem/img-8.jpg";
// import udal_payirchi from "../../assets/images/Courses/education/course-1st-sem/img-9.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import ServicesActivities from "../../pages/services-activites/ServicesActivites";
import { Link } from "react-router-dom";
// import Year_2017 from "../../assets/pdf/2017.pdf";
// import Year_2018 from "../../assets/pdf/2018.pdf";
// import Year_2019 from "../../assets/pdf/2019.pdf";
import axios from "axios";

import ServiceActivity1 from "../../assets/images/life-in-gyanodhayam/services-activity/img-1.jpg";

const ServicesActivitiesContent = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);

  AOS.init();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchChildCategories();
  }, []);
  const fetchChildCategories = async () => {
    try {
      const parentSlug = "service-activity"; // Replace with your parent category slug

      // First, fetch the parent category to get its ID
      const parentRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${parentSlug}`
      );

      if (parentRes.data.length === 0) {
        throw new Error("Parent category not found");
      }

      const parentId = parentRes.data[0].id;

      // Now fetch the child categories
      const childrenRes = await axios.get(
        `https://file.gyanodhayam.org/wp-json/wp/v2/categories?parent=${parentId}`
      );

      setCategory(childrenRes.data); // This will be an array of child categories
    } catch (err) {
      console.error("Error fetching child categories: ", err);
    }
  };

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

      <div className="container relative mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30">
        <div>
          <img
            src={flower_1}
            alt="illustration"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="services-flower-image-1"
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

          <div style={{ marginTop: "50px" }}>
            <div className="row">
              <div
                className="col-lg-4 order-lg-2 sem1-images"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img
                  src={flower_2}
                  alt="illustration"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  className="services-flower-image-2"
                />
                <div>
                  <ul className="first-sem-list tick-icon">
                    <h3 className="services-title">Service Activities</h3>
                    {category &&
                      category.map((childCategory) => (
                        <div key={childCategory.id}>
                          <li className="year-services">
                            <Link
                              to={`/services-activites-events/${childCategory.slug}`}
                            >
                              {childCategory.name}
                            </Link>
                          </li>
                        </div>
                      ))}
                  </ul>
                </div>
                {/* <ul className="first-sem-list tick-icon">
                
                  <li className="year-services">
                    <a
                      href={Year_2019}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Year - 2019
                    </a>
                  </li>

                  <li className="year-services">
                    <a
                      href={Year_2018}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Year - 2018
                    </a>
                  </li>

                  <li className="year-services">
                    <a
                      href={Year_2017}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Year - 2017
                    </a>
                  </li>
                </ul> */}
              </div>
              <div
                className="col-lg-8 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                {" "}
                <img src={ServiceActivity1} alt="ServiceActivity1" />
                {/* <div className="row">
                  <div className="col-lg-4">
                    <img src={ServiceActivity1} alt="ServiceActivity1" />
                  </div>
                  <div className="col-lg-4">
                    <img src={ServiceActivity2} alt="ServiceActivity2" />
                  </div>
                  <div className="col-lg-4">
                    <img src={ServiceActivity3} alt="ServiceActivity3" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesActivitiesContent;
