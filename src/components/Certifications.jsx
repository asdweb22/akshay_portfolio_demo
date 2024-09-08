import React from "react";
import img1 from "../images/project-img.jpg";
import Banner from "./Banner";
import Fade from "react-reveal/Fade";
import { CertificationList } from "../util/Certifications";

export default function Certifications() {
  return (
    <div className="container Certificates" id="certifications">
      <Banner title="Certifications" />
      <div className="row mt-5">
        {CertificationList.map((c) => (
          <div className="col-md-4 mt-3" key={c.id}>
            <Fade bottom>
              <div className="card shadow rounded">
                <div className="card-image">
                  <img src={c.image} alt="" srcset="" />
                </div>
                {/* <div className="card-image-overlay m-auto py-2 mt-3">
                  <span className="card-detail-badge mt-2 shadow">Primary</span>
                  <span className="card-detail-badge mt-2 shadow">Express</span>
                  <span className="card-detail-badge mt-2 shadow">React</span>
                  <span className="card-detail-badge mt-2 shadow">
                    Mongo Db
                  </span>
                </div> */}
                <div className="card-body">
                  <div className="ad-title">
                    <h5 className="text-uppercase">{c.CertificateName}</h5>
                  </div>

                  <div className="media my-2 d-flex justify-content-center">
                    <div className="alig-self-center">
                      <a
                        href={c.certificate}
                        target="_blank"
                        className="btn btn-sm card-btn shadow"
                      >
                        view
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
  );
}
