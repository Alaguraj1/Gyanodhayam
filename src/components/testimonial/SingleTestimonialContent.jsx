import React from "react";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import { TestimonialData } from "../../utils/constant.utils";

const SingleTestimonialContent = ({ slug }) => {
  const TestimonialSingleData = TestimonialData.find(
    (element) => element.slug === slug
  );

  console.log("TestimonialSingleData --->", TestimonialSingleData);
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom: "20px" }}>
                Testimonial
              </h3>
              <p
                className="testimonial-para "
                style={{
                  fontSize: "24px",
                  lineHeight: "28 px",
                  color: "#f0ecec",
                }}
                dangerouslySetInnerHTML={{
                  __html: TestimonialSingleData?.author,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mb-100">
        <div>
          <div>
            <div className="testimonial-img-outer">
              <img
                src={TestimonialSingleData?.image}
                alt="jai-guruji"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className=" testmonial-secondCol" style={{ marginTop: "30px" }}>
            <div className="testimonial-para">
              <div
                dangerouslySetInnerHTML={{
                  __html: TestimonialSingleData?.content,
                }}
              ></div>
              <p
                style={{ textAlign: "end", color: "#f58635" }}
                dangerouslySetInnerHTML={{
                  __html: TestimonialSingleData?.author,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonialContent;
