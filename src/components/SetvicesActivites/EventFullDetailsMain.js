import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureMediaSingle from "./FeatureMediaSingle";
import axios from "axios";
import Loading from "../loader/Loading";

const EventsFullDetailsMain = ({ slug }) => {
  console.log("✌️postData --->", slug);

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://file.gyanodhayam.org/wp-json/wp/v2/posts/?slug=" + slug
        );

        console.log("response", response);

        if (response.data.length > 0) {
          setPostData(response.data[0]);
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        console.error("Error fetching post data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) return <div><Loading loading={loading} /></div>;
  if (error) return <div>Error: {error}</div>;
  if (!postData) return <div>No data found for this post.</div>;
  return (
    <>
      <div className="container mt-50 mb-100">
        {/* <div
          className="text-end"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <span
            className="course2-content pb-0"
            style={{ fontSize: "20px", color: "gray" }}
          >
            Date: {new Date(postData.date).toLocaleDateString()}
          </span>
          <Link
            to="https://docs.google.com/forms/d/1oFh8-Fa5J48bpAL-Ebet3PqNtV85H4DzJxLCEXHzuUE/viewform?pli=1&pli=1&edit_requested=true"
            className="btn btn-primary"
            target="_blank"
            style={{
              backgroundColor: "rgb(245, 134, 53)",
              borderColor: "rgb(245, 134, 53)",
              marginLeft: "10px",
            }}
          >
            participate with us
          </Link>
        </div> */}
        <div className="pb-20 text-center">
          <h3 className="mb-10 course2-title">{postData.title.rendered}</h3>{" "}
          <span
            className="course2-content"
            style={{ fontSize: "20px", color: "gray" }}
          >
            Date: {new Date(postData.date).toLocaleDateString()}
          </span>
        </div>

        <div
          className="pb-20"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {postData._links?.["wp:featuredmedia"]?.map((mediaLink) => (
            <FeatureMediaSingle
              key={mediaLink.href}
              mediaLink={mediaLink.href}
              className="js-img-single"
            />
          ))}
        </div>
        <div
          className="course2-content"
          dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
        />
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
