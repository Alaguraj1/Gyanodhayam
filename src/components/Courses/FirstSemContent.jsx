import React from "react";
import jai_guruji1 from "../../assets/images/Courses/education/course-1st-sem/banner.jpg";
import udal from "../../assets/images/Courses/education/course-1st-sem/udal.jpg";
import udal_pathugapu from "../../assets/images/Courses/education/course-1st-sem/udal-pathugapu.jpg";
import unavu from "../../assets/images/Courses/education/course-1st-sem/unave-marunthu.jpg";
import nalan from "../../assets/images/Courses/education/course-1st-sem/nalan-murai.jpg";
import exam from "../../assets/images/Courses/education/course-1st-sem/practical-exam.jpg";
import kelvi from "../../assets/images/Courses/education/course-1st-sem/kelvi-gyanam.jpg";
import unmai from "../../assets/images/Courses/education/course-1st-sem/unmei-virumbhi.jpg";
import nalam_vazha from "../../assets/images/Courses/education/course-1st-sem/nalam-vazha.jpg";
import udal_payirchi from "../../assets/images/Courses/education/course-1st-sem/aasana-gyanam-udal-payirchi.jpg";
import muthiraigal from "../../assets/images/Courses/education/course-1st-sem/aasana-gyanam-muthiraigal.jpg";
import aasana from "../../assets/images/Courses/education/course-1st-sem/aasana-gyanam-practical-exam.jpg";

import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses3 = () => {
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
              <h3 className="intro-title">
                Gyanodhayam Educational Trust Motivation Class (Degree)
              </h3>
              <p className="intro-content">
                The Gyanodhayam Educational Trust syllabus is systematically
                divided into 10 subjects with their set of practical’s and is
                combined into a graduation course.
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
            className="sem1-flower-image-1"
          />
          <p
            className="first-sem-top text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            The Gyanodhayam Educational Trust syllabus is systematically divided
            into 10 subjects with their set of practical’s and is combined into
            a graduation course. The students who clear this exam are qualified
            to become a Gyanodhayam Educational Trust teacher.
          </p>

          <h3
            className="first-sem-header text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            First Semester (12 Weeks)
          </h3>
          <div>
            <div className="row">
              <div
                className="col-lg-9 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h4 className="first-side-header text-align">
                  Udal Gyanam (Body)
                </h4>
                <p className="first-sem-exam text-align">
                  <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                  Udal + Udal Pathugapu
                </p>
                <div className="text-align" style={{ paddingBottom: "20px" }}>
                  <h5 className="first-side-subHeader">Udal</h5>
                  <ol className="first-sem-list">
                    <li>The origin of five elements</li>
                    <li>Evolution of senses</li>
                    <li>
                      Philosophies of the body (body portals, psychic
                      philosophies, Thathukkal, Kosangal, Gunangal, Malangal,
                      Pinigal, Aatharangal, Mandalangal, Nadigal, Vayukkal,
                      avathaigal)
                    </li>
                    <li>
                      Functioning of body parts (It includes cells,
                      panjenthiriyangal, respiratory system, skeletal system,
                      nervous system, circulatory system, reproductive system,
                      etc.)
                    </li>
                  </ol>
                </div>
              </div>
              <div
                className="col-lg-3 order-lg-1 sem1-images"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={udal} alt="udal" className="width-100" />
              </div>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Udal Pathugapu</h5>
                  <ol className="first-sem-list">
                    <li>
                      Routines to protect our body (It includes the importance
                      of waking up earlier, bathing habits, sleeping habits and
                      food habits)
                    </li>
                    <li>
                      Self-Defence (Man, other human beings, society and nature)
                    </li>
                    <li>
                      How do we suffer from the effects of pollution? (Water
                      pollution, land pollution, air pollution, noise pollution
                      and radiation)
                    </li>
                    <li>
                      How to protect ourselves from natural disasters? (Sea
                      turbulence, heavy rainfall, earthquakes, cyclone and
                      snowfall, etc.).
                    </li>
                    <li>
                      First Aid (Animal bites, insect bites, snake bites, first
                      aid for fractures, first aid for burns, first aid for
                      electric shock victims, first aid for sports injuries and
                      respiratory problems, etc.).
                    </li>
                    <li>
                      Diseases and its remedy (Blood pressure, heart disease,
                      diabetes, nerve disorders, infertility, peptic ulcer,
                      etc.).
                    </li>
                  </ol>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={udal_pathugapu}
                    alt="udal-pathugappu"
                    className="width-100"
                  />
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="first-side-header">Unavu Gyanam (Food)</h4>
                  <p className="first-sem-exam">
                    <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                    Unave Marunthu + Nalan Murai Sei
                  </p>

                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="first-side-subHeader">Unave Marunthu</h5>
                    <img
                      src={flower_2}
                      alt="illustration"
                      className="sem1-flower-image-2"
                    />
                    <ol className="first-sem-list">
                      <li>
                        The proper way of consuming food, proper manner and
                        standard timing to eat food, the daily intake and
                        quantity of nutrients our body needs in order to remain
                        healthy.
                      </li>
                      <li>
                        Rules and regulations to be followed while cooking.
                      </li>
                      <li>Fasting.</li>
                      <li>Seasonal food.</li>
                      <li>Natural foods.</li>
                      <li>
                        Types of food items (vegetables, greens, tubers, fruits,
                        whole grains, cereals, legumes, oil products)
                      </li>
                      <li>Vitamins and mineral salts.</li>
                      <li>Foods to be avoided.</li>
                      <li>Diet plan for different diseases.</li>
                    </ol>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={unavu} alt="unavu" className="width-100" style={{height:"400px"}} />
                </div>
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <div className="row">
                  <div
                    className="col-lg-9 order-lg-2  text-align"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="first-side-subHeader">Nalan Murai Sei</h5>
                    <p className="first-sem-content">
                      Man differs from an animal in having the sixth
                      intellectual. Although he does many things rationally, one
                      of the most important and significant action he does is
                      cooking. It includes concepts like recipes, the
                      consistency of food, Taste, nutritious cooking, and recipe
                      description.
                    </p>
                  </div>
                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img src={nalan} alt="nalan" className="width-100" />
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
                  >
                    <h5 className="first-side-subHeader">Practical Exam</h5>
                    <p className="first-sem-content">
                      Cooking is about minimizing grievances and replenishing
                      benefits. To get rid of the flaws in the food we eat and
                      change it according to our body need, we need the
                      knowledge of cooking.
                    </p>
                    <p className="first-sem-content">
                      Students are required to prepare the type of food provided
                      to them during the exam.
                    </p>
                  </div>
                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img src={exam} alt="exam" className="width-100" />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div style={{ paddingBottom: "20px" }}>
                <div className="row">
                  <div
                    className="col-lg-9 order-lg-2  text-align"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h4 className="first-side-header">
                      Pothu Gyanam (General Knowledge)
                    </h4>
                    <h5 className="first-side-subHeader">
                      Kelvi Gyanam Part 1 and Kelvi Gyanam Part 2
                    </h5>
                    <p className="first-sem-content">
                      A collection of general knowledge, Science, rituals,
                      customs, arts, things encountered in normal life,
                      knowledge and interpretation of natural life.
                    </p>
                  </div>

                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img src={kelvi} alt="kelvi" className="width-100" />
                  </div>
                </div>
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <div className="row">
                  <div
                    className="col-lg-9  order-lg-2  text-align"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="first-side-subHeader">Unmei Virumbhi</h5>
                    <p className="first-sem-content">
                      Reading and discussing spiritual places, biographies of
                      spiritualists, world famous places, articles of world
                      celebrities, articles written by our Gurus and art forms
                      of the Modern Age (astrology, culinary arts,
                      fingerprinting, medicine, etc.).
                    </p>
                  </div>
                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img src={unmai} alt="unmai" className="width-100" />
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
                  >
                    <h5 className="first-side-subHeader">Nalam Vazha</h5>
                    <p className="first-sem-content">
                      This is a collection of simple information for us to know
                      and follow, to lead a healthy and happy life.
                    </p>
                  </div>
                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img
                      src={nalam_vazha}
                      alt="nalam_vazha"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div>
                <div className="row">
                  <div
                    className="col-lg-9 order-lg-2  text-align"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h4 className="first-side-header">Aasana Gyanam (Yoga)</h4>
                    <p className="first-sem-content">
                      <span style={{ fontWeight: "bold" }}>Written Exam:</span>{" "}
                      Udal Payirchi + Muthiraigal
                    </p>
                    <div style={{ paddingBottom: "20px" }}>
                      <h5 className="first-side-subHeader"> Udal Payirchi</h5>
                      <p className="first-sem-content">
                        Simple exercises, body relaxation techniques, surya
                        namaskaram, asanas and their alter asanas, simple and
                        advanced asanas, norms and restrictions of yoga,
                        pranayama and their types, cleansing techniques (neti,
                        dauti, nauli, trataka) and asanas to cure body problems.
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
                      src={udal_payirchi}
                      alt="udal_payirchi"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <img
                  src={flower_3}
                  alt="illustration"
                  className="sem1-flower-image-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <div className="row">
                  <div
                    className="col-lg-9 order-lg-2  text-align"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="first-side-subHeader">Muthiraigal</h5>
                    <p className="first-sem-content">
                      Mudras are used to increase our strengths, to fulfill
                      future plans, to achieve good qualities, to prevail peace
                      in the family, to improve relationships, to liberate from
                      old memories, to attain divine blessing, etc.Mudras are
                      used to increase our strengths, to fulfill future plans,
                      to achieve good qualities, to prevail peace in the family,
                      to improve relationships, to liberate from old memories,
                      to attain divine blessing, etc.
                    </p>
                    <ol className="first-sem-list">
                      <li>
                        Philosophy of fingers (The five elements residing in our
                        fingers, acupressure points of body organs on hands, the
                        relation between planets and fingers, relation between
                        mind and fingers)
                      </li>
                      <li>
                        Important Instructions to be followed while practicing
                        mudras.
                      </li>
                      <li>Benefits of Mudras.</li>
                    </ol>
                  </div>
                  <div
                    className="col-lg-3 sem1-images order-lg-1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <img
                      src={muthiraigal}
                      alt="muthiraigal"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="first-side-header">
                    Aasana Gyanam (Practical Exam)
                  </h4>
                  <p className="first-sem-content">
                    Students are required to properly demonstrate a mudra, an
                    asana and it’s alter asana that is given to them during the
                    examination. Then they have to write the procedure,
                    conditions and warning to be considered, physical benefits
                    and their spiritual benefit respectively and submit them.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={aasana} alt="aasana" className="width-100" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={flower_4}
              alt="illustration"
              className="sem1-flower-image-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            />
            <div className="row">
              <div
                className="col-lg-8  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h4 className="first-side-header">
                  Rules and Regulations for Students:
                </h4>
                <ol className="first-sem-list">
                  <li>Course Duration: 24 Weeks.</li>
                  <li>
                    It is divided into two semesters. The First and second
                    semester is for 12 weeks each.
                  </li>
                  <li>Classes will be held for 4 hours every Sunday.</li>
                  <li>
                    Qualification: Students who have completed the Gyanodhayam
                    Certificate Course are eligible.
                  </li>
                  <li>Experienced teachers and Gurus will take the classes.</li>
                  <li>
                    Students will also be trained simultaneously to take
                    classes.
                  </li>
                  <li>
                    Exams will be held after the completion of each semester.
                  </li>
                  <li>
                    Students who join this course should not smoke, drink, eat
                    non-vegetarian food or use drugs. The above course is taught
                    by well-experienced and qualified teachers. These should not
                    be practiced or instructed to others without proper advice.
                  </li>
                </ol>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses3;
