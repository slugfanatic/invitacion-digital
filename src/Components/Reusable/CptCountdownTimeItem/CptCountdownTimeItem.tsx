import CptTranslucentLayer from "../CptTranslucentLayer/CptTranslucentLayer";
import ICptCountdownTimeItem from "../../../Interfaces/Components/ICptCountdownTimeItem";
import { LblTimeItemNumber, LblTimeItemString } from "../../Labels";
import "./CptCountdownTimeItem.scss";

const CptCountdownTimeItem: React.FC<ICptCountdownTimeItem> = ({
  shape,
  color,
  value,
  label,
  glass,
}): JSX.Element => {
  return (
    <CptTranslucentLayer
      className={`countdown-time-item timer-${shape}`}
      color={color}
      glass={glass}
      opacity={0.7}
    >
      <LblTimeItemNumber>{value}</LblTimeItemNumber>
      <LblTimeItemString>{label}</LblTimeItemString>
    </CptTranslucentLayer>
  );
};

export default CptCountdownTimeItem;
