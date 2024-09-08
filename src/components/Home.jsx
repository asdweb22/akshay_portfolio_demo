import React from "react";
import img1 from "../images/asd3.jpg";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import Resume from "../docs/devops_Resume_2024_ASD.pdf";

export default function Home() {
  return (
    <div className="mainFrame text-white">
      <div className="container px-3 py-3 text-white">
        <div className="row">
          <div className="col-6 py-4 px-4 text-center">
            <h2>
              {" "}
              Hi I am
              <Typewriter
                options={{
                  strings: [
                    "Devops Engineer",
                    "Aws Cloud Engineer",
                    "React Developer",
                    "UI/UX Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <br />

            <a
              href={Resume}
              target="_blank"
              // download="Akshay_Dhongade_resume.pdf"
              className="btn btn-primary"
            >
              My Resume
            </a>
          </div>
          <div className="col-md-6 text-center">
            <Fade right>
              <img
                src={img1}
                alt=""
                height={250}
                width={250}
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
