import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("Text component", () => {
  test("render img", () => {
    render(<Image floatStyle={"none"} source={""} />);
    expect((screen.getByTestId("image-test") as HTMLImageElement).src).toBe(
      "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkujMHW4X6m6uAQDZZ4YvTo6aKTM5SRkZCeTgDn6uOyic"
    );
    expect(
      (screen.getByTestId("image-test") as HTMLImageElement).style.float
    ).toBe("none");
  });
  test("img left float, and different source", () => {
    render(<Image floatStyle={"left"} source={"test-source"} />);
    expect((screen.getByTestId("image-test") as HTMLImageElement).src).toBe(
      "http://localhost/test-source"
    );
    expect(
      (screen.getByTestId("image-test") as HTMLImageElement).style.float
    ).toBe("left");
  });
});
