import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FeatureMediaSingle from "./FeatureMediaSingle";
import Loading from "../loader/Loading";

const EventDetailsMain = ({ slug, categorys }) => {
  console.log("✌️categorys --->", categorys);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(slug);

  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // First, we need to get the category ID for the given slug
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${slug}`
        );

        if (categoryResponse.data.length === 0) {
          throw new Error("Category not found");
        }

        const categoryId = categoryResponse.data[0].id;

        // Now we can fetch posts for this category
        const postsResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100`
        );

        setPosts(postsResponse.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  console.log("posts", posts);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getPreviousPost = () => {
    // Ensure categorys is not null or undefined before calling findIndex
    if (!categorys) return null;

    const currentIndex = categorys.findIndex((post) => post.slug === slug);
    if (currentIndex > 0) {
      return categorys[currentIndex - 1].slug;
    }
    return null; // No previous post if current post is the first
  };

  const getNextPost = () => {
    // Ensure categorys is not null or undefined before calling findIndex
    if (!categorys) return null;

    const currentIndex = categorys.findIndex((post) => post.slug === slug);
    if (currentIndex < categorys.length - 1) {
      return categorys[currentIndex + 1].slug;
    }
    return null; // No next post if current post is the last
  };

  return (
    <>
      <div className="blog-section-four mt-50 lg-mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-12 service-left-content">
              <div
                className="sticky"
                style={{ background: "rgb(255 250 247)", padding: "20px" }}
              >
                <h4 className="mb-10 course2-title">Events</h4>
                <ul
                  className="founder-nav-list"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ marginBottom: "0px" }}
                >
                  {categorys?.map((cat) => (
                    <li
                      onClick={() => handleTabClick(cat.slug)}
                      className={`course2-list ${
                        activeTab === cat.slug
                          ? "active-tab course2-list"
                          : "course2-list"
                      }`}
                      style={{ marginBottom: "8px" }}
                      key={cat.slug}
                    >
                      <a href={`/services-activites-events/${cat.slug}`}>
                        <i
                          className="bi bi-arrow-right"
                          style={{
                            paddingRight: "5px",
                            fontWeight: "500 !important",
                          }}
                        ></i>{" "}
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
              <div
                className="text-center pb-20"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4
                  className="nanneri-header-1 mb-0"
                  style={{ fontWeight: "bold" }}
                >
                  Year - {slug}
                </h4>
                <div>
                  <Link
                    to="/services-activites"
                    className="post-info gallery-read-more pt-0"
                    style={{ textDecoration: "underline", fontSize: "16px" }}
                  >
                    {" "}
                    Back to Services Activities
                  </Link>
                </div>
              </div>
              <div className="row course2-content">
                {isLoading ? (
                  <Loading loading={isLoading} />
                ) : error ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : posts.length === 0 ? (
                  <div className="alert alert-danger" role="alert">
                    No posts found
                  </div>
                ) : (
                  posts.map((element) => {
                    // console.log("📝element --->", element);
                    const featuredImageUrl =
                      element._embedded?.["wp:featuredmedia"]?.[0]?.href || "";
                    // console.log("featuredImageUrl", featuredImageUrl);
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-lg-pb-50 pb-30"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                        key={element.id} // Ensure to add a key prop for each mapped element
                        style={{ position: "relative" }} // Ensure the image is positioned relatively
                      >
                        <div>
                          {element._links?.["wp:featuredmedia"]?.map(
                            (mediaLink) => (
                              <Link
                                to={`/events/${element.slug}`}
                                style={{ backgroundColor: "black" }}
                              >
                                <FeatureMediaSingle
                                  key={mediaLink.href}
                                  mediaLink={mediaLink.href}
                                  opacity={0.4}
                                  className="js-img-single"
                                />
                              </Link>
                            )
                          )}
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            position: "absolute",
                            top: "40%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "10px",
                            borderRadius: "10px",
                            backgroundColor: "rgb(110 126 150 / 35%)",
                          }}
                        >
                          <Link
                            to={`/events/${element.slug}`}
                            className="title gallery-title pt-0"
                            style={{ color: "white" }}
                          >
                            {element.title.rendered}
                          </Link>
                          <div className="post-info gallery-read-more pt-0">
                            <Link
                              className="pt-0"
                              to={`/events/${element.slug}`}
                              style={{
                                textDecoration: "underline",
                                color: "white",
                              }}
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* Previous and Next buttons */}
                  {getPreviousPost() && (
                    <button
                      onClick={() => {
                        const prevSlug = getPreviousPost(); // Get the previous post slug
                        if (prevSlug) {
                          setActiveTab(prevSlug); // Update the active tab state
                          navigate(`/services-activites-events/${prevSlug}`); // Navigate to the previous post
                        }
                      }} // Navigate to the previous post
                      className="btn btn-secondary me-2"
                      style={{
                        backgroundColor: "#606060",
                        borderColor: "#606060",
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
                          navigate(`/services-activites-events/${nextSlug}`); // Navigate to the next post
                        }
                      }} // Navigate to the next post
                      className="btn btn-secondary ms-2"
                      style={{
                        backgroundColor: "#606060",
                        borderColor: "#606060",
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsMain;
