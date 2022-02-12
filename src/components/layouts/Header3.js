import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../elements/Logo";

function Header3({ light, logoSource, bootstrapNav }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* <Logo logoSource={logoSource} bootstrapNav={bootstrapNav} /> */}
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/"
                  // spy={true}
                  // smooth={true}
                  // duration={500}
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <LinkScroll
                  activeClass="active"
                  className="nav-link"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </LinkScroll>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-works"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Works
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/essays"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Essays
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/essays"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Notebook
                </Link>
              </li>
              <li className="nav-item">
                <a
                  activeClass="active"
                  className="nav-link"
                  href="https://atharvawankhede.substack.com/"
                >
                  NewsLetter
                </a>
              </li>
              {/* <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header3;
