  
import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";


import { fetchApi as mockFetch } from "./fetchApi";
jest.mock("./fetchApi");

console.log (mockFetch)
// test("Fetches data and renders the bubbles", () => {
//   render(<BubblePage bubbles={[]} error="" />);
// });
const mockData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
  ],
};
test("Fetches data and renders the bubbles", async () => {
  mockFetch.mockResolvedValueOnce(mockData);
  const { debug, getByText } = render(<BubblePage />);
  await waitFor(() => {
      debug();
    expect(getByText(/aqua/i)).toBeInTheDocument()
  })
});
