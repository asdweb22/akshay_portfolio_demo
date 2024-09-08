import React from "react";
import Banner from "./Banner";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceList } from "../util/Experience";

export default function Experience() {
  return (
    <div className="experience mt-5 py-3" id="experience">
      <Banner title="Work Experience" />
      <div className="container">
        <VerticalTimeline>
          {ExperienceList.map((e) => (
            <VerticalTimelineElement
              key={e.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "", color: "##302b63" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={e.Year}
              iconStyle={{ background: "#0f0c29", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {e.CompanyName} , {e.location}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{e.Role}</h4>
              <ul>
                {e.Work.map((w) => (
                  <li key={w.w}>{w}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
