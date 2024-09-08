import React from "react";
import Banner from "./Banner";
import { MdSchool } from "react-icons/md";
import { EducationList } from "../util/Education";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Education() {
  return (
    <div className="education mt-5 py-3" id="education">
      <Banner title="Education details" />
      <div className="container">
        <VerticalTimeline>
          {EducationList.map((e) => (
            <VerticalTimelineElement
              key={e.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "", color: "#302b63" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={e.Year}
              iconStyle={{ background: "#0f0c29", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                {e.CourseName}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {e.Univercity}
              </h4>
              <h6>CGPA :{e.cgpa}</h6>
              <h6>Percentage:{e.percentage}</h6>
              {/* <p>
                {e.Work.map((w) => {
                  return <b>{w}</b>;
                })}{" "}
              </p> */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
