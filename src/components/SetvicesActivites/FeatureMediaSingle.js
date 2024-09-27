import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../assets/images/fav-icon/icon.png";

const FeatureMediaSingle = ({ mediaLink, opacity}) => {
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
    <img src={mediaData.source_url} alt="images" className="js-img-single event-img-overlay" style={opacity ? {opacity: opacity} : null} />
  ) : (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', }}>
   <img src={Logo} alt="images" className="js-img-single" style={{ width: "100px", height: "100px" }} />
   </div>
  );
};

export default FeatureMediaSingle;
