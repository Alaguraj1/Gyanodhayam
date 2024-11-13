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
  const [totalPages, setTotalPages] = useState(1); // Total pages based on available data

  const postsPerPage = 10; // Number of posts per page

  // Fetch posts when currentPage or postsPerPage changes
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
          `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${currentPage}`
        );

        // Set the posts data
        setPosts(postsResponse.data);

        // Set the total number of pages
        const totalPostsResponse = await axios.get(
          `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}`
        );
        const totalPosts = totalPostsResponse.headers["x-wp-total"];
        setTotalPages(Math.ceil(totalPosts / postsPerPage)); // Calculate total pages
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    } else {
      return content;
    }
  };

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

  // Rendering Page Numbers
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
      <div className="container md-mt-30 mt-50 ">
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : error ? (
          <div className="alert error-message" role="alert">
            {error}
          </div>
        ) : posts.length === 0 ? (
          <div className="alert error-message" role="alert">
            No posts found
          </div>
        ) : (
          posts.length > 0 &&
          posts.map((element) => {
            return (
              <div className="row pb-50 mt-pb-30" key={element.slug}>
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

                    <p style={{ marginBottom: 0 }}>
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
    </>
  );
};

export default TestimonialContent;
