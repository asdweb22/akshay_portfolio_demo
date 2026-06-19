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
              <h2>About Me</h2>

              <p>
                I am a Full Stack Developer and AWS Cloud Engineer with
                experience in building scalable web applications, cloud
                infrastructure, CRM platforms, HRMS systems, and eCommerce
                solutions.
              </p>

              <p>
                My expertise spans React.js, Node.js, PHP, CodeIgniter, MySQL,
                MongoDB, AWS Cloud, Docker, Kubernetes, Terraform, and DevOps
                automation.
              </p>

              <p>
                I have worked on cloud migrations, infrastructure automation,
                CI/CD pipelines, CRM development, payroll systems, and
                production-grade web applications deployed on AWS.
              </p>

              <p>
                I enjoy designing end-to-end solutions—from application
                development to cloud deployment—while focusing on scalability,
                performance, security, and user experience.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
