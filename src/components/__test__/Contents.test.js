import { render, screen } from "@testing-library/react";
import Contents from "../Contents";

describe("Header", () => {
  test("should render if their is an h2 heading ", () => {
    render(<Contents />);
    const contentElement = screen.getByRole("heading");
    expect(contentElement).toBeInTheDocument();
  });
})
