import React, { useEffect } from "react";
import elementum from "../../assets/images/testimonial/img-1.jpg";
import gravida from "../../assets/images/testimonial/img-2.jpg";
import faucibus from "../../assets/images/testimonial/img-3.jpg";
import Pagination from "../../pages/inner-pages/blog/Pagination";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gallery_Data } from "../../utils/constant.utils";

const GalleryContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const galleryContent = Gallery_Data;
  console.log("✌️galleryContent --->", galleryContent);

  return (
    <>
      <div className="blog-section-four mt-100 mb-50  lg-mt-50 lg-mb-50">
        <div className="container">
          <div className="row  course2-content">
            {Gallery_Data.map((element) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-lg-pb-50  pb-30 "
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <div>
                    <img src={element.image} alt="blog post" />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Link
                       to={`/gallery/${element.slug}`}
                      className="title gallery-title"
                    >
                      {element.title}
                    </Link>
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
