import { BackgroundFillType, ContainerType } from "../../Types/types";
import IChildrenProp from "../Base/IChildrenProp";

interface ICptContainer extends IChildrenProp {
  background?: BackgroundFillType;
  type: ContainerType;
}

export default ICptContainer;
