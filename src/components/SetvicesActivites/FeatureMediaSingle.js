import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../assets/images/fav-icon/icon.png";

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
   <img src={Logo} alt="images" className="js-img-single" style={{ width: "100px", height: "100px" }} />
  );
};

export default FeatureMediaSingle;
