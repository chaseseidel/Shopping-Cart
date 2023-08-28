import { render } from "@testing-library/react";
import LoadingPage from "../LoadingPage";

describe("LoadingPage component", () => {
  it("renders loader component", () => {
    const { container } = render(<LoadingPage />);

    const loader = container.querySelector("Loader");

    expect(loader).toBeDefined();
  });
});
