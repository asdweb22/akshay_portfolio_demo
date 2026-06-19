import Banner from "./Banner";
import { AiFillGithub } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Projects } from "../util/Projects";

export default function Project() {
  return (
    <div>
      <div className="container Projects" id="projects">
        <Banner title="Projects" />

        <div className="row mt-5">
          {Projects.map((project) => (
            <div className="col-md-4 mt-4" key={project.id}>
              <Fade bottom>
                <div className="card shadow rounded h-100">
                  <div className="card-image position-relative">
                    <span className="card-notify-badge py-2 px-3 rounded shadow">
                      {project.Project_Type}
                    </span>

                    <img
                      src={project.Project_img}
                      alt={project.Project_name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="text-uppercase mb-3">
                      {project.Project_name}
                    </h5>

                    <div className="d-flex justify-content-center align-items-center gap-3">
                      {project.Project_deployed_link && (
                        <a
                          href={project.Project_deployed_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm card-btn shadow"
                        >
                          Live Demo
                        </a>
                      )}

                      {project.Project_github_link ? (
                        <a
                          href={project.Project_github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub
                            className="tech-icon"
                            title="View Source Code"
                          />
                        </a>
                      ) : (
                        <span className="badge bg-secondary d-flex align-items-center gap-2">
                          <FaBriefcase />
                          Professional Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
