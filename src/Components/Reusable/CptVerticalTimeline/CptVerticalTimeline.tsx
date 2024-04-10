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
import { Paper, Theme, Typography } from "@mui/material";
import IconMapper from "../IconMapper/IconMapper";

interface TimelineEvent {
  dateOrTime: string;
  title: string;
  description: string;
  iconFinder: string;
}

interface VerticalTimelineProps {
  events: TimelineEvent[];
}

const CptVerticalTimeline: React.FC = () => {
  var events = [
    {
      dateOrTime: "1:30 - 2:00 PM",
      title: "Recepción",
      description: "",
      iconType: "festival",
    },
    {
      dateOrTime: "2:00 - 3:00 PM",
      title: "Ceremonia",
      description: "Religiosa y Civil",
      iconType: "festival",
    },
    {
      dateOrTime: "3:00 - 4:00 PM",
      title: "Cocktail",
      description: "",
      iconType: "festival",
    },
    {
      dateOrTime: "4:10 - 5:10 PM",
      title: "Banquete",
      description: "",
      iconType: "festival",
    },
    {
      dateOrTime: "5:10 - 11:30 PM",
      title: "Fiesta",
      description: "",
      iconType: "festival",
    },
    {
      dateOrTime: "",
      title: "Tornaboda",
      description: "",
      iconType: "",
    },
  ];

  const cptTimelineOppositeContent = (dateOrTime: string | undefined) => {
    return (
      dateOrTime && (
        <TimelineOppositeContent
          sx={{ margin: "auto 0", textShadow: "0px 0px 5px #000" }}
          variant="body2"
          color="text.primary"
        >
          {dateOrTime}
        </TimelineOppositeContent>
      )
    );
  };

  const cptTimelineSeparator = (index: number, events: any) => {
    return (
      <TimelineSeparator>
        {events[index].iconType ? (
          <TimelineDot color="secondary" variant="outlined">
            {IconMapper(events[index].iconType)}
          </TimelineDot>
        ) : (
          <TimelineDot color="secondary" variant="filled" />
        )}
        {index < events.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
    );
  };

  const cptTimelineContent = (title: string, description: string) => {
    return (
      <TimelineContent>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.primary.main + 80,
          }}
        >
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Paper>
      </TimelineContent>
    );
  };

  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          {cptTimelineOppositeContent(event.dateOrTime)}
          {cptTimelineSeparator(index, events)}
          {cptTimelineContent(event.title, event.description)}
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CptVerticalTimeline;
