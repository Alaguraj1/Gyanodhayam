import React, { useEffect, useState } from "react";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import gravida from "../../assets/images/testimonial/img-2.jpg";
import faucibus from "../../assets/images/testimonial/img-3.jpg";
import Pagination from "../../pages/inner-pages/blog/Pagination";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gallery_Data } from "../../utils/constant.utils";
import axios from "axios";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";

const GalleryContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
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
        // First, we need to get the category ID for the given slug
        const categoryResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${"gallery"}`
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

  console.log("posts", posts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="blog-section-four mt-100 mb-50  lg-mt-50 lg-mb-50">
        <div className="container">
          <div className="row  course2-content">
            {posts.map((element) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-lg-pb-50  pb-30 "
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <div>
                    {element._links?.["wp:featuredmedia"]?.map((mediaLink) => (
                      <FeatureMediaSingle
                        key={mediaLink.href}
                        mediaLink={mediaLink.href}
                        className="js-img-single"
                      />
                    ))}
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
            })}
          </div>
          {/* <Blog /> */}
          {/* <!-- /.blog-meta-wrapper --> */}

          {/* <div
            className="page-pagination-one"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Pagination />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
