import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { sortContent, TestimonialData } from "../../utils/constant.utils";

const TestimonialContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom: "20px" }}>
                Testimonial
              </h3>
              {/* <p
                className="testimonial-para"
                style={{
                  fontSize: "24px",
                  lineHeight: "28px",
                  color: "#f0ecec",
                }}
              >
                lorem ippusom is simply dummy text of the printing and
                typesetting
                <br />
                industry dummy industry dummy typesetting industry
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-100 mb-50 lg-mt-50 lg-mb-0">
        {TestimonialData.map((element) => {
          return (
            <div className="row pb-50 lg-pb-50" key={element.slug}>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <div className="testimonial-img-outer">
                  <img
                    src={element.image}
                    alt="elementum"
                    className="width-resize"
                  />
                </div>
              </div>
              <div
                className="col-lg-6 testimonial-secondCol"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <div className="testimonial-para width-resize text-align">
                  <p>{element.title}</p>

                  <div
                    className="testimonial-content"
                    dangerouslySetInnerHTML={{
                      __html: element.sortContent,
                    }}
                  ></div>

                  <p>
                    <Link
                      to={`/testimonials/${element.slug}`}
                      className="testimonial-read-more"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialContent;
