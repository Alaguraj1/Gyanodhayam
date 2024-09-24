import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOne";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";
import brandLogo from "../../assets/images/BannerLogo.png";

const Header = ({ className = "" }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-one ${
        navbar ? "fixed " : ""
      } ${className}`}
    >
      <div className="inner-content">
        <div>
          <div className="row">
            <div className="col-12">
              <div
                className="header-row1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="logo">
                  <Link to="/" className="gyanodhayam-logo">
                    <img src={brandLogo} alt="brand" width="10%" />
                    GYANODHAYAM
                  </Link>
                </div>
                <div className="header-row1-col2">
                  <p
                    className="find-location"
                    style={{ margin: "0px", fontSize: "14px" }}
                  >
                    <Link to="https://docs.google.com/forms/d/1oFh8-Fa5J48bpAL-Ebet3PqNtV85H4DzJxLCEXHzuUE/viewform?pli=1&pli=1&edit_requested=true" target="_blank">
                      Willing to Participate
                    </Link>{" "}
                    | <Link to="/our-centers">Find our centre</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                {/* End navbar-toggler */}

                <div className="collapse navbar-collapse" id="navbarNav">
                  <MegaMenuOne />
                  {/* End MegaMenuOne */}
                  <div className="mobile-content d-block d-lg-none">
                    <MobileMenuContent />
                    {/* <!-- /.mobile-content --> */}
                  </div>
                </div>
                {/* End .collapse */}
              </nav>
              {/* End .navbar */}
            </div>
          </div>

          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
