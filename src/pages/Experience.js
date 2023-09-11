import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2011 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Edfan International College, Eyita Ikorodu, Lagos State
          </h3>
          <p>Secondary school certificate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Hardware Maintenance Rep - AOS Practice
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangbose, Lagos Island.
          </h4>
          <p>I worked with seasoned industry experts to install, configure, test and repair the company system hardware.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2020 - ~"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Caleb University Imota
          </h3>
          <p>Bsc, Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Intern - Unflinched Tech LTD.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Town, Ikorodu, Lagos State.
          </h4>
          <p>I collaborated with fellow tech enthusiasts to develop sophisticated web applications that encompassed comprehensive functionalities, including Back-End dev, Front-End design and database management.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience