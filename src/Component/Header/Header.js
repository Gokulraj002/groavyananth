import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../images/logo size.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "home", path: "/", exact: true },
  { label: "about us", path: "/about/" },
  {
    label: "project",
    isDropdown: true,
    items: [
      {
        label: "elegant orchards estate",
        path: "/elegantorchards/",
      },
      {
        label: "managed farmland",
        path: "/managed-farmland/",
      },
    ],
  },
  { label: "services", path: "/service/" },
  {
    label: "media",
    isDropdown: true,
    items: [
      { label: "news", path: "/news/" },
      { label: "blogs", path: "/blogs/" },
    ],
  },
  { label: "careers", path: "/careers/" },
  { label: "gallery", path: "/gallery/" },
  { label: "contact us", path: "/contact/" },
];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/elegantorchards/";
  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 position-fixed top-0 scrolled blur"
      : "navbar navbar-expand-lg ooo navbar-dark w-100 bg p-3 scrolled"
  );
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setNavClass(
          "navbar navbar-expand-lg clr navbar-dark w-100 position-fixed top-0 p-3 scrolled "
        );
      } else {
        setNavClass(
          isHomePage
            ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 position-fixed top-0 scrolled blur"
            : "navbar navbar-expand-lg ooo bg navbar-dark w-100 p-3 scrolled"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    setNavClass(
      isHomePage
        ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 position-fixed top-0 blur"
        : "navbar navbar-expand-lg ooo bg navbar-dark w-100 p-3"
    );

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, location.pathname]);

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsOffCanvasOpen(false);
    }
  };

  const handleToggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:6366829999";
  };

  return (
    <>
      <header className="position-relative">
        <nav className={navClass} id="nav">
          <div className="container mx-auto">
            <Link className="navbar-brand" to="/" onClick={handleNavClick}>
              <img
                src={logo}
                alt="Groavy-logo"
                width="120px"
                height={"auto"}
                loading="lazy"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggleOffCanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`offcanvas offcanvas-start text-center w-75 ${
                isOffCanvasOpen ? "show" : ""
              }`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  className="navbar-brand"
                  to="/"
                  onClick={() => {
                    handleNavClick();
                    handleToggleOffCanvas();
                  }}
                >
                  <img src={logo} alt="logo" width="130px" height={"auto"} />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleToggleOffCanvas}
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto" id="navbar">
                  {navItems.map((item, index) =>
                    item.isDropdown ? (
                      <li className="nav-item dropdown" key={index}>
                        <Link
                          className={`nav-link pe-2 ${
                            isHomePage ? "fw-bold" : ""
                          }`}
                          to="#"
                          id={`dropdown-${index}`}
                          role="button"
                        >
                          {item.label}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ fontSize: "0.6em" }}
                            className="ms-1 fs-6"
                          />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`dropdown-${index}`}
                        >
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                className={`dropdown-item ${
                                  isHomePage ? "fw-bold" : ""
                                } ${
                                  location.pathname === subItem.path
                                    ? "active"
                                    : ""
                                }`}
                                to={subItem.path}
                                onClick={() => {
                                  handleNavClick();
                                  handleToggleOffCanvas();
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li className="nav-item" key={index}>
                        <Link
                          className={`nav-link pe-1 ${
                            isHomePage ? "fw-bold" : ""
                          } ${
                            location.pathname === item.path ? "active" : ""
                          }`}
                          to={item.path}
                          onClick={() => {
                            handleNavClick();
                            handleToggleOffCanvas();
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <button
                  className="btn para-butn btn-sm text-white rounded-pill"
                  style={{ backgroundColor: "#F9AB24" }}
                  onClick={handlePhoneCall}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  +91 63668 29999
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  );
};

export default Header;
