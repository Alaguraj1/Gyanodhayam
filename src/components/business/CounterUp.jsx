import React, { useEffect } from "react";
import qoutes_up from "../../assets/images/quotes-up.svg";
import qoutes_down from "../../assets/images/quotes-down.svg";
import footerImage from "../../assets/images/footer-bg.jpg";
import testmonial from "../../assets/images/home/testimonials.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { sortContent, TestimonialData } from "../../utils/constant.utils";

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
              <img
                src={testmonial}
                alt="footer"
                className="home-testimonial-img"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 home-testimonial-content-outer"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="home-testimonial-contents">
              <p className="course2-content">{LatestOneTestimonial.title}</p>
              <div
                className="qoutes-content home-testimonial-content"
                dangerouslySetInnerHTML={{
                  __html: LatestOneTestimonial.sortContent,
                }}
              ></div>
              <p className="main-testimonial">
                <Link to="/testimonial" style={{ textDecoration: "underline" }}>
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
              <p className="qoutes-content">
                His support and advise will be continuously present in all the
                trust activites. he is an individual who understand the need os
                disciples and support the right time.
              </p>
              <p className="qoutes-author">-Sri N. jayakichenin</p>
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
