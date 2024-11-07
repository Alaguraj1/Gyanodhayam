import React from "react";
import jai_guruji1 from "../../assets/images/life-in-gyanodhayam/special-days/banner.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import Ekadesi from "../../assets/images/life-in-gyanodhayam/special-days/Ekadesi.jpg";
import Fruitsday from "../../assets/images/life-in-gyanodhayam/special-days/fruitsday.jpg";
import GuruPoornima from "../../assets/images/life-in-gyanodhayam/special-days/guru-poornim.jpg";
import BakthiYogam from "../../assets/images/life-in-gyanodhayam/special-days/bakthi-yogam.jpg";
import GyanaYogam from "../../assets/images/life-in-gyanodhayam/special-days/gyana-yogam.jpg";
import GurusDay from "../../assets/images/life-in-gyanodhayam/special-days/gurus-day.jpg";

const SpecialDaysContent = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);

  AOS.init();

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title">Special Days</h3>
              <p className="intro-content">
                In Gyanodhayam Educational Trust, we dedicate each Saturday for
                a special purpose to improve and equip our self against all
                possibilities.
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container relative mt-50 mb-50 lg-mt-50 lg-mb-50 md-mt-30 md-mb-30">
        <div>
          <img
            src={flower_1}
            alt="illustration"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="specialDays-flower-image-1"
          />
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="first-sem-top " style={{ textAlign: "center" }}>
              The Gyanodhayam Educational Trust Educational Trust syllabus is
              systematically divided into 10 subjects with their set of
              practical’s and is combined into a graduation course. The students
              who clear this exam are qualified to become a Gyanodhayam
              Educational Trust Educational Trust teacher.
            </p>
            <ul className="first-sem-list tick-icon">
              <li>
                <b>1 st Saturday – Electricity saving day</b> – Avoid using the
                electricity for the complete day
              </li>
              <li>
                <b> 2 nd Saturday – No phone day</b> – In today’s world people
                can live without food for days but without their mobile phone
              </li>
              <li>
                <b>3 rd Saturday – Fuel saving day</b> – creating awareness
                about fossil fuel consumption and their impact on the ecosystem
              </li>
              <li>
                <b>4 th Saturday – Silence day</b> – Silence is the god’s
                language and silence helps us to discover ourself.
              </li>
            </ul>
            <h5
              className="first-sem-exam "
              style={{ color: "#f58635", textAlign: "center" }}
            >
              <b>
                Not only Saturdays but we do celebrate the following special
                days
              </b>
            </h5>
          </div>
          <h3
            className="first-sem-header text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Special Days
          </h3>
          <div>
            <div className="row">
              <div
                className="col-lg-9 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <h4 className="first-side-header text-align">
                  Udal Gyanam (Body)
                </h4>
                <p className="first-sem-exam text-align">
                  <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                  Udal + Udal Pathugapu
                </p> */}
                <div className="text-align" style={{ paddingBottom: "20px" }}>
                  <h5 className="first-side-subHeader">Ekadesi:</h5>
                  <p className="first-sem-exam text-align">
                    Fasting is a phenomenon of purifying one’s mind body and
                    soul is not merely restricted to spirituality but finds its
                    relevance in the scientific application of the metabolism
                    and other biological operations. Fasting will be observed
                    every month on the day of Ekadasi. The day next to Ekadasi
                    will be observed as the day for fruit consumption.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 order-lg-1 sem1-images"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={Ekadesi} alt="Ekadesi" className="width-100" />
              </div>
            </div>

            <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <h5 className="first-side-subHeader">Fruits day:</h5>
                    <p className="first-sem-exam text-align">
                      The day next to Ekadasi fasting, we consume only fruits
                      till evening, post sunset we consume porridge to break the
                      fasting and end our day with a bowl of homemade
                      panjamritham. This helps us to energize our body post
                      ekadesi fasting.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={Fruitsday} alt="Fruitsday" className="width-100" />
                </div>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "20px" }}>
              <div
                className="col-lg-9 order-lg-2  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <h5 className="first-side-subHeader">
                    Guru Poornima &amp; Karma yogam day:
                  </h5>
                  <img
                    src={flower_2}
                    alt="illustration"
                    className="specialDays-flower-image-2"
                  />
                  <p className="first-sem-content text-align">
                    tamizh month of Panguni. On this fine day, we are
                    recommended to be actively engaged in service activity.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 sem1-images order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img
                  src={GuruPoornima}
                  alt="GuruPoornima"
                  className="width-100"
                />
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <h5 className="first-side-subHeader">Bakthi yogam day:</h5>

                    <p className="first-sem-content text-align">
                      On the day that falls on the Jupiter transit, Bhakthi Yoga
                      day is observed every year. Brahma Thavam will be
                      practiced on this day between 6:00 PM and 6:30 PM in the
                      evening. Between 6:30 PM and 7:30 PM, a brief speech on{" "}
                      <b>&quot;Bhakthi Yogam&quot;</b> will be recited. Special
                      pooja will be performed after 7:30 PM with devotional
                      songs on our Guru and God will be performed at the end
                      along with the Prasadh distribution.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={BakthiYogam} alt="nalan" className="width-100" />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <h5 className="first-side-subHeader">Gyana yogam day</h5>

                    <p className="first-sem-content">
                      Every year, on the 21st of March, Gyana Yoga Day is
                      celebrated in Gyanodhayam Educational Trust. Brahma Thavam
                      will be practiced between 6:00 and 6:30 PM in the evening.
                    </p>

                    <p className="first-sem-content">
                      A brief discourse will be given after 6:30 PM until 7:30
                      PM from one of our own published books called
                      <b> &quot;Thavam&quot;</b>. Either the Guru mantra will be
                      chanted 1008 times, or the Invocation song of our Guru and
                      the Guru mantra will be chanted 108 times each along with
                      the Prasadh distribution
                    </p>
                  </div>
                  <img
                    src={flower_3}
                    alt="illustration"
                    className="specialDays-flower-image-3"
                  />
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={GyanaYogam}
                    alt="gyanayogam"
                    className="width-100"
                  />
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div>
                    <h5 className="first-side-subHeader">
                      Guru’s day, Wisdom day, Buddha Poornima:
                    </h5>

                    <p className="first-sem-content">
                      This auspicious day is observed in the tamizh month of
                      Vaikasi in Gyanodhayam Educational Trust. Brahma Thavam
                      will be practiced between 6:00 and 6:30 PM in the evening.
                    </p>
                    <p className="first-sem-content">
                      A brief discourse will be given after 6:30 PM until 7:30
                      PM from one of our own published books called{" "}
                      <b> &quot;Kelvi Gyanam&quot;</b>.
                    </p>

                    <p className="first-sem-content">
                      After 7:30 PM either Guru mantra will be chanted for 1008
                      times, or the Invocation song of our Guru and the Guru
                      mantra will be chanted 108 times each along with the
                      Prasadh distribution.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={GurusDay} alt="GurusDay" className="width-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialDaysContent;
