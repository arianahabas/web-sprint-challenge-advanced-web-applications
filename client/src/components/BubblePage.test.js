  
// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import BubblePage from "./BubblePage";
// import { fetchApi as mockFetch } from './fetchApi'


// const testData = [
//   {
//     color: "aliceblue",
//     code: {
//       hex: "#f0f8ff"
//     },
//     id: 1
//   },
//   {
//     color: "limegreen",
//     code: {
//       hex: "#99ddbc"
//     },
//     id: 2
//   },
 
// ]

// jest.mock(`./fetchApi`)


// test("Fetches data and renders the bubbles", async () => {
//   // Finish this test
//   mockFetch.mockResolvedValue(testData)
//   render(<BubblePage />)
//   await waitFor(() => {
//     expect(screen.getByTestId(/colorTest/i)).toBeInTheDocument()
//   })
//   await waitFor(() => {
//     expect(screen.getByText(/limegreen/i)).toBeInTheDocument()
//   })
  
// });

// test("Fetches data and renders the bubbles", async () => {
  // mockFetchColors.mockResolvedValueOnce(colorData)
  // // render(<BubblePage/>)
  // expect( await screen.findByText(/aliceblue/i))

//   const { rerender } = render(<BubblePage colors={[]}/>)
//   rerender(<BubblePage colors={testData}/>)
//   const bubbleList = screen.getAllByTestId(/colorTest/i)
//   expect(bubbleList).toHaveLength(2)
// });

import { fetchApi as mockFetch } from "./fetchApi";
jest.mock("./fetchApi");
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