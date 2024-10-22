import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Updated import
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/BannerLogo.png";
import NavbarImage1 from "../../../../assets/images/menu-img-1.jpg";
import NavbarImage2 from "../../../../assets/images/menu-img-2.jpg";
import courseMegaImage from "../../../../assets/images/menu-img-course.jpg";
import lifeGyanodhayam1 from "../../../../assets/images/menu-img-lifeGyanodhayam1.jpg";
import lifeGyanodhayam2 from "../../../../assets/images/menu-img-lifeGyanodhayam2.jpg";

const MegaMenuOne = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo d-flex justify-content-center">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brand */}

      <li className="nav-item dropdown mega-dropdown">
        <NavLink
          exact
          to="/"
          className="nav-link"
          active
          activeClassName="active"
        >
          Home
        </NavLink>
      </li>
      {/* End Home dropdown */}

      <li className="nav-item dropdown mega-dropdown-founder">
        <NavLink
          exact
          to="/founder"
          className="nav-link"
          activeClassName="active"
        >
          Founder
        </NavLink>
      </li>
      {/* End about dropdown */}

      {/* course mega menu section start */}

      <li className="nav-item dropdown mega-dropdown-courses">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          onClick={() => navigate('/course')} 
        >
          Courses
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              <div className="col-lg-4 menus-padding">
                <ul className="style-none mega-dropdown-list">
                  <li>
                    <CustomLink
                      to="/course"
                      className="dropdown-item font-style"
                    >
                      Overview
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/nanneri"
                      className="dropdown-item font-style"
                    >
                      Nanneri
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/trust-course"
                      className="dropdown-item font-style"
                    >
                      Gyanodhayam Educational Trust Certificate Course
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <ul className="style-none mega-dropdown-list">
                  <li className="font-style" style={{lineHeight:"22px", fontSize:"16px"}}>
                    Gyanodhayam Educational Trust Motivation Class (Degree)
                    <ul
                      className="style-none mega-dropdown-list"
                      style={{ paddingLeft: "20px" }}
                    >
                      <li>
                        <CustomLink
                          to="/first-sem"
                          className="dropdown-item font-style"
                        >
                          - First Sem
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink
                          to="/second-sem"
                          className="dropdown-item font-style"
                        >
                          - Second Sem
                        </CustomLink>
                      </li>
                    </ul>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/teachers-practice-course"
                      className="dropdown-item font-style"
                    >
                      Teachers Practice Course
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/guru-practice-course"
                      className="dropdown-item font-style"
                    >
                      Guru Practice Course
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <img
                  src={courseMegaImage}
                  alt="Guru Practice Course"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
            </div>
          </li>
        </ul>
      </li>

      {/* End course mega menu */}

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink
          exact
          to="/our-centers"
          className="nav-link"
          activeClassName="active"
        >
          Centers
        </NavLink>
      </li>

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink
          exact
          to="/testimonial"
          className="nav-link"
          activeClassName="active"
        >
          Testimonial
        </NavLink>
      </li>

      {/* life in gyanodhayam mega menu start */}

      <li className="nav-item dropdown mega-dropdown-life">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          onClick={() => navigate('/life-in-gyanodhayam')} // Use navigate here
        >
          Life in Gyanodhayam
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              <div className="col-lg-4 menus-padding">
                <img
                  src={lifeGyanodhayam1}
                  alt="Life In Gyanodhayam"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
              <div className="col-lg-4  menus-padding">
                <ul className="style-none mega-dropdown-list">
                  {/* <li>
                    <CustomLink
                      to="/life-in-gyanodhayam"
                      className="dropdown-item font-style"
                    >
                      Overview
                    </CustomLink>
                  </li> 
                  <div className="dotted-line"></div>*/}
                  <li>
                    <CustomLink
                      to="/services-activites"
                      className="dropdown-item font-style"
                    >
                      Service Activities
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/special-days"
                      className="dropdown-item font-style"
                    >
                      Special Days
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/group-activities"
                      className="dropdown-item font-style"
                    >
                      Group Activities
                    </CustomLink>
                  </li>
                  <div className="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <img
                  src={lifeGyanodhayam2}
                  alt="Life In Gyanodhayam"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
            </div>
          </li>
        </ul>
      </li>

      {/* life in gyanodhayam mega menu end */}

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink
          exact
          to="/gallery"
          className="nav-link"
          activeClassName="active"
        >
          Gallery
        </NavLink>
      </li>

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink
          exact
          to="/media"
          className="nav-link"
          activeClassName="active"
        >
          Media & Press
        </NavLink>
      </li>
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
