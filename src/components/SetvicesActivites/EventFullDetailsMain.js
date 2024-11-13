import React, { useEffect, useState } from "react";
import FeatureMediaSingle from "./FeatureMediaSingle";
import axios from "axios";
import Loading from "../loader/Loading";
import { useNavigate } from "react-router-dom";

const EventsFullDetailsMain = ({ slug, categories }) => {
  console.log("✌️categories --->", categories);
  console.log("✌️postData --->", slug);

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(slug);

  const [parentSlugName, setParentSlugName] = useState("");

  const navigate = useNavigate()

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
    if (postData && categories) {
      // Find the category in categories array that matches the category ID in postData.categories
      const parentCategory = postData.categories.find((catId) =>
        categories.some((category) => category.id === catId)
      );
      
      // If a matching category is found, set its name
      if (parentCategory) {
        const parentCategoryData = categories.find((category) => category.id === parentCategory);
        setParentSlugName(parentCategoryData?.slug); // Set the parentSlugName
      }
    }
  }, [postData, categories]);

  // Second useEffect: Fetch posts when parentSlugName is set
  useEffect(() => {
    if (parentSlugName) { // Only fetch posts if parentSlugName is defined
      const fetchPosts = async () => {
        try {
          // First, we need to get the category ID for the given slug
          const categoryResponse = await axios.get(
            `https://file.gyanodhayam.org/wp-json/wp/v2/categories?slug=${parentSlugName}`
          );

          if (categoryResponse.data.length === 0) {
            throw new Error("Category not found");
          }

          const categoryId = categoryResponse.data[0].id;

          // Now we can fetch posts for this category
          const postsResponse = await axios.get(
            `https://file.gyanodhayam.org/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100`
          );

          setPosts(postsResponse.data); // Set the posts state
        } catch (e) {
        } finally {
        }
      };

      fetchPosts();
    }
  }, [parentSlugName]); // Dependency on parentSlugName to trigger the fetch when it changes
  console.log("posts", posts);

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

  if (loading)
    return (
      <div>
        <Loading loading={loading} />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!postData) return <div>No data found for this post.</div>;

  console.log("postDtaa", postData);

  return (
    <>
      <div className="container mt-50 mb-50">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            {" "}
            <div
              className="sticky"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              style={{ background: "#f6d9c5", padding: "20px" }}
            >
              <h4 className="mb-10 course2-title">Events</h4>
              <ul className="founder-nav-list" style={{ marginBottom: "0px" }}>
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
                    <a href={`/events/${post.slug}`}>
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
          <div className="col-lg-9 col-md-8 col-sm-12">
            {/* <div
          className="text-end"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <span
            className="course2-content pb-0"
            style={{ fontSize: "20px", color: "gray" }}
          >
            Date: {new Date(postData.date).toLocaleDateString()}
          </span>
          <Link
            to="https://docs.google.com/forms/d/1oFh8-Fa5J48bpAL-Ebet3PqNtV85H4DzJxLCEXHzuUE/viewform?pli=1&pli=1&edit_requested=true"
            className="btn btn-primary"
            target="_blank"
            style={{
              backgroundColor: "rgb(245, 134, 53)",
              borderColor: "rgb(245, 134, 53)",
              marginLeft: "10px",
            }}
          >
            participate with us
          </Link>
        </div> */}

            <div >
              <h3 className="mb-10 course2-title">{postData.title.rendered}</h3>{" "}
              {/* <span
            className="course2-content"
            style={{ fontSize: "20px", color: "gray" }}
          >
            Date: {new Date(postData.date).toLocaleDateString()}
          </span> */}
            </div>

            <div
              className="pb-20"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {postData._links?.["wp:featuredmedia"]?.map((mediaLink) => (
                <FeatureMediaSingle
                  key={mediaLink.href}
                  mediaLink={mediaLink.href}
                  className="js-img-single"
                />
              ))}
            </div>
            <div
              className="course2-content"
              dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
            />


<div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* Previous and Next buttons */}
                  {getPreviousPost() && (
                    <button
                      onClick={() => {
                        const prevSlug = getPreviousPost(); // Get the previous post slug
                        if (prevSlug) {
                          setActiveTab(prevSlug); // Update the active tab state
                          navigate(`/events/${prevSlug}`); // Navigate to the previous post
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
                          navigate(`/events/${nextSlug}`); // Navigate to the next post
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
                style={{ backgroundColor: "#f58635", borderColor: "#f58635" }}
              >
                back
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsFullDetailsMain;
