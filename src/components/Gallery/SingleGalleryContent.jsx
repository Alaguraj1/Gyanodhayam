import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Loading from "../loader/Loading";
import { Link } from "react-router-dom";

const SingleGalleryContent = ({ slug, posts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [paginatedImages, setPaginatedImages] = useState([]); // Paginated images
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(slug);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const imagesPerPage = 50;

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

  useEffect(() => {
    AOS.init();
    if (postData && postData.content && postData.content.rendered) {
      const images = parseImageData(postData.content.rendered);
      setGalleryImages(images);
      setTotalPages(Math.ceil(images.length / imagesPerPage)); // Calculate total pages
    }
  }, [postData]);

  const parseImageData = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const figures = doc.querySelectorAll("figure.gallery-item");

    return Array.from(figures).map((figure) => {
      const link = figure.querySelector("a");
      const img = figure.querySelector("img");
      return {
        href: link.getAttribute("href"),
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt"),
        title: link.getAttribute("data-elementor-lightbox-title"),
      };
    });
  };

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handlePrevRequest = () => {
    setPhotoIndex(
      (photoIndex + paginatedImages.length - 1) % paginatedImages.length
    );
  };

  const handleNextRequest = () => {
    setPhotoIndex((photoIndex + 1) % paginatedImages.length);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // Paginate gallery images
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    setPaginatedImages(galleryImages.slice(startIndex, endIndex));
  }, [currentPage, galleryImages]);

  function pageNumbers(count, current) {
    const shownPages = 1; // Number of pages to show before and after the current page
    let result = [];

    // Show the first set of pages around the current page
    if (current > shownPages + 1) {
      result.push(1); // Always show the first page if we are far from it
    }

    // Add pages before the current page
    for (let i = current - shownPages; i < current; i++) {
      if (i > 0) result.push(i); // Add pages before the current page
    }

    result.push(current); // Always show the current page

    // Add the next set of pages after the current page
    for (let i = current + 1; i <= current + shownPages; i++) {
      if (i <= count) result.push(i); // Add pages after the current page
    }

    // Always show the last page if it's not already in the list
    if (current < count - shownPages) {
      result.push(count);
    }

    return result;
  }

  const renderPageNumbers = () => {
    // Generate the page numbers
    const pageNumber = pageNumbers(totalPages, currentPage);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="page-button"
          style={{
            backgroundColor: "black",
            borderColor: "black",
            fontSize: "14px",
            padding: "5px 12px",
            margin: "0 5px",
            color: "white",
            borderRadius: "5px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            lineHeight: "20px",
          }}
        >
          <i className="fa fa-arrow-left"></i>
        </button>

        {/* Page Numbers */}
        {pageNumber.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={`page-button ${currentPage === page ? "active" : ""}`}
            style={{
              backgroundColor: currentPage === page ? "#f58635" : "#ccc",
              borderColor: "#f58635",
              fontSize: "14px",
              lineHeight: "20px",
              margin: "0 5px",
              padding: "5px 12px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="page-button"
          style={{
            backgroundColor: "black",
            borderColor: "black",
            fontSize: "14px",
            padding: "5px 12px",
            margin: "0 5px",
            color: "white",
            borderRadius: "5px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            lineHeight: "20px",
          }}
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="blog-section-four mt-50 mb-50 lg-mt-50 lg-mb-50">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-3 col-md-4 col-sm-12 col-12">
              <div
                className="sticky"
                style={{ background: "#f6d9c5", padding: "20px" }}
              >
                <h4 className="mb-10 course2-title">Gallery</h4>
                <ul className="founder-nav-list">
                  {posts?.map((post) => (
                    <li
                      onClick={() => setActiveTab(post.slug)}
                      className={`course2-list ${
                        activeTab === post.slug ? "active-tab" : ""
                      }`}
                      key={post.slug}
                      style={{ marginBottom: "8px" }}
                    >
                      <a href={`/gallery/${post.slug}`}>
                        <i className="bi bi-arrow-right"></i>{" "}
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h4
                      className="course2-title text-align pb-0"
                      style={{ paddingRight: "10px" }}
                    >
                      <Link to="/gallery">Gallery</Link>
                    </h4>
                    <h4 className="course2-title text-align pb-0">&gt;</h4>
                    <h4
                      className="course2-title text-align pb-0"
                      style={{ paddingLeft: "10px" }}
                      dangerouslySetInnerHTML={{
                        __html: postData.title.rendered,
                      }}
                    ></h4>
                  </div>
                  <div className="image-gallery row">
                    {paginatedImages.map((image, index) => (
                      <div
                        key={index}
                        className="gallery-item col-lg-3 col-md-3 col-6 pt-30"
                      >
                        <img
                          src={image.src}
                          alt={image.alt || image.title}
                          title={image.title}
                          onClick={() => handleImageClick(index)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    ))}
                  </div>
                  {isOpen && (
                    <Lightbox
                      mainSrc={paginatedImages[photoIndex].href}
                      nextSrc={
                        paginatedImages[(photoIndex + 1) % paginatedImages.length]
                          .href
                      }
                      prevSrc={
                        paginatedImages[
                          (photoIndex + paginatedImages.length - 1) %
                            paginatedImages.length
                        ].href
                      }
                      onCloseRequest={() => setIsOpen(false)}
                      onMovePrevRequest={handlePrevRequest}
                      onMoveNextRequest={handleNextRequest}
                    />
                  )}

                  {/* Pagination Controls */}
                  <div
                    className="pagination-controls text-center mb-30"
                    // data-aos="fade-up"
                    // data-aos-duration="500"
                    // data-aos-delay="100" 
                    style={{paddingTop:"30px"}}
                  >
                    {/* Render Page Numbers with Prev and Next Buttons */}
                    {renderPageNumbers()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGalleryContent;
