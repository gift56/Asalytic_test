import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("should render if logo image is present in header", () => {
    render(<Header />);
    const headerElement = screen.getByRole("img");
    expect(headerElement).toBeInTheDocument();
  });
  test("should render if the is a button text in the header", () => {
    render(<Header />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("should render if the button text is ANALYZE ASAs", () => {
    render(<Header />);
    const buttonTextElement = screen.getByText(/ANALYZE ASAs/i);
    expect(buttonTextElement).toBeInTheDocument();
  });
})
