import { UrlType } from "../../Types/types";

interface ICptImageHolder {
  imageUrl: UrlType;
  size?: number | "100%";
  aspectRatio?: string;
}

export default ICptImageHolder;
