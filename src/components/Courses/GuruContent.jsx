import React from "react";
import jai_guruji1 from "../../assets/images/Courses/education/guru/banner.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import guru from "../../assets/images/Courses/education/guru/img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const GuruContent = () => {
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
                Guru Practice Course
              </h3>
              <p className="intro-content">
                The aim of Gyanodhayam Educational Trust is to serve society by
                assisting spiritualy interested souls to become Gurus. In this
                educational system
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30 relative">
        <img
          src={flower_1}
          alt="illustration"
          className="nanneri-flower-image-1"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        />
        <div className="row pb-40 lg-pb-10">
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h3 className="nanneri-header">Guru Practice Course</h3>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img src={guru} alt="teachers" />
        </div>
        <div
          className="pt-20 lg-pt-30"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="text-align  w-60-100"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <p className="course2-content">
              The aim of Gyanodhayam Educational Trust is to serve society by
              assisting spiritualy interested souls to become Gurus. In this
              educational system - Who is Guru? Guru - the mirror? What is the
              Guru going to be like? Guru &#39;s duty, How to select a Guru? The
              condition of a real Guru, Guru- The messenger of God, the
              relationship between Guru and disciple,
            </p>
            <p className="course2-content">
              disciple, Guru who makes us realize divinity, ways of approaching
              Guru, honoring Guru, sincere devotion to Guru, simplicity of Guru,
              the lineage of Guru, education system of Guru, Betraying Guru,
              offering to Guru, renunciation of Guru, Eminence of Guru,
              Surrendering to Guru, Grace of Guru is the Grace of God,
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
            className="nanneri-flower-image-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          />
        </div>
      </div>
    </>
  );
};

export default GuruContent;
