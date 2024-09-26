import React, { useEffect, useState } from "react";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";
import axios from "axios";
import Loading from "../loader/Loading";

const SingleTestimonialContent = ({ slug }) => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://file.gyanodhayam.org/wp-json/wp/v2/posts/?slug=" + slug
        );

        console.log("response", response);

        if (response.data.length > 0) {
          setPostData(response.data[0]);
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        console.error("Error fetching post data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  console.log("postData", postData);

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
      <div className="container mt-50 mb-50">
        {loading ? (
          <Loading loading={loading} />
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : !postData ? (
          <div className="alert alert-danger" role="alert">
            No data found
          </div>
        ) : (
          <div>
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
              <div
                className=" testmonial-secondCol"
                style={{ marginTop: "30px" }}
              >
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
        )}
      </div>
    </>
  );
};

export default SingleTestimonialContent;
