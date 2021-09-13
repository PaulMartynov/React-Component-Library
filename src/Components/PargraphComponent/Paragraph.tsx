import React from "react";
import "./style.css";

export const Paragraph: React.FC<ParagraphProps> = ({ styles, children }) => {
  return React.createElement("p", { className: styles.join(" ") }, children);
};
