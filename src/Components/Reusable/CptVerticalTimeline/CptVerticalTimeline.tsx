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
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import ICptVerticalTimeline from "../../../Interfaces/Components/ICptVerticalTimeline";

const CptVerticalTimeline: React.FC<ICptVerticalTimeline> = ({
  position = "alternate",
}) => {
  const {
    currentCelebrant: { events },
  } = useCelebrationContext();

  const cptTimelineOppositeContent = (dateOrTime: string | undefined) => {
    return (
      dateOrTime && (
        <TimelineOppositeContent
          sx={{
            margin: "auto 0",
            textShadow: "0px 0px 5px #000",
            color: (theme: Theme) => theme.palette.text.primary,
          }}
          variant="body2"
          color="seconday"
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
          <TimelineDot color="primary" variant="outlined">
            {IconMapper(events[index].iconType)}
          </TimelineDot>
        ) : (
          <TimelineDot color="primary" variant="filled" />
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
    <Timeline position={position}>
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
