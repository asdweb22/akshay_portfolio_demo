import React from "react";
import Banner from "./Banner";
import img2 from "../images/about.png";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
export default function Aboutus() {
  return (
    <div id="about">
      <Banner title="About Me" />
      <div className="container about">
        <div className="row py-3">
          <div className="col-md-6 text-center">
            <Fade left>
              <img
                src={img2}
                alt=""
                srcSet={img2}
                className="img-fluid mb-2 about-img"
              />
            </Fade>
          </div>

          <div className="col-md-6 my-3">
            <Fade right>
              <h2>Hello i am Akshay Dhongade,</h2>
              <h4>
                {" "}
                I like to work on different Roles: <br></br>
                <ul className="mt-3">
                  <li>Devops Engineer</li>
                  <li>AWS Cloud Engineer </li>
                  <li>Software Development</li>
                  <li>MERN Stack Development</li>
                  <li>UI/UX designing</li>
                  <li>Teaching-(Sharing Knowledge with others)</li>
                  <li>Freelancing : Graphics Designing</li>
                </ul>
              </h4>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
