import Banner from "./Banner";
import Resume from "../docs/Akshay_Dhongade_Resume_2026.pdf";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div id="contact" className="py-5">
      <Banner title="Let's Connect" />

      <div className="container text-center">
        <h3 className="mb-3">
          Open to AWS Cloud, DevOps & Full Stack Opportunities
        </h3>

        <p>Feel free to connect with me regarding job opportunities</p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <a
            href="mailto:dhongade.akshay@outlook.com"
            className="btn btn-primary"
          >
            <MdEmail /> Email
          </a>

          <a
            href="https://github.com/asdweb22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <AiFillGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/iamakshaydhongade/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info"
          >
            <AiFillLinkedin /> LinkedIn
          </a>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
