import React from "react";

const EventDetailsBannerMain = ({ title }) => {
  return (
    <div>
      <div className="row intro-main">
        <div className="col-12 intro-header">
          <div className="testimonial">
            <h3 style={{ color: "white", marginBottom:"0px" }}>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsBannerMain;
