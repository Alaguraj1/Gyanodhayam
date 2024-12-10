import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import Home from "../pages/home/Home";

import NotFound from "../pages/NotFound";
import ComingSoon from "../pages/ComingSoon";
import Course from "../pages/courses/Course";
import Nanneri from "../pages/courses/Nanneri";
import TrustCourse from "../pages/courses/TrustCourse";
import FirstSem from "../pages/courses/FirstSem";
import BlogV1 from "../pages/inner-pages/blog/layout/BlogV1";
import BlogV2 from "../pages/inner-pages/blog/layout/BlogV2";
import BlogV3 from "../pages/inner-pages/blog/layout/BlogV3";
import BlogV4 from "../pages/inner-pages/blog/layout/BlogV4";
import BlogDetailsV1 from "../pages/inner-pages/blog/blog-details/BlogDetailsV1";
import BlogDetailsV2 from "../pages/inner-pages/blog/blog-details/BlogDetailsV2";
import BlogDetailsV3 from "../pages/inner-pages/blog/blog-details/BlogDetailsV3";
import DynamicBlogDetails from "../pages/inner-pages/blog/blog-details/DynamicBlogDetails";
import Contact from "../pages/contact/Contact";
// import PortfolioV1 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV1";
// import PortfolioV2 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV2";
// import PortfolioV3 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV3";
// import PortfolioV4 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV4";
// import PortfolioV5 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV5";
// import PortfolioV6 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV6";
// import PortfolioV7 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV7";
// import PortfolioV8 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV8";
// import PortfolioV9 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV9";
// import PortfolioV10 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV10";
// import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";
// import PortfolioV12 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV12";
// import PortfolioV13 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV13";
// import PortfolioV14 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV14";
// import PortfolioV15 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV15";
// import PortfolioV16 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV16";
// import PortfolioV17 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV17";
// import PortfolioV18 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV18";
// import PortfolioV19 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV19";
// import PortfolioV20 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV20";
// import PortfolioV21 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV21";
// import PortfolioV22 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV22";

// import PortfolioDetailsV1 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV1";
// import PortfolioDetailsV2 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV2";
// import PortfolioDetailsV3 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV3";
// import PortfolioDetailsV4 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV4";
// import PortfolioDetailsV5 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV5";
// import PortfolioDetailsV6 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV6";
// import PortfolioV23 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV23";
// import PortfolioV24 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV24";
// import PortfolioV25 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV25";
// import PortfolioV26 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV26";
// import PortfolioV27 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV27";
// import PortfolioV28 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV28";
// import PortfolioV29 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV29";
// import PortfolioV30 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV30";
// import Introduction from "../pages/introduction/Introduction";
// import Founders from "../pages/founder/Founters";
import Founder from "../pages/founder/Founder";
import Testimonial from "../pages/testimonial/Testimonial";
import SecondSem from "../pages/courses/SecondSem";
import Media from "../pages/media/Media";
import SingleTestimonial from "../pages/testimonial/SingleTestimonial";
import Gallery from "../pages/gallery/Gallery";
import SingleGallery from "../pages/gallery/SingleGallery";
import LifeGyanodhayam from "../pages/life/LifeGyanodhayam";
import Teachers from "../pages/courses/Teachers";
import Guru from "../pages/courses/Guru";
import SpecialDays from "../pages/specialDays/SpecialDays";
import GroupActivities from "../pages/group-activities/GroupActivities";
import ServicesActivites from "../pages/services-activites/ServicesActivites";
import SearvicesActivitesEvents from "../pages/services-activites/SearvicesActivitesEvents";
import EventsDetails from "../pages/services-activites/EventsDetails";
import EventsFullDetails from "../pages/services-activites/EventsFullDetails";
import Centers from "../pages/centers/Centers";
import Annonunsment from "../pages/announsment/Annonunsment";
import AnnouncementDetails from "../pages/announsment/AnnounsmentDetails";
import Privacy from "../pages/privacy/Privacy";
import Donateus from "../pages/donate/Donateus";
import TermsConditions from "../pages/terms/TermsConditions";


const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* elements dropdown Header pages */}
        <Route path="/course" element={<Course />} />
        <Route path="/nanneri" element={<Nanneri />} />
        <Route path="/trust-course" element={<TrustCourse />} />
        <Route path="/first-sem" element={<FirstSem />} />
        <Route path="/second-sem" element={<SecondSem />} />
        <Route path="/teachers-practice-course" element={<Teachers />} />
        <Route path="/guru-practice-course" element={<Guru />} />
        <Route path="/special-days" element={<SpecialDays />} />
        <Route path="/group-activities" element={<GroupActivities />} />
        <Route path="/services-activites" element={<ServicesActivites />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/donate" element={<Donateus />} />
        <Route path="/terms-use" element={<TermsConditions />} />
        <Route
          path="/services-activites-events"
          element={<SearvicesActivitesEvents />}
        />
        <Route
          path="/services-activites-events/:slug"
          element={<EventsDetails />}
        />
        <Route
          path="/events/:slug"
          element={<EventsFullDetails />}
        />
        <Route path="/our-centers" element={<Centers />} />
        <Route path="/announcements-events" element={<Annonunsment />} />
        <Route path='/announcements-events/:slug' element={<AnnouncementDetails />} />

        {/* <Route path="/portfolio-v1" element={<PortfolioV1 />} />
        <Route path="/portfolio-v2" element={<PortfolioV2 />} />
        <Route path="/portfolio-v3" element={<PortfolioV3 />} />
        <Route path="/portfolio-v4" element={<PortfolioV4 />} />
        <Route path="/portfolio-v5" element={<PortfolioV5 />} />
        <Route path="/portfolio-v6" element={<PortfolioV6 />} />
        <Route path="/portfolio-v7" element={<PortfolioV7 />} />
        <Route path="/portfolio-v8" element={<PortfolioV8 />} />
        <Route path="/portfolio-v9" element={<PortfolioV9 />} />
        <Route path="/portfolio-v10" element={<PortfolioV10 />} />
        <Route path="/portfolio-v11" element={<PortfolioV11 />} />
        <Route path="/portfolio-v12" element={<PortfolioV12 />} />
        <Route path="/portfolio-v13" element={<PortfolioV13 />} />
        <Route path="/portfolio-v14" element={<PortfolioV14 />} />
        <Route path="/portfolio-v15" element={<PortfolioV15 />} />
        <Route path="/portfolio-v16" element={<PortfolioV16 />} />
        <Route path="/portfolio-v17" element={<PortfolioV17 />} />
        <Route path="/portfolio-v18" element={<PortfolioV18 />} />
        <Route path="/portfolio-v19" element={<PortfolioV19 />} />
        <Route path="/portfolio-v20" element={<PortfolioV20 />} />
        <Route path="/portfolio-v21" element={<PortfolioV21 />} />
        <Route path="/portfolio-v22" element={<PortfolioV22 />} />
        <Route path="/portfolio-v23" element={<PortfolioV23 />} />
        <Route path="/portfolio-v24" element={<PortfolioV24 />} />
        <Route path="/portfolio-v25" element={<PortfolioV25 />} />
        <Route path="/portfolio-v26" element={<PortfolioV26 />} />
        <Route path="/portfolio-v27" element={<PortfolioV27 />} />
        <Route path="/portfolio-v28" element={<PortfolioV28 />} />
        <Route path="/portfolio-v29" element={<PortfolioV29 />} />
        <Route path="/portfolio-v30" element={<PortfolioV30 />} /> */}

        {/* Single Portfolio Details  */}
        {/* <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1 />} /> */}
        {/* <Route path="/portfolio-details-v2" element={<PortfolioDetailsV2 />} />
        <Route path="/portfolio-details-v3" element={<PortfolioDetailsV3 />} />
        <Route path="/portfolio-details-v4" element={<PortfolioDetailsV4 />} />
        <Route path="/portfolio-details-v5" element={<PortfolioDetailsV5 />} />
        <Route path="/portfolio-details-v6" element={<PortfolioDetailsV6 />} /> */}

        <Route path="/founder" element={<Founder />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-details-v1" element={<BlogDetailsV1 />} />
        <Route path="/blog-details-v2" element={<BlogDetailsV2 />} />
        <Route path="/blog-details-v3" element={<BlogDetailsV3 />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDetails />} />

        <Route path="*" element={<NotFound />} />
        {/* <Route path="/introduction" element={<Introduction />} /> */}
        {/* <Route path="/founders" element={<Founders />} /> */}
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/testimonials/:slug" element={<SingleTestimonial />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<SingleGallery />} />
        <Route path="/life-in-gyanodhayam" element={<LifeGyanodhayam />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
