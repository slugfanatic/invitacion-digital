import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CptCountdownTimeItem from "../CptCountdownTimeItem/CptCountdownTimeItem";
import { LblWelcome } from "../../Labels";
import ICptCountdown from "../../../Interfaces/Components/ICptCountdown";
import useCountdown from "../../../Hooks/useCountdown";

const CptCountdown: React.FC<ICptCountdown> = ({
  shape,
  color,
  glass,
}): JSX.Element => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2024-06-08 13:30:00")
  );

  let countdownUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  const isCountdownActive = () =>
    days > 0 || hours > 0 || minutes > 0 || seconds > 0;

  const renderCountdown = (): JSX.Element => {
    if (isCountdownActive()) {
      const updatedCountdownUnits = countdownUnits.map((unit) => ({
        ...unit,
        selectedColor:
          color === "alternate"
            ? unit.label === "Days" || unit.label === "Minutes"
              ? "primary"
              : "secondary"
            : color,
      }));

      return (
        <Grid2 container spacing={1}>
          {updatedCountdownUnits.map(({ value, label, selectedColor }) => (
            <Grid2 key={label} xs="auto">
              <CptCountdownTimeItem
                shape={shape}
                color={selectedColor}
                value={value}
                label={label}
                glass={glass}
              />
            </Grid2>
          ))}
        </Grid2>
      );
    }

    return <LblWelcome />;
  };

  return renderCountdown();
};

export default CptCountdown;
