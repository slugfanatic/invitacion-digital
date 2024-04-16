import React from "react";
import { splitMessageBySeparator } from "../../../Utils/splitStringBySeparator";

const CptSplitBr: React.FC<{ message: string }> = ({ message: mensaje }) => {
  const messageParts = splitMessageBySeparator(mensaje, "<br />");

  return (
    <>
      {messageParts.map((parts, index) => (
        <span key={index}>
          {parts}
          {index !== messageParts.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

export default CptSplitBr;
