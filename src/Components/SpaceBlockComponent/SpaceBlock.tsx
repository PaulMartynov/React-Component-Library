import React from "react";

export const SpaceBlock: React.FC<SpaceBlockProps> = ({ blockHeight }) => {
  return (
    <div
      data-testid="space-test"
      style={{
        height: blockHeight,
        border: "solid 1px",
      }}
    >
      <hr data-testid="hr-test" />
    </div>
  );
};
