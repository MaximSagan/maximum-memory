import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders game setup title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Game setup/i);
  expect(titleElement).toBeInTheDocument();
});
