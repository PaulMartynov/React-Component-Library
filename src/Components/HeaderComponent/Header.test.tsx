import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header tests", () => {
  [1, 2, 3, 4, 5, 6].forEach((lvl) => {
    test(`h${lvl} test`, () => {
      render(<Header level={lvl}>Test header</Header>);
      expect(screen.getByText("Test header")).toBeInTheDocument();
      expect(screen.getByText("Test header").tagName).toBe(`H${lvl}`);
    });
  });
});
