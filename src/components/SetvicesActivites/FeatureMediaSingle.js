import React, { useState, useEffect } from "react";
import axios from "axios";

const FeatureMediaSingle = ({ mediaLink }) => {
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    axios
      .get(mediaLink)
      .then((res) => {
        setMediaData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mediaLink]);

  return mediaData ? (
    <img src={mediaData.source_url} alt="images" className="js-img-single" />
  ) : (
    <p>Loading image...</p>
  );
};

export default FeatureMediaSingle;
