import React from "react";
import jai_guruji1 from "../../assets/images/Courses/education/teacher/banner.jpg";
// import nanneri from "../../assets/images/Courses/education/img-nanneri/img-1.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import teachers from "../../assets/images/Courses/education/teacher/teachers-practice-course.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


const TeachersContent = () => {

    // useEffect(() => {
    //     AOS.init(); // Initialize AOS when the component mounts
    // })

    AOS.init();

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title" style={{ paddingRight: "50px" }}>
                Teachers Practice Course
              </h3>
              <p className="intro-content">
                There are certain rules to be followed to continue as a
                Gyanodhayam Educational Trust teacher. A teacher is required to
                attend a minimum of six weeks classes per Gyanodhayam
                Educational Trust batch
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30 relative ">
        <img
          src={flower_1}
          alt="illustration"
          className="nanneri-flower-image-1" data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        />
        <div className="row pb-40 lg-pb-10">
          <div className="col-12" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200">
            <h3 className="nanneri-header">Teachers Practice Course</h3>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200">
          <img src={teachers} alt="teachers" />
        </div>
        <div
          className="pt-20 lg-pt-30"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="text-align w-60-100 " data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200">
            <p className="course2-content">
              There are certain rules to be followed to continue as a
              Gyanodhayam Educational Trust teacher. A teacher is required to
              attend a minimum of six weeks classes per Gyanodhayam Educational
              Trust batch (Gyanodhayam Educational Trust certificate course).
              The teachers&#39; meeting will be held twice a year with a six
              months gap.
            </p>
            <p className="course2-content">
              Guruji and the Gurus will take classes during this session.
              Eligibility evaluation of teachers will be done once in a year.
              All of Gyanodhayam Educational Trust administrating members will
              be elected based on voting by teachers.
            </p>
            <p className="course2-content pb-0">
              Becoming Guru, rituals, sacred writings, customs, vedas, puranas,
              arts subtleties, bakthi yoga, ashtanga yoga, karma yoga, gyana
              yoga and raja yoga, all 108 kinds of yoga will be taught in
              harmony. Those who take up these practices and clear those levels
              will be eligible to become a Guru.
            </p>
          </div>

          <img
            src={flower_2}
            alt="illustration"
            className="nanneri-flower-image-2" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
        </div>
      </div>
    </>
  );
};

export default TeachersContent;
