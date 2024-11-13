import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  const postsPerPage = 12; // Define the number of posts per page

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

        // Now we can fetch posts for this category with pagination
        const postsResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${currentPage}`
        );

        // Get total number of posts to calculate total pages
        const totalPosts = parseInt(postsResponse.headers["x-wp-total"]);
        setTotalPages(Math.ceil(totalPosts / postsPerPage)); // Calculate total pages based on total posts and posts per page

        setPosts(postsResponse.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]); // Re-fetch posts when the currentPage changes

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => {
        const newPage = prev - 1;
        // Ensure the scroll happens after state update
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 0); // Set to 0 ms to run after the state has updated
        return newPage;
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => {
        const newPage = prev + 1;
        // Ensure the scroll happens after state update
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 0); // Set to 0 ms to run after the state has updated
        return newPage;
      });
    }
  };

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

    console.log("pageNumber", pageNumber);
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
      <div>
        <div className="row intro-main">
          <div className="col-12 intro-header">
            <div className="testimonial">
              <h3 style={{ color: "white", marginBottom: "0px" }}>
                Annonunsment & Events
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section-four mt-50  lg-mt-50 md-mt-30">
        <div className="container">
          <div className="row  course2-content pb-0">
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
                const featuredImageUrl =
                  element._embedded?.["wp:featuredmedia"]?.[0]?.href || "";
                return (
                  <div
                    className="col-lg-4 col-md-6 col-lg-pb-50  pb-30 "
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    key={element.slug}
                  >
                    <div>
                      {element._links?.["wp:featuredmedia"]?.map(
                        (mediaLink) => (
                          <Link
                            to={`/events/${element.slug}`}
                            key={mediaLink.href}
                          >
                            <FeatureMediaSingle
                              mediaLink={mediaLink.href}
                              className="js-img-single"
                            />
                          </Link>
                        )
                      )}
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

          {/* Pagination Controls */}
          <div
            className="pagination-controls text-center mb-30"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {/* Render Page Numbers with Prev and Next Buttons */}
            {renderPageNumbers()}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialContent;
