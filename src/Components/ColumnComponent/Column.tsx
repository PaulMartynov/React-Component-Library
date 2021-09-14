import React from "react";
import "./style.css";

export const Column: React.FC<ColumnProps> = ({ count, children }) => {
  const elements: React.ReactElement[] = [];
  const colCount = count > 0 ? count : 1;
  for (let i = 0; i < colCount; i += 1) {
    elements.push(
      <div className={"col"}>
        <p>{children}</p>
      </div>
    );
  }
  return <div className={"columns"}>{elements}</div>;
};
