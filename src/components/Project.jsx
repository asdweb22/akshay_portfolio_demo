import Banner from "./Banner";
import { AiFillGithub } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { Projects } from "../util/Projects";
export default function Project() {
  return (
    <div>
      <div className="container Projects" id="prjects">
        <Banner title="Projects" />
        <div className="row mt-5">
          {Projects.map((project) => (
            <div className="col-md-4 mt-3" key={project.id}>
              <Fade bottom>
                <div className="card shadow rounded">
                  <div className="card-image">
                    <span className="card-notify-badge py-2 px-2 rounded shadow">
                      {project.Project_Type}
                    </span>
                    <img src={project.Project_img} alt="" srcset="" />
                  </div>

                  <div className="card-body">
                    <div className="ad-title">
                      <h5 className="text-uppercase">{project.Project_name}</h5>
                    </div>

                    <div className="media my-2 d-flex justify-content-center">
                      <div className="alig-self-center">
                        <a
                          href={project.Project_deployed_link}
                          className="btn btn-sm card-btn shadow"
                        >
                          Live
                        </a>
                        <a href={project.Project_github_link}>
                          <AiFillGithub className="tech-icon" />
                        </a>
                      </div>
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
