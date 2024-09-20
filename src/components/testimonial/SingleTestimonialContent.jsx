import React from "react";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import { TestimonialData } from "../../utils/constant.utils";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";

const SingleTestimonialContent = ({ postData }) => {
  console.log("✌️postData --->", postData);
  // const TestimonialSingleData = TestimonialData.find(
  //   (element) => element.slug === slug
  // );

  // console.log("TestimonialSingleData --->", TestimonialSingleData);
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
                  __html: postData?.title.rendered,
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
              {postData._links?.["wp:featuredmedia"]?.map((mediaLink) => (
                <FeatureMediaSingle
                  key={mediaLink.href}
                  mediaLink={mediaLink.href}
                  className="js-img-single"
                />
              ))}
              {/* <img
                src={postData?.image}
                alt="jai-guruji"
                style={{ width: "100%" }}
              /> */}
            </div>
          </div>
          <div className=" testmonial-secondCol" style={{ marginTop: "30px" }}>
            <div className="testimonial-para">
              <div
                dangerouslySetInnerHTML={{
                  __html: postData?.content?.rendered,
                }}
              ></div>
              <p
                style={{ textAlign: "end", color: "#f58635" }}
                dangerouslySetInnerHTML={{
                  __html: postData?.title?.rendered,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button
            className="btn btn-primary "
            onClick={() => window.history.go(-1)}
            style={{ backgroundColor: "#f58635", borderColor: "#f58635" }}
          >
            back
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonialContent;
