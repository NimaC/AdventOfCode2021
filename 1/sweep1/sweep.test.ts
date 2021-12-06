import { textFileToStringLines } from "../../utility/utility";
import sweep from "./sweep";

describe("Sonar Sweep Functionality", () => {
  it("empty case", () => {
    const sweepInput = [];
    expect(sweep(sweepInput)).toBe(0);
  });

  it("single item", () => {
    const sweepInput = [1];
    expect(sweep(sweepInput)).toBe(0);
  });

  it("example case", () => {
    const pathToInput = "1/exampleInput.txt";
    const input = textFileToStringLines(pathToInput).map((line) => {
      return parseInt(line, 10);
    });
    expect(sweep(input)).toBe(7);
  });
});
