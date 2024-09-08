import React from "react";
import { GrMail } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer text-center py-3">
      <div className="row container">
        <div className="col-md-6">
          <h6>
            <b>
              &copy;2023 My portfolio designed By
              <span className=""> Akshay Dhongade</span>
            </b>
          </h6>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2 ">
          <div className="div icon-div">
            <a href="gmail: akshaydhongade87@gmail.com">
              <GrMail className="mx-3" />
            </a>

            <a href="https://github.com/asdweb22" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
