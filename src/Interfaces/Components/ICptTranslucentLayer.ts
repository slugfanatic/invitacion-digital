import IChildrenProp from "../Base/IChildrenProp";
import IClassNameProp from "../Base/IClassNameProp";
import ICptColorProp from "../Base/ICptColorProp";
import ICptOpacityProp from "../Base/ICptOpacityProp";
import IGlassProp from "../Base/IGlassProp";

interface ICptTranslucentLayer
  extends IChildrenProp,
    IGlassProp,
    IClassNameProp,
    ICptColorProp,
    ICptOpacityProp {}

export default ICptTranslucentLayer;
