import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { sortContent, TestimonialData } from "../../utils/constant.utils";
import axios from "axios";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";
import Loading from "../loader/Loading";

const TestimonialContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // First, we need to get the category ID for the given slug
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"announcements-events"}`
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
  }, []);


  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", paddingBottom: "20px" }}>
                Annonunsment & Events
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
      <div className="blog-section-four mt-100 mb-50  lg-mt-50 lg-mb-50">
        <div className="container">
          <div className="row  course2-content">
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
                console.log("✌️element --->", element);
                const featuredImageUrl =
                  element._embedded?.["wp:featuredmedia"]?.[0]?.href || "";
                console.log("featuredImageUrl", featuredImageUrl);
                return (
                  <div
                    className="col-lg-4 col-md-6 col-lg-pb-50  pb-30 "
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <div>
                      {element._links?.["wp:featuredmedia"]?.map(
                        (mediaLink) => (
                          <FeatureMediaSingle
                            key={mediaLink.href}
                            mediaLink={mediaLink.href}
                            className="js-img-single"
                          />
                        )
                      )}
                      {/* <img
                      src={element._links?.["wp:attachment"][0]?.href}
                      alt="blog post"
                    /> */}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        to={`/events/${element.slug}`}
                        className="title gallery-title"
                      >
                        {element.title.rendered}
                      </Link>
                      <div className="post-info gallery-read-more">
                        <Link
                          to={`/announcements-events/${element.slug}`}
                          style={{ textDecoration: "underline" }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialContent;
