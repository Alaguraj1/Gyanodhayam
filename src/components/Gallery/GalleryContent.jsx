import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gallery_Data } from "../../utils/constant.utils";
import axios from "axios";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";
import Loading from "../loader/Loading";

const GalleryContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const galleryContent = Gallery_Data;
  console.log("✌️galleryContent --->", galleryContent);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"gallery"}`
        );

        if (categoryResponse.data.length === 0) {
          throw new Error("Category not found");
        }

        const categoryId = categoryResponse.data[0].id;

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

  console.log("posts", posts);

  return (
    <>
      <div className="blog-section-four mt-50 mb-50  lg-mt-50 lg-mb-50">
        <div className="container">
          <div className="row  course2-content pb-0">
            {/* {isLoading && <Loading loading={isLoading} />}
            {error && <div>Error: {error}</div>}
            {posts?.length === 0 && <div>No posts found.</div>} */}
            {isLoading ? (
              <Loading loading={isLoading} />
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : posts?.length === 0 ? (
              <div className="alert alert-danger" role="alert">
                No posts found
              </div>
            ) : posts?.length > 0 ? (
              posts.map((element) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 col-lg-pb-50  pb-30 "
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <div>
                      {element._links?.["wp:featuredmedia"]?.map(
                        (mediaLink) => (
                          <Link to={`/gallery/${element.slug}`}>
                            <FeatureMediaSingle
                              key={mediaLink.href}
                              mediaLink={mediaLink.href}
                              className="js-img-single"
                            />
                          </Link>
                        )
                      )}
                      {/* <img src={element.image} alt="blog post" /> */}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        to={`/gallery/${element.slug}`}
                        className="title gallery-title"
                        dangerouslySetInnerHTML={{
                          __html: element.title?.rendered,
                        }}
                      ></Link>
                      <div className="post-info gallery-read-more">
                        <Link
                          to={`/gallery/${element.slug}`}
                          style={{ textDecoration: "underline" }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
