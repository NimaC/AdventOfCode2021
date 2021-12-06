import { textFileToNumbers } from "./utility";

describe("Test Utility Functions", () => {
  it("Read File and Return Array of Numbers", () => {
    const textFilePath = "utility/testInput.txt";
    const expectedValue = [118, 121, 123];
    expect(textFileToNumbers(textFilePath)).toEqual(expectedValue);
  });
});
