import { textFileToStringLines } from "../../utility/utility";
import sweep from "./sweep";

describe("Sonar Sweep Functionality", () => {
  it("empty case", () => {
    const input = [];
    expect(sweep(input)).toBe(0);
  });

  it("single item", () => {
    const input = [1];
    expect(sweep(input)).toBe(0);
  });

  it("basic case", () => {
    const pathToInput = "1/exampleInput.txt";
    const input = textFileToStringLines(pathToInput).map((line) => {
      return parseInt(line, 10);
    });
    expect(sweep(input)).toBe(5);
  });
});
