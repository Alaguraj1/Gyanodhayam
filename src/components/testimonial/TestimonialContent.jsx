import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { sortContent, TestimonialData } from "../../utils/constant.utils";
import axios from "axios";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";

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
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"testimonials"}`
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("testimonials", posts);

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
        {posts.map((element) => {
          return (
            <div className="row pb-50 lg-pb-50" key={element.slug}>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <div className="testimonial-img-outer">
                  {element._links?.["wp:featuredmedia"]?.map((mediaLink) => (
                    <FeatureMediaSingle
                      key={mediaLink.href}
                      mediaLink={mediaLink.href}
                      className="js-img-single"
                    />
                  ))}
                  {/* <img
                    src={element.image}
                    alt="elementum"
                    className="width-resize"
                  /> */}
                </div>
              </div>
              <div
                className="col-lg-6 testimonial-secondCol"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <div className="testimonial-para width-resize text-align">
                  <p>{element.title?.rendered}</p>

                  <div
                    className="testimonial-content"
                    dangerouslySetInnerHTML={{
                      __html: truncateContent(element.content?.rendered, 130),
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
