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

const getDataById = (slug) => {
  if (slug == "lorem-ipsum-1") return FirstData;
  if (slug == "lorem-ipsum-2") return SecondData;
  if (slug == "lorem-ipsum-3") return ThirdData;
  return [];
};

const SingleGalleryContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const { slug } = useParams();

  useEffect(() => {
    AOS.init();
    const data = getDataById(slug);
    setGalleryData(data);
    setCurrentPage(1); // Reset to page 1 when data changes
  }, [slug]);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  console.log("galleryData", galleryData);
  const handlePrevRequest = () => {
    setPhotoIndex((photoIndex + galleryData.length - 1) % galleryData.length);
  };

  const handleNextRequest = () => {
    setPhotoIndex((photoIndex + 1) % galleryData.length);
  };

  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = galleryData.slice(startIndex, startIndex + itemsPerPage);
  console.log("✌️currentItems --->", currentItems);

  return (
    <>
      <div className="blog-section-four mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div className="container">
          <h4
            className="course2-title text-align"
            style={{ paddingBottom: "40px", fontSize: "30px" }}
          >
            Lorem ipsum dolor sit amet
          </h4>
          <div className="row course2-content">
            {isOpen && galleryData.length > 0 && (
              <Lightbox
                mainSrc={galleryData[photoIndex].image}
                prevSrc={
                  galleryData[
                    (photoIndex + galleryData.length - 1) % galleryData.length
                  ].image
                }
                nextSrc={
                  galleryData[(photoIndex + 1) % galleryData.length].image
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={handlePrevRequest}
                onMoveNextRequest={handleNextRequest}
              />
            )}
            {currentItems.map((data, index) => (
              <div
                key={data.id}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{ paddingBottom: "20px" }}
              >
                <div onClick={() => handleImageClick(startIndex + index)}>
                  <img
                    src={data.image}
                    alt={`gallery ${data.id}`}
                    style={{ cursor: "pointer", width: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="page-pagination-one pt-30"
            style={{ display: "flex", justifyContent: "center" }}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGalleryContent;
