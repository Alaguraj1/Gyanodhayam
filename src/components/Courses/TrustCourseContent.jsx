import React, { useRef, useState } from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import body from "../../assets/images/Courses/education/trust-certificate-course/img-1.jpg";
import yoga from "../../assets/images/Courses/education/trust-certificate-course/img-2.jpg";
import food from "../../assets/images/Courses/education/trust-certificate-course/img-3.jpg";
import mind from "../../assets/images/Courses/education/trust-certificate-course/img-4.jpg";
import character from "../../assets/images/Courses/education/trust-certificate-course/img-5.jpg";
import meditation from "../../assets/images/Courses/education/trust-certificate-course/img-6.jpg";
import relationship from "../../assets/images/Courses/education/trust-certificate-course/img-7.jpg";
import karma from "../../assets/images/Courses/education/trust-certificate-course/img-8.jpg";
import soul from "../../assets/images/Courses/education/trust-certificate-course/img-9.jpg";
import nobless from "../../assets/images/Courses/education/trust-certificate-course/img-10.jpg";
import arts from "../../assets/images/Courses/education/trust-certificate-course/img-10.jpg";
import services from "../../assets/images/Courses/education/trust-certificate-course/img-10.jpg";
import mounam from "../../assets/images/Courses/education/trust-certificate-course/img-10.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import flower_3 from "../../assets/images/flower-3.jpg";
import flower_4 from "../../assets/images/flower-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses2 = () => {
  const contentRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Body");

  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);
  AOS.init();

  const handleTabClick = (tabName) => {
    // Calculate the offset for the selected section
    setActiveTab(tabName);
  };
  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title">
                Gyanodhayam Educational Trust Certificate Course
              </h3>
              <p className="intro-content">
                “By Understanding the Ultimate Truth by realizing the Soul, We
                will attain the Ultimate Joy in Life”-
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container relative mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div>
          <div className="row mt-50 sticky-container">
            <div className="col-lg-3 course2-syllabus">
              <div className="sticky">
                <h4
                  className="course-syllabus-title"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Course Syllabus
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px",
                    fontSize: "14px",
                    width: "75%",
                    lineHeight: "20px",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <li
                    onClick={() => handleTabClick("Body")}
                    className={
                      activeTab === "Body"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Body" ? (
                      <i
                        className="body-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#body">Body</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Exercises/Yoga")}
                    className={
                      activeTab === "Exercises/Yoga"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Exercises/Yoga" ? (
                      <i
                        className="yoga-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#exercises-yoga">Exercises/Yoga</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Food Habits")}
                    className={
                      activeTab === "Food Habits"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Food Habits" ? (
                      <i
                        className="food-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#food"> Food Habits</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Mind")}
                    className={
                      activeTab === "Mind"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Mind" ? (
                      <i
                        className="mind-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#mind"> Mind</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Characters")}
                    className={
                      activeTab === "Characters"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Characters" ? (
                      <i
                        className="characters-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#characters">Characters</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Meditation")}
                    className={
                      activeTab === "Meditation"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Meditation" ? (
                      <i
                        className="meditation-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#meditation">Meditation</a>
                  </li>

                  <li
                    onClick={() => handleTabClick("Relationship")}
                    className={
                      activeTab === "Relationship"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Relationship" ? (
                      <i
                        className="relationship-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#relationship">Relationship</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Karma")}
                    className={
                      activeTab === "Karma"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Karma" ? (
                      <i
                        className="karma-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#karma">Karma</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Soul")}
                    className={
                      activeTab === "Soul"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Soul" ? (
                      <i
                        className="soul-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#soul">Soul</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Nobleness")}
                    className={
                      activeTab === "Nobleness"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Nobleness" ? (
                      <i
                        className="nobleness-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#nobleness">Nobleness</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Arts")}
                    className={
                      activeTab === "Arts"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Arts" ? (
                      <i
                        className="arts-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#arts">Arts</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Services")}
                    className={
                      activeTab === "Services"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Services" ? (
                      <i
                        className="services-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#services">Services</a>
                  </li>
                  <li
                    onClick={() => handleTabClick("Mounam")}
                    className={
                      activeTab === "Mounam"
                        ? "active-tab course2-list"
                        : "course2-list"
                    }
                    style={{ marginBottom: "8px" }}
                  >
                    {activeTab === "Mounam" ? (
                      <i
                        className="mounam-line"
                        style={{ backgroundColor: "#f58635" }}
                      ></i>
                    ) : null}
                    <a href="#mounam">Mounam(Silence)</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7" ref={contentRef}>
              <div id="body" className="course2-outer">
                <img
                  src={flower_1}
                  alt="illustration"
                  className="trut-flower-image-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Body
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  The body and its organs act as a medium for the soul to stay
                  and fulfill its need. It can only be fully utilized if we know
                  the body parts and its functioning. In this class, concepts
                  such as theory of evolution, the formation of the body, the
                  structure, and function of the body parts, key points to
                  protect our body, harmful effects of pollution, protection
                  from natural disasters and diseases and their remedies are
                  taught.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={body} alt="body" />
                </div>
              </div>

              <div id="exercises-yoga" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Exercise/Yoga
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  The body keeps our soul healthy and exercise is what keeps our
                  body healthy. It gives movement to the parts of our body and
                  facilitates proper functioning and treats various ailments in
                  the body. Generally, energy loss happens when we focus on the
                  work we do, thus the body parts that help in doing the work
                  will lose energy and wear out eventually. On the other hand,
                  when we concentrate on the body parts, energy is not wasted
                  but rather strengthened. In this class, practices such as
                  simple exercises, Surya namaskaram, asanas and their alter
                  asanas, pranayama techniques, and description and procedure of
                  mudras are taught.
                </p>
                <img
                  src={flower_2}
                  alt="illustration"
                  className="trut-flower-image-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={yoga} alt="yoga" />
                </div>
              </div>

              <div id="food" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Food
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Food is what helps our body to grow and protect itself. 90% of
                  the diseases that occur in our body are caused by unhealthy
                  food habits. Depending on the nature of the food, it also
                  affects our minds to a great extent. When we understand our
                  body and follow healthy food habits, medicine is never needed.
                  In this class, concepts such as healthy food habits, problems
                  caused by eating the wrong food, how to take food according to
                  the climatic conditions, essential nutrients needed by the
                  body, food habits to prevent diseases, a balanced diet to get
                  a healthy body and recipes for a proper healthy diet are
                  discussed and trained.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={food} alt="food" />
                </div>
              </div>

              <div id="mind" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Mind
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  For humans, the mind is a mystery that is still beyond our
                  understanding. Gyanodhayam advises us not to run outside to
                  control one&#39;s minds, but instead to sit and bloom within
                  oneself. Many of our lessons have been well-focused
                  on-introduction to the mind; what the mind is all about; the
                  place it resides; the nature of mind and how it works,
                  explanations and solutions to mind related problems, ways of
                  controlling and addressing our minds.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={mind} alt="mind" />
                </div>
              </div>

              <div id="characters" className="course2-outer">
                <img
                  src={flower_4}
                  alt="illustration"
                  className="trust-flower-image-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Character
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  An individual is judged by his thoughts, words, and action. To
                  understand a person well, understanding his character becomes
                  vital, as characters are the base of virtue. Many with good
                  virtues in society will do good deeds and earn a reputation.
                  In our class, we focus on dealing with character and its
                  concept such as introduction to the character, categories, and
                  levels of character, ways to develop good character, and to
                  succeed in life with moral excellence.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={character} alt="character" />
                </div>
              </div>

              <div id="meditation" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Meditation
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Mediation is necessary to control the mind and to become a
                  mature person, to understand oneself, and to understand the
                  relation between God and himself. We emphasize our meditation
                  classes based on – reason and necessity to meditate, different
                  ways to meditate, different types and methods of meditation,
                  disturbances that occur during meditation and how to overcome
                  them, to understand our own selves and godliness.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={meditation} alt="meditation" />
                </div>
              </div>

              <div id="relationship" className="course2-outer">
                <img
                  src={flower_3}
                  alt="illustration"
                  className="trust-flower-image-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Relationship
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Relationship occurs when two different individuals relate
                  themselves to each other with or without bloodborne. We build
                  a relationship with our family, relatives, friends, neighbors,
                  colleagues, wherever we have connections, in some way they
                  become our relatives. Our classes focus on building good
                  relationships, emphasize their needs, problems that occur in
                  relationships, and its solution, ways to build good
                  relationships. Gyanodhayam emphasizes the goodness of adapting
                  spirituality while being in the family.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={relationship} alt="relationship" />
                </div>
              </div>

              <div id="karma" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Karma
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  What we sow, so as we reap. As a result, we face both the pros
                  and cons. Elaboration on awareness in - how should thought and
                  action be? What will lead us to the right path? Things that do
                  not affect us? Methods and protocols for learning and dealing
                  with the consequences of our own actions will be taught. Apart
                  from this the principle and types of Karma, and imprints of
                  Karma, karmic influences in thoughts and deeds; action and
                  reaction; ways to overcome the consequences of Karma will be
                  taught in our classes.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={karma} alt="karma" />
                </div>
              </div>

              <div id="soul" className="course2-outer">
                <img
                  src={flower_1}
                  alt="illustration"
                  className="trust-flower-image-5"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Soul
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  In spirituality, self-realization is equivalent to the
                  realization of God. Knowing ourselves is knowing our true
                  self, i.e. the soul. To obtain a simple and better
                  understanding, our syllabus is designed to understand the
                  concept of the soul, where it comes from, how it is created,
                  soul and energy, soul after death. All these subjects will be
                  elaborately explained in our classes.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={soul} alt="soul" />
                </div>
              </div>

              <div id="nobleness" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Nobleness (Unnadham)
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  If one has no discipline, then even a lifetime of meditation
                  is a waste. So, discipline and high virtue form the foundation
                  for a meaningful life. To attain life’s highest state, it is
                  necessary to acquire a superior character. True nobleness
                  helps to achieve eminence in character and to reach a higher
                  state of consciousness. In our classes, moral principles to
                  lead a disciplined life, life’s ethics, principles of morality
                  (Iyamam &amp; Niyamam), adherence to truth, and goodness of
                  virtues will be elaborated in detail. Moreover, the
                  introduction and a detailed explanation of arts, purpose, and
                  the truth behind conducting rituals are also discussed in our
                  classes.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nobless} alt="nobless" />
                </div>
              </div>

              <div id="arts" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Arts
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Art is the manifestation of our actions and work that
                  captivates and leaves an impression on others. Creativity
                  finds its expression in various forms of art. While all arts
                  are actions, not all actions can be considered art. Art and
                  spirituality share a profound connection, intertwining with
                  body, mind, soul, and the divine. Our actions become
                  impressive to others when we ourselves are impressed by them.
                  To achieve this, we need to cultivate interest, effort,
                  practice, dedication, skill, confidence, and the grace of the
                  divine. Understanding various art forms in a spiritual course
                  is crucial as they significantly influence society,
                  necessitating comprehension and management.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nobless} alt="nobless" />
                </div>
              </div>

              <div id="services" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Services
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Service constitutes the latter part of meditation practice.
                  While meditation entails closing our eyes to realize the
                  divine, service allows us to see and serve the divine in all
                  living beings with our eyes open. The level of our meditation
                  practice is reflected in our daily behavior; thus, meditation
                  and actions should harmonize. When encountering others, we
                  should perceive them as reflections of ourselves, treating
                  them with the same respect, consideration, and attention as we
                  would afford ourselves. This approach facilitates spiritual
                  progress by aligning our actions with our meditation practice.
                  A true service is one rendered without any expectation,
                  Springs out from genuine personal involvement. Service knows
                  no bounds in terms of quantity, type, or who can participate,
                  as long as it is motivated by benefiting others. Those who
                  selflessly care for others are already cared for, by the
                  divine
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nobless} alt="nobless" />
                </div>
              </div>

              <div id="mounam" className="course2-outer">
                <h4
                  className="course2-title text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Mounam
                </h4>
                <p
                  className="course2-content text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Silence serves as the channel through which the divine within
                  us communicates. By quieting our expressions and actions,
                  silence enables us to listen to the voice of Divinity. When we
                  cease talking and externalizing ourselves, we also halt other
                  actions and limit external influences, creating space to tune
                  into the divine message. Speaking gives rise to actions and
                  thoughts linked to words, manifesting externally. Conversely,
                  embracing silence reduces the chatter of our thoughts,
                  allowing the mind to submerge into tranquility. Our actions
                  are shaped by our karma, with the mind urging us to
                  externalize thoughts through words and actions. Thus, silence
                  converges our thoughts, leading to a tranquil mind and
                  weakened expressions. The sensations perceived by the five
                  senses are typically articulated through words and actions.
                  However, the outcomes of our actions do not necessarily lead
                  to liberation. To attain liberation and experience profound
                  divine peace, disciplined practice in embracing silence is
                  indispensable in spiritual growth.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nobless} alt="nobless" />
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img
                  src={flower_2}
                  alt="illustration"
                  className="trust-flower-image-6"
                />

                <h3 className="course2-rules-header text-align">
                  Rules and regulations for students:
                </h3>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>
                    Duration of classes :
                  </span>{" "}
                  13 weeks
                </p>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>Age limit:</span> Minimum
                  age limit -14 years; No maximum age limit; Both male and
                  female are encouraged to join in this class
                </p>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>Class timings:</span>{" "}
                  Morning 9:00 AM till 6:00 PM
                </p>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>
                    Educational qualification:
                  </span>{" "}
                  Good to have reading and writing knowledge, but not essential
                </p>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>Nature of food:</span>{" "}
                  Vegetarian
                </p>

                <p className="course2-rules-content text-align">
                  <span style={{ fontWeight: "bold" }}>Physical fitness:</span>{" "}
                  Feasible body condition to do yoga Below 14 years of age and
                  pregnant ladies are not allowed to participate. Those who have
                  undergone surgery in past 6 months, who are unable to do
                  asanas, people who are diseased may approach us after
                  appropriate consultation. Students eligible to join should
                  adhere specifically to no smoking and drinking, no usage of
                  drugs, no sexual intercourse, avoiding non-veg. Students
                  should engage themselves in a selfless service activity for
                  one day and should practice one day silent mediation in our 13
                  weeks program.
                </p>

                <p className="course2-rules-content text-align">
                  To perform exercises book named “Udal Payirchi”,
                  thought-provoking book- “Vanavan Vazhi”, "uniform and Spadiga
                  mala for meditation (quartz crystal rosery) will be given to
                  students for regular practice. Apart from this, one year of
                  free Unmei Virumbi subscription will be offered. The
                  convocation will take place for 2 days in Parvatha hills, at
                  Thiruvannamalai. The convocation program includes written
                  examination, practical tests, trekking, discussion on
                  spirituality, and certificate distribution, etc which enables
                  the students to gain new spiritual experiences. These will
                  give a lifetime spiritual experiential feeling to the
                  participants.
                </p>

                <p className="course2-rules-content text-align">
                  The practice and classes mentioned above will be handled by
                  well experienced and qualified teachers. It is strongly
                  recommended not to practice or teach others on the above
                  mentioned without proper guidance.
                </p>
              </div>
            </div>
            <div className="col-lg-2 empty-div">{/* empty div */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses2;
