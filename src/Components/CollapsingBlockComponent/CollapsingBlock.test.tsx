import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CollapsingBlock } from "./CollapsingBlock";

describe("test CollapsingBlock", () => {
  test("CollapsingBlock render", () => {
    render(<CollapsingBlock children={"content"} headerTxt={"header"} />);
    expect(screen.getByText("header")).toBeInTheDocument();
    userEvent.click(screen.getByText("Показать"));
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
