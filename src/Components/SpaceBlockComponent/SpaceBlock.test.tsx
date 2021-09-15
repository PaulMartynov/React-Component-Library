import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SpaceBlock } from "./SpaceBlock";

describe("test SpaceBlock", () => {
  test("SpaceBlock  render", () => {
    render(<SpaceBlock blockHeight={100} />);
    expect(screen.getByTestId("space-test")).toBeInTheDocument();
    expect(screen.getByTestId("space-test").style.height).toBe("100px");
    expect(screen.getByTestId("hr-test")).toBeInTheDocument();
  });
});
