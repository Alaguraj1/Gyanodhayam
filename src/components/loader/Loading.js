import React from "react";
import Logo from "../../assets/images/fav-icon/icon.png";

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <div
          className="loader"
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}
    </>
  );
};

export default Loading;
