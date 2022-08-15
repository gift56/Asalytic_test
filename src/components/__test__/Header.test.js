import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should rending if logo image is in header area", () => {
  render(<Header />);
  const headerElement = screen.getByRole("img");
  expect(headerElement).toBeInTheDocument();
});
