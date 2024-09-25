import React, { useEffect, useState } from "react";
import qoutes_up from "../../assets/images/quotes-up.svg";
import qoutes_down from "../../assets/images/quotes-down.svg";
import footerImage from "../../assets/images/footer-bg.jpg";
// import testmonial from "../../assets/images/home/testimonials.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {  TestimonialData } from "../../utils/constant.utils";
import axios from "axios";
import FeatureMediaSingle from "../SetvicesActivites/FeatureMediaSingle";

const CounterUp = () => {
  // const [post, setPost] = useState([])

  // useEffect(() => {
  //   axios.get("https://prade.in/files/wp-json/wp/v2/posts").then((res) => {
  //     setPost(res.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }, [])

  // console.log("post", post)

  // const formatDate = (dateString) => {
  //   const options = { month: "long", day: "numeric", year: "numeric" };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };

  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);

  AOS.init();

  const LatestOneTestimonial = TestimonialData[0];
  console.log("✌️LatestOneTestimonial --->", LatestOneTestimonial);

  const [quote, setQuote] = useState([]);

  useEffect(() => {
    GetQoute();
  }, []);

  const GetQoute = () => {
    axios
      .get("https://file.gyanodhayam.org/wp-json/wp/v2/pages/?slug=daily-quote")
      .then((res) => {
        console.log("res", res);
        setQuote(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [posts, setPosts] = useState({});
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

        setPosts(postsResponse.data[0]);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // const truncateContent = (content, maxLength) => {
  //   if (!content) return "";

  //   // Create a temporary DOM element
  //   const tempElement = document.createElement("div");
  //   tempElement.innerHTML = content;

  //   let truncated = "";
  //   let currentLength = 0;

  //   // Recursive function to traverse DOM nodes
  //   const traverseNodes = (node) => {
  //     if (currentLength >= maxLength) return;

  //     if (node.nodeType === Node.TEXT_NODE) {
  //       const remainingLength = maxLength - currentLength;
  //       const text = node.textContent.slice(0, remainingLength);
  //       truncated += text;
  //       currentLength += text.length;
  //     } else if (node.nodeType === Node.ELEMENT_NODE) {
  //       truncated += `<${node.tagName.toLowerCase()}>`;
  //       for (const childNode of node.childNodes) {
  //         traverseNodes(childNode);
  //       }
  //       truncated += `</${node.tagName.toLowerCase()}>`;
  //     }
  //   };

  //   // Start traversing from the root
  //   for (const childNode of tempElement.childNodes) {
  //     traverseNodes(childNode);
  //     if (currentLength >= maxLength) {
  //     }
  //   }

  //   // Add ellipsis if truncated
  //   if (currentLength >= maxLength) {
  //     truncated += "...";
  //   }

  //   return truncated;
  // };

  const renderContent = (content,maxLength) => {
    if (!content) return "";

    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    } else {
      return content;
    }
  }

  console.log("posts", posts);
  console.log("qoute", quote);

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h3 className="home-blog-title">Testimonials</h3>
          </div>
          <div
            className="col-lg-6 col-md-12 "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="home-testimonial-img-outer">
              {posts._links?.["wp:featuredmedia"]?.map((mediaLink) => (
                <FeatureMediaSingle
                  key={mediaLink.href}
                  mediaLink={mediaLink.href}
                  className="js-img-single"
                />
              ))}
              {/* <img
                src={testmonial}
                alt="footer"
                className="home-testimonial-img"
              /> */}
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 home-testimonial-content-outer"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="home-testimonial-contents">
              <p className="course2-content">{posts.title?.rendered}</p>
              <div
                className="qoutes-content home-testimonial-content"
                dangerouslySetInnerHTML={{
                  __html: renderContent(posts.content?.rendered,130),
                }}
              ></div>
              <p className="main-testimonial">
                <Link
                  to={`/testimonials/${posts.slug}`}
                  style={{ textDecoration: "underline" }}
                >
                  Read More
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-100 lg-mt-20"
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <div className="qoutes-outer">
            <div className="qoutes-up-outer">
              <img src={qoutes_up} alt="qoutes" className="qoutes-up" />
            </div>
            <div className="qoutes-content-outer">
              <div
                className="qoutes-content"
                dangerouslySetInnerHTML={{ __html: quote?.content?.rendered }}
              ></div>
              {/* <p className="qoutes-author">-Sri N. jayakichenin</p> */}
            </div>
            <div className="qoutes-down-outer">
              <img src={qoutes_down} alt="qoutes" className="qoutes-down" />
            </div>
          </div>
        </div>

        <div
          className="mt-100 lg-mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img src={footerImage} alt="black&white" />
        </div>
      </div>
    </>
  );
};

export default CounterUp;
