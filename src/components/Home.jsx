import React from "react";
import img1 from "../images/asd3.jpg";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import Resume from "../docs/Akshay_Dhongade_Resume_2026.pdf";

export default function Home() {
  return (
    <div className="mainFrame text-white">
      <div className="container px-3 py-3 text-white">
        <div className="row">
          <div className="col-12 col-md-6 py-4 px-3 text-center text-md-start">
            <h1 className="fw-bold">Akshay Dhongade</h1>

            <div style={{ minHeight: "50px" }}>
              <h4 className="text-warning">
                <Typewriter
                  options={{
                    strings: [
                      "AWS Cloud Engineer",
                      "Cloud & DevOps Engineer",
                      "Full Stack Developer",
                      "React & Node.js Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
            </div>

            <p className="mt-4">
              Passionate about building scalable cloud infrastructure,
              automating deployments, and developing modern web applications
              using AWS, Docker, Kubernetes, Terraform, React.js and Node.js.
            </p>
            <div className="row mt-4 text-center g-3">
              <div className="col-4 col-md-4">
                <h4>4+</h4>
                <small>Years Experience</small>
              </div>

              <div className="col-4 col-md-4">
                <h4>10+</h4>
                <small>Projects</small>
              </div>

              <div className="col-4 col-md-4">
                <h4>AWS</h4>
                <small>Cloud & DevOps</small>
              </div>
            </div>
            <br />

            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>

              <a href="#contact" className="btn btn-outline-light">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <Fade right>
              <img
                src={img1}
                alt="Akshay Dhongade"
                height={350}
                width={350}
                srcset=""
                className="img-fluid rounded-circle"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
