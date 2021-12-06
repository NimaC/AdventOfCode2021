import { dive, inputStringToCommands } from "./dive";

describe("Dive Functionality", () => {
  it("test case", () => {
    const pathToInput = "2/exampleInput.txt";
    const inputCommands = inputStringToCommands(pathToInput);
    const result = dive(inputCommands);
    expect(result).toBe(900);
  });
});
