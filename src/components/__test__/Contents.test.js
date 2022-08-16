import { render, screen } from "@testing-library/react";
import Contents from "../Contents";

describe("Contents", () => {
  test("should render if their is an h2 heading", () => {
    render(<Contents />);
    const contentElement = screen.getByRole("heading", {
      name: /List of Algorand Standard Assets on ASAlytics/i,
    });
    expect(contentElement).toBeInTheDocument();
  });

  test("should render if preloader is present", () => {
    render(<Contents />);
    const contentSpinerElement = screen.getByTestId("spiner");
    expect(contentSpinerElement).toBeInTheDocument();
  });
});
