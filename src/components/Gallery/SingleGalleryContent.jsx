import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FirstData, SecondData, ThirdData } from "../../utils/constant.utils";
import Pagination from "../../pages/inner-pages/blog/Pagination";
import img1 from "../../assets/images/photos/img-1.jpg";
import img2 from "../../assets/images/photos/img-2.jpg";
import img3 from "../../assets/images/photos/img-3.jpg";
import img4 from "../../assets/images/photos/img-4.jpg";
import img5 from "../../assets/images/photos/img-5.jpg";

const SingleGalleryContent = ({ postData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    AOS.init();
    if (postData && postData.content && postData.content.rendered) {
      const images = parseImageData(postData.content.rendered);
      setGalleryImages(images);
    }
  }, [postData]);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handlePrevRequest = () => {
    setPhotoIndex(
      (photoIndex + galleryImages.length - 1) % galleryImages.length
    );
  };

  const handleNextRequest = () => {
    setPhotoIndex((photoIndex + 1) % galleryImages.length);
  };

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

  return (
    <>
      <div className="blog-section-four mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div className="container">
          <h4
            className="course2-title text-align"
            style={{ paddingBottom: "20px", fontSize: "30px" }}
            dangerouslySetInnerHTML={{ __html: postData.title.rendered }}
          ></h4>
          <div className="image-gallery row">
            {galleryImages.map((image, index) => (
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
              mainSrc={galleryImages[photoIndex].href}
              nextSrc={
                galleryImages[(photoIndex + 1) % galleryImages.length].href
              }
              prevSrc={
                galleryImages[
                  (photoIndex + galleryImages.length - 1) % galleryImages.length
                ].href
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={handlePrevRequest}
              onMoveNextRequest={handleNextRequest}
            />
          )}

          <div className="text-end pt-50">
            <button
              className="btn btn-primary "
              onClick={() => window.history.go(-1)}
              style={{ backgroundColor: "#f58635", borderColor: "#f58635" }}
            >
              back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGalleryContent;
