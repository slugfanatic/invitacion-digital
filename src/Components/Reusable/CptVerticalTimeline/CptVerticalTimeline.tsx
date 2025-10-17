import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { 
  Paper, 
  Theme, 
  Typography, 
  Box, 
  IconButton,
  useTheme,
  useMediaQuery,
  MobileStepper
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import IconMapper from "../IconMapper/IconMapper";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import ICptVerticalTimeline from "../../../Interfaces/Components/ICptVerticalTimeline";

const CptVerticalTimeline: React.FC<ICptVerticalTimeline> = ({
  position = "alternate",
}) => {
  const {
    currentCelebrant: { events },
  } = useCelebrationContext();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);

  // Reiniciar el carrusel cuando cambien los eventos
  useEffect(() => {
    setActiveStep(0);
  }, [events]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % events.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep === 0 ? events.length - 1 : prevActiveStep - 1
    );
  };

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
          color="secondary"
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
            p: 2,
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

  // Versión móvil - Carrusel
  const MobileCarousel = () => {
    const currentEvent = events[activeStep];

    return (
      <Box sx={{ width: '100%', p: 2 }}>
        {/* Indicador de progreso */}
        <MobileStepper
          variant="dots"
          steps={events.length}
          position="static"
          activeStep={activeStep}
          sx={{ 
            justifyContent: 'center',
            backgroundColor: 'transparent',
            mb: 2
          }}
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={events.length <= 1}
            >
              <KeyboardArrowRight />
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={events.length <= 1}
            >
              <KeyboardArrowLeft />
            </IconButton>
          }
        />

        {/* Contenido del evento actual */}
        <Paper
          elevation={3}
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.primary.main + 80,
            p: 3,
            mb: 2,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Fecha/hora */}
          {currentEvent.dateOrTime && (
            <Typography 
              variant="h6" 
              color="text.secondary"
              gutterBottom
              sx={{ textShadow: "0px 0px 5px #000" }}
            >
              {currentEvent.dateOrTime}
            </Typography>
          )}

          {/* Ícono - usando el mismo mapeador que en desktop */}
          <Box sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {currentEvent.iconType ? (
              <TimelineDot 
                color="primary" 
                variant="outlined" 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 48,
                  height: 48
                }}
              >
                {IconMapper(currentEvent.iconType)}
              </TimelineDot>
            ) : (
              <TimelineDot 
                color="primary" 
                variant="filled" 
                sx={{ 
                  width: 32,
                  height: 32
                }} 
              />
            )}
          </Box>

          {/* Título y descripción */}
          <Typography variant="h5" gutterBottom>
            {currentEvent.title}
          </Typography>
          <Typography variant="body2">
            {currentEvent.description}
          </Typography>
        </Paper>

        {/* Indicador de posición */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          textAlign="center"
        >
          {activeStep + 1} / {events.length}
        </Typography>
      </Box>
    );
  };

  // Versión desktop - Timeline normal
  const DesktopTimeline = () => (
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

  return isMobile ? <MobileCarousel /> : <DesktopTimeline />;
};

export default CptVerticalTimeline;
