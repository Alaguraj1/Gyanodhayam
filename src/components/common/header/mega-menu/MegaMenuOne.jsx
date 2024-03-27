import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/BannerLogo.png";
import NavbarImage1 from "../../../../assets/images/menu-img-1.jpg";
import NavbarImage2 from "../../../../assets/images/menu-img-2.jpg";

const MegaMenuOne = () => {




  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo d-flex justify-content-center">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}

      <li className="nav-item  dropdown mega-dropdown">
        <NavLink exact  to="/" className="nav-link" active  activeClassName="active">
          Home
        </NavLink>
      </li>
      {/* End Home dropdown */}

      <li className="nav-item dropdown mega-dropdown-founder">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          {/* <Link to='/founder'  className="nav-link">Founder</Link> */}
          Founder
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              <div className="col-lg-4 menus-padding">
                <h4 className="full-width-navbar-header">
                  Entire Life to Serving Mankind
                </h4>
                <p
                  className="full-width-navbar-content"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  <Link to="/founder">Detail About Guru</Link>
                </p>
                <div className="dotted-line"></div>
              </div>
              <div className="col-lg-4  menus-padding">
                <h4 className="full-width-navbar-header">
                  Autobiography of a Jai Guruji
                </h4>
                <div className="founder-menu-autobiography">
                  <img
                    style={{ paddingRight: "20px" }}
                    src={NavbarImage1}
                    alt="image"
                  />
                  <p
                    className="full-width-navbar-content"
                    style={{ fontSize: "14px" }}
                  >
                    The book that changed the lives of millions! Available in
                    our 50 languages{" "}
                  </p>
                </div>
                <button className="full-width-navbar-button">
                  Order your copy today
                </button>
              </div>
              <div className="col-lg-4  menus-padding">
                <h4 className="full-width-navbar-header">
                  Yoga: a Graceful Journey Inward
                </h4>
                <img
                  src={NavbarImage2}
                  alt="image"
                  style={{ paddingBottom: "20px" }}
                />
                <p
                  className="full-width-navbar-content"
                  style={{ fontSize: "14px" }}
                >
                  Watch the video of jai Gurugi{" "}
                </p>
              </div>

              {/* {pagesMegaMenuData.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">{item.title}</h6>
                    <ul className="style-none mega-dropdown-list">
                      {item.menuList.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={list.routeLink}
                            className="dropdown-item"
                          >
                            <span>{list.name}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))} */}
            </div>
          </li>
        </ul>
      </li>
      {/* End about dropdown */}

      {/* course mega menu section start */}

      <li className="nav-item dropdown mega-dropdown-courses">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
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
                      Courses
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/nanneri"
                      className="dropdown-item font-style"
                    >
                      Nanneri
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/trust-course"
                      className="dropdown-item font-style"
                    >
                      Trust Course
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <ul className="style-none mega-dropdown-list">
                  <li>
                    <CustomLink
                      to="/first-sem"
                      className="dropdown-item font-style"
                    >
                      First Sem
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/second-sem"
                      className="dropdown-item font-style"
                    >
                      Second Sem
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/teachers-practice-course"
                      className="dropdown-item font-style"
                    >
                      Teachers Practice Course
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/guru-practice-course"
                      className="dropdown-item font-style"
                    >
                      Guru Practice Course
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <img
                  src={NavbarImage2}
                  alt="image"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
            </div>
          </li>
        </ul>
      </li>

      {/* End course mega menu */}



      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink exact to="/testimonial" className="nav-link"   activeClassName="active">
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
        >
          {/* <Link to='/founder'  className="nav-link">Founder</Link> */}
          Life in Gyanodhayam
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              <div className="col-lg-4 menus-padding">
                {/* <h4 className="full-width-navbar-header">
                <Link to='/life-in-gyanodhayam' >
                  Life In Gyanodhayam
                  </Link>
                </h4> */}
                <img
                  src={NavbarImage2}
                  alt="image"
                  style={{ paddingBottom: "20px" }}
                />
                {/* <div class="dotted-line"></div> */}
              </div>
              <div className="col-lg-4  menus-padding">
                <ul className="style-none mega-dropdown-list">
                  <li>
                    <CustomLink
                      to="/life-in-gyanodhayam"
                      className="dropdown-item font-style"
                    >
                      Life In Gyanodhayam
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/services-activites"
                      className="dropdown-item font-style"
                    >
                      Service Activities
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/special-days"
                      className="dropdown-item font-style"
                    >
                      Special Days
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                  <li>
                    <CustomLink
                      to="/group-activities"
                      className="dropdown-item font-style"
                    >
                      Group Activities
                    </CustomLink>
                  </li>
                  <div class="dotted-line"></div>
                </ul>
              </div>
              <div className="col-lg-4  menus-padding">
                <img
                  src={NavbarImage2}
                  alt="image"
                  style={{ paddingBottom: "20px" }}
                />
              </div>
            </div>
          </li>
        </ul>
      </li>

      {/* life in gyanodhatam mega menu end */}

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink exact to="/gallery" className="nav-link"   activeClassName="active">
          Gallery
        </NavLink>
      </li>

     

      <li className="nav-item dropdown mega-dropdown-md">
        <NavLink exact to="/media" className="nav-link"   activeClassName="active">
          Media & Press
        </NavLink>
      </li>


      
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
