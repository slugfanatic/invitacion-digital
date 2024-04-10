import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import IChildrenProp from "../Interfaces/Base/IChildrenProp";
import IColorProp from "../Interfaces/Base/IColorProp";
import IVariantProp from "../Interfaces/Base/IVariantProp";


interface SeparatorItemProps extends IChildrenProp, IColorProp, IVariantProp {}

const ItineraryComponent = () => {
  const OppositeItem = (textContent: string) => {
    return (
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      >
        {textContent}
      </TimelineOppositeContent>
    );
  };

  const SeparatorItem: React.FC<SeparatorItemProps> = ({
    children,
    color = "primary",
    variant = "filled",
  }) => {
    return (
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={color} variant={variant}>
          {children}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
    );
  };

  return (
    <Timeline>
      <TimelineItem>
        {OppositeItem("1:30 - 2:00 PM")}
        <SeparatorItem>
          <FastfoodIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            RECEPCIÓN
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {OppositeItem("2:00 - 3:00 PM")}
        <SeparatorItem>
          <LaptopMacIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            CEREMONIA
          </Typography>
          <Typography>RELIGIOSA Y CIVIL</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {OppositeItem("3:00 - 4:00 PM")}
        <SeparatorItem variant="outlined">
          <HotelIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            COCKTAIL
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {OppositeItem("4:10 - 5:10 PM")}
        <SeparatorItem color="secondary">
          <RepeatIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            BANQUETE
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {OppositeItem("5:10 - 11:30 PM")}
        <SeparatorItem color="secondary">
          <RepeatIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            FIESTA
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {OppositeItem("11:30 PM - 1:00 AM")}
        <SeparatorItem color="secondary">
          <RepeatIcon />
        </SeparatorItem>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            TORNABODA
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default ItineraryComponent;
