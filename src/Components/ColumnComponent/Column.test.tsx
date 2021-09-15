import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Column } from "./Column";

describe("test ColumnComponent", () => {
  test.each([1, 2, 3, 4, 5, 6])(
    "render ColumnComponent count %i",
    (el: number) => {
      render(<Column count={el} children={"test"} />);
      expect(screen.getAllByText("test")[0]).toBeInTheDocument();
      expect(screen.getAllByText("test")).toHaveLength(el);
    }
  );
  test("with col count = 0", () => {
    render(<Column count={0} children={"test"} />);
    expect(screen.getAllByText("test")[0]).toBeInTheDocument();
    expect(screen.getAllByText("test")).toHaveLength(1);
  });
});
