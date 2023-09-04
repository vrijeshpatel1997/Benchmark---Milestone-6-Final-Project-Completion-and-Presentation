import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProduct from "./AddProduct";
import MockAdapter from "axios-mock-adapter"; // Import the Axios mock at the top of the file

// Mock Axios requests using axios-mock-adapter (optional)
const mockAxios = new MockAdapter(axios);

describe("AddProduct Component", () => {
  // Write your test cases here

  test("renders AddProduct form and submits data", async () => {
    // ...your test code here
  });

  // Add more test cases if needed
});

// Export the Axios mock at the end of the file
export default mockAxios;
