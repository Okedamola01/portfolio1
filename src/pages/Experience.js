import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School'

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2011 - 2017"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />} >
          <h3 className="vertical-timeline-element-title">
            Edfan International College, Eyita Ikorodu, Lagos State
          </h3>
          <p>Secondary school certificate</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience