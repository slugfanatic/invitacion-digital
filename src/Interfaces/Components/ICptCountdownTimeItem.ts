import ICptColorProp from "../Base/ICptColorProp";
import ICptCountdownTimeShapeProp from "../Base/ICptCountdownTimeShapeProp";
import IGlassProp from "../Base/IGlassProp";

interface ICptCountdownTimeItem
  extends ICptColorProp,
    ICptCountdownTimeShapeProp,
    IGlassProp {
  value: number;
  label: string;
}

export default ICptCountdownTimeItem;
