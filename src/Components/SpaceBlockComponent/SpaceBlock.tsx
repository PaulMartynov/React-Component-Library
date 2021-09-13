import React from "react";

export const SpaceBlock: React.FC<SpaceBlockProps> = ({ blockHeight }) => {
  return (
    <div
      style={{
        height: blockHeight,
        border: "solid 1px",
      }}
    >
      <hr />
    </div>
  );
};
