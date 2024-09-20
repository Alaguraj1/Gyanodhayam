import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FeatureMediaSingle from "./FeatureMediaSingle";

const EventsFullDetailsMain = ({ postData }) => {
  console.log("✌️postData --->", postData);
  return (
    <>
      <div className="container mt-50 mb-100">
        <div className="text-center pb-20">
          <h3 className="mb-10 services-title">
            {postData.title.rendered}
          </h3>{" "}
          <span style={{ fontSize: "16px", color:"gray", }}>
            Date: {new Date(postData.date).toLocaleDateString()}
          </span>
        </div>

        <div className="pb-20">
          {postData._links?.["wp:featuredmedia"]?.map((mediaLink) => (
            <FeatureMediaSingle
              key={mediaLink.href}
              mediaLink={mediaLink.href}
              className="js-img-single"
            />
          ))}
        </div>
        <div className="course2-content" dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
        <div className="text-end">
          <button
            className="btn btn-primary "
            onClick={() => window.history.go(-1)}
            style={{ backgroundColor: "#f58635", borderColor: "#f58635" }}
          >
            back
          </button>
        </div>
      </div>
    </>
  );
};

export default EventsFullDetailsMain;
