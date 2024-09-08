import React from "react";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <>
      <Jump>
        <nav className="navbar sticky-top navbar-expand-lg shadow mb-2 bg-body-tertiary">
          <div className="container">
            <Fade bottom>
              <a className="navbar-brand fw-bold" href="#">
                Portfolio
              </a>
            </Fade>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    className="nav-link"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="experience" className="nav-link">
                    Work Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="techstack" className="nav-link" aria-current="page">
                    Tech Stack
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="certifications" className="nav-link">
                    Certifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="education" className="nav-link">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="prjects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Jump>
    </>
  );
}
