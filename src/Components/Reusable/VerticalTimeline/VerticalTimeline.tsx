import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import IconMapper from "../IconMapper/IconMapper";
import "./VerticalTimeline.scss";

interface TimelineEvent {
  dateOrTime: string;
  title: string;
  description: string;
  iconFinder: string;
}

interface VerticalTimelineProps {
  events: TimelineEvent[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {
  return (
    <Timeline className="timeline" position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index} className="timelineItem">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {event.dateOrTime}
          </TimelineOppositeContent>
          <TimelineSeparator className="timelineSeparator">
            <TimelineDot
              color="primary"
              variant="outlined"
              className="timelineDot"
            >
              {IconMapper(event.iconFinder)}
            </TimelineDot>
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent className="timelineContent">
            <Paper elevation={3} className="paper">
              <Typography
                variant="h5"
                component="h2"
                className="title"
                gutterBottom
              >
                {event.title}
              </Typography>
              <Typography variant="body1" component="p" className="description">
                {event.description}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default VerticalTimeline;
