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
              <div className="about-content">
                <h2 className="fw-bold mb-3">About Me</h2>

                <h5 className="text-warning mb-4">
                  AWS Cloud Engineer | Cloud & DevOps Engineer | Full Stack
                  Developer
                </h5>

                <p className="lead">
                  I specialize in building scalable cloud infrastructure,
                  automating deployments, and developing modern web
                  applications.
                </p>

                <p>
                  With experience across AWS Cloud, DevOps practices, Full Stack
                  Development, CRM systems, HRMS platforms, and eCommerce
                  solutions, I enjoy delivering complete end-to-end solutions
                  from development to deployment.
                </p>

                <div className="tech-badges mt-4">
                  <span className="badge bg-primary m-1">AWS</span>

                  <span className="badge bg-success m-1">Docker</span>

                  <span className="badge bg-info m-1">Kubernetes</span>

                  <span className="badge bg-secondary m-1">Terraform</span>

                  <span className="badge bg-warning text-dark m-1">
                    React.js
                  </span>

                  <span className="badge bg-danger m-1">Node.js</span>

                  <span className="badge bg-dark m-1">PHP</span>

                  <span className="badge bg-primary m-1">MySQL</span>
                </div>

                <div className="row mt-4">
                  <div className="col-6">✅ AWS Cloud Migration</div>

                  <div className="col-6">✅ Infrastructure Automation</div>

                  <div className="col-6">✅ Kubernetes Deployments</div>

                  <div className="col-6">✅ CRM Development</div>

                  <div className="col-6">✅ HRMS & Payroll Systems</div>

                  <div className="col-6">✅ eCommerce Platforms</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
