import React from "react";
import jai_guruji1 from "../../assets/images/Courses/education/course-2nd-sem/banner.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import manam from "../../assets/images/Courses/education/course-2nd-sem/manam.jpg";
import Gunam from "../../assets/images/Courses/education/course-2nd-sem/gunam.jpg";
import guru from "../../assets/images/Courses/education/course-2nd-sem/guru-gyanam.jpg";
import Kailaagai from "../../assets/images/Courses/education/course-2nd-sem/kailagai.jpg";
import guruvasam from "../../assets/images/Courses/education/course-2nd-sem/guruvasam.jpg";
import ariyamugam from "../../assets/images/Courses/education/course-2nd-sem/ariyamugam.jpg";
import thavam from "../../assets/images/Courses/education/course-2nd-sem/thava-gyanam.jpg";
import karma from "../../assets/images/Courses/education/course-2nd-sem/karma-gyanam.jpg";
import Ozhukam from "../../assets/images/Courses/education/course-2nd-sem/ozhukam.jpg";
import viva from "../../assets/images/Courses/education/course-2nd-sem/viva-ora-exam.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Courses4 = () => {
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
            className="sem1-flower-image-1"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
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
            Second Semester (12 Weeks)
          </h3>
          <div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9">
                <h4
                  className="first-side-header"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Mana Guna Gyanam (Mind & Characteristics)
                </h4>
                <p
                  className="first-sem-exam"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <span style={{ fontWeight: "bold" }}>Written Exam :</span>
                  Manam + Gunam
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9 text-align order-lg-2">
                <div
                  style={{ paddingBottom: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Manam</h5>
                  <p className="second-sem-content">
                    Position of mind, the actions of the mind (nature of the
                    mind, five states of mind, types of thoughts), mind related
                    problems (disadvantages of the mind, the causes of an
                    unstable mind), controlling the mind (purity of mind,
                    Iyamam, Niyamam), conquering the mind (changing the nature
                    of the mind, purifying the characters, practicing the mind
                    to function properly).
                  </p>
                </div>
              </div>{" "}
              <div
                className="col-lg-3 sem1-images  order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={manam} alt="manam" className="width-100" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9 text-align order-lg-2">
                <div
                  style={{ paddingBottom: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="second-side-subHeader">Gunam</h5>
                  <ol className="second-sem-list">
                    <li>
                      Principles of a good person (Exile, donation, humbleness,
                      gaining wisdom, simplicity, nonviolence, truthfulness,
                      controlling anger, purity)
                    </li>
                    <li>
                      Attributes (love, compassion, generosity, patience,
                      acceptance, dutifulness, forgiveness, sacrifice, etc)
                    </li>
                    <li>
                      The seeds of success (faith, food and virtue, charity) and
                      the basic qualities that are necessary (truth, vow, mind,
                      how should all three be?)
                    </li>
                  </ol>
                </div>
              </div>

              <div
                className="col-lg-3 sem1-images  order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={Gunam} alt="Gunam" className="width-100" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div
                style={{ paddingBottom: "20px", textAlign: "center" }}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                className="col-lg-9"
              >
                <h5 className="second-side-subHeader">Practical Exam</h5>
                <ol className="second-sem-list">
                  <li>
                    To analyze ones inner self to understand about themself to
                    know their positive and negative and to attain mindfulness .
                  </li>
                  <li>
                    The assignment on Full Moon and No Moon, to test the
                    strength of their thoughts.
                  </li>
                </ol>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <h4
                    className="first-side-header"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Guru Gyanam
                  </h4>
                  <p
                    className="first-sem-exam"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                    Guru + Steps towards God + Kailaagai + Guru Vaasam +
                    Ariyamugam
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Guru</h5>

                    <p className="second-sem-content">
                      Who is Guru? Guru - the mirror? What is the Guru going to
                      be like? Guru &#39;s duty, How to select a Guru? The
                      condition of a real Guru, Guru- The messenger of God,
                      relationship between Guru and disciple, Guru who make us
                      to realize divinity, ways of approaching Guru, honouring
                      Guru, sincere devotion to Guru, simplicity of Guru,
                      lineage of Guru, education system of Guru, Betraying Guru,
                      offering to Guru, renunciation of Guru, Eminence of Guru,
                      Surrendering to Guru, Grace of Guru is the Grace of God
                    </p>
                  </div>
                  <img
                    src={flower_2}
                    alt="illustration"
                    className="sem1-flower-image-2"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  />
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Steps towards God</h5>
                    <p className="second-sem-content">
                      It is the compilation of 365 thoughts on Physique, Mind,
                      Society, Soul, Guru and God written by our Guruji. These
                      thoughts are meant to open ones mind and help one to
                      experience God in life.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={guru} alt="guru" className="width-100" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Kailaagai</h5>
                    <p className="second-sem-content">
                      This is a handy guide. It is the collection of our
                      Guruji’s 108 thoughts that are given in a simple one-line
                      sentence in laymen’s terms.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={Kailaagai} alt="guru" className="width-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Guru Vaasam</h5>
                    <p className="second-sem-content">
                      It is the collection of valuable lessons from our Guruji.
                      A collection of advice given by Guruji to approach life in
                      a natural way
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={guruvasam} alt="guru" className="width-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Ariyamugam</h5>
                    <p className="second-sem-content">
                      A collection of experiences of the disciples who travelled
                      in the spiritual path with our Guruji. A synopsis that may
                      help you to understand Guruji and his administration by
                      reading it.
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
                    src={ariyamugam}
                    alt="ariyamugam"
                    className="width-100"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3"></div>

                <div
                  className="col-lg-9 text-center"
                  style={{ paddingBottom: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="second-side-subHeader">Practical Exam</h5>
                  <p className="second-sem-content">
                    Discussion with Gurus, service activity and nature
                    conservation.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div className="col-lg-3"></div>

                <div
                  className="col-lg-9"
                  style={{ paddingBottom: "20px" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="second-side-header">
                    Thava Gyanam (Meditation)
                  </h4>
                  <p className="second-sem-exam">
                    <span style={{ fontWeight: "bold" }}>Written Exam:</span>{" "}
                    Thavam
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-9 text-align order-lg-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="second-side-subHeader">Thavam</h5>
                    <p className="second-sem-content">
                      Why meditation? the necessity and benefits of meditation,
                      types of meditation, procedures of meditation, and its
                      obstacles - how to overcome it? Knowing about God and
                      one’s self, Satges of soul, Samadhi, Mukthi, Motcham
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={thavam} alt="thavam" className="width-100" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9 text-center">
                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="second-side-subHeader">Practical Exam</h5>
                    <p className="second-sem-content">
                      Mounam (Silence) is a practice to control the body and
                      mind. Its types are Shanti Santham, Vazhi Santham, Vaara
                      Santham, Aayul Santham and Nir Santham. The procedures and
                      methods for practicing Mounam and Aathara thavam
                      procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div className="col-lg-3"></div>

                <div className="col-lg-9">
                  <h4
                    className="second-side-header"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    Karma Gyanam
                  </h4>
                  <p
                    className="second-sem-exam"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <span style={{ fontWeight: "bold" }}>Written Exam:</span>{" "}
                    Karma + Ozhukkam
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Karma</h5>
                    <p className="second-sem-content">
                      What is Karma? Its types, how is it stored? , thought and
                      action, action and its effect, Vinaiyai Theerka, analysis
                      of karma , vithi- mathi- kathi.
                    </p>
                  </div>
                  <img
                    src={flower_3}
                    alt="illustration"
                    className="sem1-flower-image-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  />
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={karma} alt="karma" className="width-100" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9 text-align order-lg-2">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Ozhukkam</h5>
                    <p className="second-sem-content">
                      A set of methods and ethics for a man to live physically
                      and mentally without harming himself and others in the
                      present and in the future.Physical discipline, food
                      discipline, dress code discipline, place of
                      dwelling-discipline, mental-virtue discipline,
                      thought-word-action discipline, meditation discipline,
                      soul discipline, morality and the method of obeying it,
                      indiscipline, duty, indecency, sins and reproaches, the
                      method of overcoming the curse, the method of eliminating
                      the moral problem, the noble standard, the moral canon and
                      its usefulness.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={Ozhukam} alt="Ozhukam" className="width-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9 text-center ">
                  <div
                    style={{ paddingBottom: "20px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                  >
                    <h5 className="second-side-subHeader">Practical Exam</h5>
                    <p className="second-sem-content">
                      Karma Practical Test 1 and Karma Practical Test 2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <div className="row">
                <div
                  className="col-lg-9 text-align order-lg-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h4 className="second-side-header">
                    Viva /Oral Exam (Practical Exam)
                  </h4>
                  <p className="second-sem-content">
                    Vyakkyanam + Aura Test + Flame Test
                  </p>

                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="second-side-subHeader">Viva</h5>
                    <p className="second-sem-content">
                      Questions will be asked from Gyanodhayam based subjects
                      and books
                    </p>
                  </div>

                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="second-side-subHeader">Aura Test</h5>
                  </div>

                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="second-side-subHeader">Flame Test</h5>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={viva} alt="viva" className="width-100" />
                </div>
              </div>
              <img
                src={flower_4}
                alt="illustration"
                className="sem1-flower-image-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              />
            </div>

            <div className="row">
              <div
                className="col-lg-8 text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h4 className="first-side-header">
                  Rules and Regulations for Students:
                </h4>
                <ol className="first-sem-list" style={{ paddingLeft: "20px" }}>
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
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses4;
