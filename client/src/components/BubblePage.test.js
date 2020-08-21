import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockApi } from './fetchApi'

let mockData = {
  data: [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
]
}
jest.mock(`./fetchApi`)

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockApi.mockResolvedValue(mockData)

  render(<BubblePage />)

  await waitFor(() => {
    expect(screen.getByTestId(/colortest/i)).toBeInTheDocument()
  })
  // debug();

  await waitFor(() => {
    expect(screen.getByText(/limegreen/i)).toBeInTheDocument()
  })
  


});