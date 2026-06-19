import React from "react";
import { GrMail } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer py-5">
      <div className="container text-center">
        <h4 className="fw-bold">Akshay Dhongade</h4>

        <p>
          AWS Cloud Engineer | Cloud & DevOps Engineer | Full Stack Developer
        </p>

        <div className="social-icons my-4">
          <a href="mailto:akshay.dhongade.work@gmail.com" title="Email">
            <GrMail />
          </a>

          <a
            href="https://github.com/asdweb22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/iamakshaydhongade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <hr />

        <small>© 2026 Akshay Dhongade. All Rights Reserved.</small>
      </div>
    </div>
  );
}
