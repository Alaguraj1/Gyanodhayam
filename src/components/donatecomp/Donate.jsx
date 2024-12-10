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
import VanavanVazhi from "../../assets/images/Courses/education/course-2nd-sem/vanavan-vazhi.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const Donate = () => {
    // useEffect(() => {
    //   AOS.init(); // Initialize AOS when the component mounts
    // }, []);

    AOS.init();

    return (
        <>

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
                    <div
                        className="first-sem-top text-align"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                    >
                        <p>
                        Every contribution, big or small, goes a long way in making a difference. By donating, you help us to serve the society better.
                        </p>
                    </div>

                    <div>
                       
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h3
                                    className="privacy-header text-align"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1200"
                                >
                             Bank Account Details:
                                </h3>

                                <div
                                    className="first-sem-exam"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1200"
                                >
                               <p>
                              <b> NAME:</b> GYANODHAYAM EDUCATIONAL TRUST
                               <br></br>
                               <b> AC NO:</b> 1631172000001449
                               <br></br>
                               <b> BANK : </b>KVB VENGAMEDU BRANCH -KARUR
                               <br></br>
                               <b> IFSC CODE :</b> KVBL0001631
                               </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Donate;
