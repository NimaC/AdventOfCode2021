import { textFileToStringLines } from "./utility";

describe("Test Utility Functions", () => {
  it("Read File and Return Array of Numbers", () => {
    const textFilePath = "utility/testInput.txt";
    const expectedValue = ["asd 118", "asd 121", "asd 123"];
    expect(textFileToStringLines(textFilePath)).toEqual(expectedValue);
  });
});
