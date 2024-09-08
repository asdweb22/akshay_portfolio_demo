import React from "react";
import Banner from "./Banner";
import { TechStackList } from "../util/TechstackList";

export default function TechStack() {
  return (
    <div className="container techstack" id="techstack">
      <Banner title="Skill Set" />
      
      <div className="row">
        {TechStackList.map((tech) => (
          <div className="col-md-4 mt-3" key={tech._id}>
            <div className="card shadow">
              <div className="card-body ">
                <div className="media my-2 d-flex justify-content-center">
                  <div className="alig-self-center">
                    <tech.icon className="tech-icon" />
                  </div>
                  <div className="media-body">
                    <h5>{tech.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
