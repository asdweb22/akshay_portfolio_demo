import React from "react";
import { GrMail } from "react-icons/gr";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer text-center py-3">
      <div className="row container">
        <div className="col-md-6">
          <h6>
            <b>
              &copy;2025 My portfolio designed By
              <span className=""> Akshay Dhongade</span>
            </b>
          </h6>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2 ">
          <div className="div icon-div">
            <a
              href="mailto:dhongade.akshay@outlook.com?subject=Hello Akshay&body=I would like to connect with you regarding..."
              title="Send an email to dhongade.akshay@outlook.com"
            >
              <GrMail className="mx-3" style={{ fontSize: '30px' }} />
            </a>

            <a href="https://github.com/asdweb22" target="_blank">
              <AiFillGithub className="mx-3" style={{ fontSize: '30px' }} />
            </a>

            <a href="https://www.linkedin.com/in/iamakshaydhongade/" target="_blank">
              <AiFillLinkedin className="mx-3" style={{ fontSize: '30px' }} />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
