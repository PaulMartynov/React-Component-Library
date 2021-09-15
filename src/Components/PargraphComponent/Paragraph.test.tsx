import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Text component", () => {
  test("simple text", () => {
    render(<Paragraph styles={[]}>Test paragraph</Paragraph>);
    expect(screen.getByText("Test paragraph")).toBeInTheDocument();
  });
  test("cursive text", () => {
    render(<Paragraph styles={["italic"]}>Test paragraph</Paragraph>);
    expect(screen.getByText("Test paragraph")).toHaveClass("italic");
  });
  test("bold & cursive text", () => {
    render(<Paragraph styles={["italic", "bold"]}>Test paragraph</Paragraph>);
    expect(screen.getByText("Test paragraph")).toHaveClass("italic");
    expect(screen.getByText("Test paragraph")).toHaveClass("bold");
  });
});
