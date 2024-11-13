import React, { useEffect, useState } from "react";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";
import axios from "axios";
import Loading from "../loader/Loading";
import { useNavigate } from "react-router-dom";

const SingleTestimonialContent = ({ slug, posts }) => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState(slug);
  const navigate = useNavigate(); // Use the useNavigate hook

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
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  const getPreviousPost = () => {
    const currentIndex = posts.findIndex((post) => post.slug === slug);
    if (currentIndex > 0) {
      return posts[currentIndex - 1].slug;
    }
    return null; // No previous post if current post is the first
  };
  
  const getNextPost = () => {
    const currentIndex = posts.findIndex((post) => post.slug === slug);
    if (currentIndex < posts.length - 1) {
      return posts[currentIndex + 1].slug;
    }
    return null; // No next post if current post is the last
  };
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom: "0px" }}>
                Testimonial
              </h3>
              <p
                className="testimonial-para "
                style={{
                  fontSize: "24px",
                  lineHeight: "28 px",
                  color: "#f0ecec", marginBottom:"0px"
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
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div
              className="sticky"
              style={{ background: "#f6d9c5", padding: "20px" }}
            >
              <h4 className="mb-10 course2-title">Announcement & Events</h4>
              <ul
                className="founder-nav-list"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{ marginBottom: "0px" }}
              >
                {posts?.map((post) => (
                  <li
                    onClick={() => handleTabClick(post.slug)}
                    className={`course2-list ${
                      activeTab === post.slug
                        ? "active-tab course2-list"
                        : "course2-list"
                    }`}
                    style={{ marginBottom: "8px" }}
                    key={post.slug}
                  >
                    <a href={`/testimonials/${post.slug}`}>
                      <i
                        className="bi bi-arrow-right"
                        style={{
                          paddingRight: "5px",
                          fontWeight: "500 !important",
                        }}
                      ></i>{" "}
                      {post.title.rendered}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12">
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
                      {postData._links?.["wp:featuredmedia"]?.map(
                        (mediaLink) => (
                          <FeatureMediaSingle
                            key={mediaLink.href}
                            mediaLink={mediaLink.href}
                            className="js-img-single"
                          />
                        )
                      )}
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

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* Previous and Next buttons */}
                  {getPreviousPost() && (
                    <button
                      onClick={() => {
                        const prevSlug = getPreviousPost(); // Get the previous post slug
                        if (prevSlug) {
                          setActiveTab(prevSlug); // Update the active tab state
                          navigate(`/testimonials/${prevSlug}`); // Navigate to the previous post
                        }
                      }} // Navigate to the previous post
                      className="btn btn-secondary me-2"
                      style={{
                        backgroundColor: "#f58635",
                        borderColor: "#f58635",
                        fontSize: "14px",
                      }}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Previous"
                    >
                      <i className="fa fa-arrow-left"></i>
                    </button>
                  )}
                  {getNextPost() && (
                    <button
                      onClick={() => {
                        const nextSlug = getNextPost(); // Get the next post slug
                        if (nextSlug) {
                          setActiveTab(nextSlug); // Update the active tab state
                          navigate(`/testimonials/${nextSlug}`); // Navigate to the next post
                        }
                      }} // Navigate to the next post
                      className="btn btn-secondary ms-2"
                      style={{
                        backgroundColor: "#f58635",
                        borderColor: "#f58635",
                        fontSize: "14px",
                      }}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Next"
                    >
                      <i className="fa fa-arrow-right" />
                    </button>
                  )}
                </div>
                {/* <div className="text-end">
                  <button
                    className="btn btn-primary "
                    onClick={() => window.history.go(-1)}
                    style={{
                      backgroundColor: "#f58635",
                      borderColor: "#f58635",
                    }}
                  >
                    back
                  </button>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTestimonialContent;
