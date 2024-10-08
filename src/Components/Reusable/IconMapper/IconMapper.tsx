import React from "react";

const IconMapper = (iconName: string): React.ReactElement => {
  const Icons = require("@mui/icons-material");
  const iconMap: { [key: string]: React.ElementType } = {
    default: Icons.Info,
    cake: Icons.Cake,
    cup: Icons.LocalBar,
    lunch: Icons.LunchDining,
    brunch: Icons.BrunchDining,
    church: Icons.Church,
    start: Icons.EventAvailable,
    end: Icons.EventBusy,
    milestone: Icons.CheckCircle,
    warning: Icons.Warning,
    error: Icons.Error,
    darkMode: Icons.DarkMode,
    festival: Icons.Festival,
    eventStart: Icons.EventIcon,
    soccer: Icons.SportsSoccer,
    attractions: Icons.Attractions,
    emoji: Icons.EmojiEmotions,
  };

  if (!iconMap[iconName]) {
    console.error(`Icon "${iconName}" not found. Returning default icon.`);
    return <Icons.Info />;
  }

  const IconComponent = iconMap[iconName];
  return <IconComponent color="secondary" />;
};

export default IconMapper;
