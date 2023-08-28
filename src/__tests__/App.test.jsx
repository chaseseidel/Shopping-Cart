import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    const { container } = render(<App />);

    console.log(container);
  });
});
