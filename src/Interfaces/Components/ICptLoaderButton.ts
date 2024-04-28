import { AnimateType, TimeOutType } from "../../Types/types";

interface ICptLoaderButton {
  onClick: () => void;
  fade: AnimateType;
  time: TimeOutType;
}

export default ICptLoaderButton;
