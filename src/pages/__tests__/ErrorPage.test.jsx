import { render, screen } from "@testing-library/react";
import ErrorPage from "../ErrorPage";

describe("ErrorPage component", () => {
  it("renders correct text", () => {
    render(<ErrorPage />);

    const text = screen.getByText("404 Error. This page does not exist.");

    expect(text).toBeDefined();
  });
});
