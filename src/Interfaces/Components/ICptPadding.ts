import IChildrenProp from "../Base/IChildrenProp";
import IPaddingSizeProp from "../Base/IPaddingSizeProp";
import IInnerRef from "../Base/IInnerRef";

interface ICptPadding<T> extends IChildrenProp, IPaddingSizeProp, IInnerRef<T> {}

export default ICptPadding;
