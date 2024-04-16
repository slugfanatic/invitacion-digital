import React from "react";
import { Cake } from "@mui/icons-material";

const IconMapper = (iconName: string): React.ReactElement => {
  const Icons = require("@mui/icons-material");
  const iconMap: { [key: string]: React.ElementType } = {
    default: Icons.Info,
    cake: Cake,
    start: Icons.EventAvailable,
    end: Icons.EventBusy,
    milestone: Icons.CheckCircle,
    warning: Icons.Warning,
    error: Icons.Error,
    darkMode: Icons.DarkMode,
    festival: Icons.Festival,
    eventStart: Icons.EventIcon,
  };

  if (!iconMap[iconName]) {
    console.error(`Icon "${iconName}" not found. Returning default icon.`);
    return <Icons.Info />;
  }

  const IconComponent = iconMap[iconName];
  return <IconComponent color="secondary" />;
};

export default IconMapper;
